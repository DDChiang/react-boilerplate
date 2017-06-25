// THIS IS DEV/LOCAL VERSION
const merge = require('webpack-merge');
const path = require('path');
const webpack = require('webpack');
const commonConfig = require('./webpack.common.js');

const mergedConfig = merge(commonConfig, {
  // https://webpack.github.io/docs/configuration.html#devtool
  devtool: 'inline-source-map',
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    sourceMapFilename: '[name].map'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(), // Enable HMR
  ],
  devServer: {
    port: 1888,
    historyApiFallback: true,
    hot: true, // Tell dev server we're using HMR
    contentBase: path.resolve(__dirname, 'dist'),
    publicPath: '/'
  }
});

module.exports = mergedConfig;
