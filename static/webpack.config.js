const webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebPackPlugin = require("html-webpack-plugin");


const config = {
  entry:  __dirname + '/js/index.jsx',
  output: {
    path: __dirname + '/dist',
    filename: 'js/bundle.js',
  },
  resolve: {
    extensions: [".js", ".jsx", ".css"]
  },
  module: {
    rules: [
      {
        test: /\.jsx?/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query  :{
          presets:['react','es2015']
        }
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: { name: '[path][name].[ext]'}
          }
        ]
      }
    ]
  },
  // plugins: [
  //   new ExtractTextPlugin('css/[name].css'),
  //
  // ]
};

module.exports = config;
