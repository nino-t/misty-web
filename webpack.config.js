const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const HtmlWebpackPugPlugin = require("html-webpack-pug-plugin");

const nodeENV = process.env.NODE_ENV || 'development';
const isProductionMode = ['staging', 'production'].indexOf(nodeENV) >= 0 ? true : false;

let webpackPlugins = []
if (isProductionMode === false) {
  webpackPlugins = [
    ...webpackPlugins,
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ]
}

module.exports = {
  mode: isProductionMode ? 'production' : 'development',
  entry: [
    'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000',
    './app/app.tsx',
  ],
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: '/static/',
    filename: "bundle.js"
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./app/index.pug", 
      filename: "./index.pug",
      minify: false
    }),
    new HtmlWebpackPugPlugin(),
    ...webpackPlugins
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: ["ts-loader"]
      },
      {
        test: /\.(css|scss)$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(jpg|jpeg|png|gif|mp3|svg)$/,
        use: ["file-loader"],
      }
    ],
  },
};
