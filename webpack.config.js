const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const HtmlWebpackPugPlugin = require('html-webpack-pug-plugin')
const ESLintPlugin = require("eslint-webpack-plugin")

const nodeENV = process.env.NODE_ENV || 'development'
const isProductionMode = ['staging', 'production'].indexOf(nodeENV) >= 0

let devEntries = []
let devWebpackPlugins = []

if (isProductionMode === false) {
  devWebpackPlugins = [
    ...devWebpackPlugins,
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ]

  devEntries = [
    'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000'
  ]
}

module.exports = {
  mode: isProductionMode ? 'production' : 'development',
  entry: [
    ...devEntries,
    './app/app.tsx'
  ],
  resolve: {
    extensions: ['.tsx', '.ts', '.js']
  },
  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: '/static/',
    filename: 'bundle.js'
  },
  plugins: [
    new ESLintPlugin({
      extensions: ["js", "jsx", "ts", "tsx"],
    }),
    new HtmlWebpackPlugin({
      template: './app/index.pug',
      filename: './index.pug',
      minify: false
    }),
    new HtmlWebpackPugPlugin(),
    ...devWebpackPlugins
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: ['ts-loader']
      },
      {
        test: /\.(css|scss)$/,
        use: ['style-loader', 'css-loader', 'postcss-loader']
      },
      {
        test: /\.(jpg|jpeg|png|gif|mp3|svg)$/,
        use: ['file-loader']
      }
    ]
  }
}
