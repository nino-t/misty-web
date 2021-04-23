const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const HtmlWebpackPugPlugin = require("html-webpack-pug-plugin");

module.exports = {
  mode: 'development',
  entry: [
    'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000',
    './app/app.js',
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: '/static',
    filename: "bundle.js"
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./app/index.pug", 
      filename: "./index.pug",
      minify: false
    }),
    new HtmlWebpackPugPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
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
    ],
  },
};
