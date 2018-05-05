const webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebPackPlugin = require("html-webpack-plugin");

const HtmlWebpackPluginConfig = new HtmlWebPackPlugin({
  template: './index.html',
  filename: 'index.html',
  inject: 'body'
})


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
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: "css-loader"
        })
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
  plugins: [
    new ExtractTextPlugin('css/[name].css'),
HtmlWebpackPluginConfig
  ]
};

module.exports = config;
