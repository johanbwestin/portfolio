var path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
var webpack = require('webpack')
const Dotenv = require('dotenv-webpack');
const common = require("./webpack.common")
const merge = require("webpack-merge")
var HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = merge(common, {
  mode: 'development',
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, "dist")
  },
  devServer: {
    proxy: {
      '/api': {
        pathRewrite: { 
          '^/api': '' 
        },
        changeOrigin: true,
        target: 'http://localhost:3000',
      }
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      favicon:'./src/assets/media/png/favicon.png',
      template: "./src/template.html",
      // chunksSortMode: "dependency"
    })
  ],
  module: {
    rules: [
      {
        loader: ['vue-style-loader', 'css-loader'],
        test: /\.css$/
      }, {
        loader: ['vue-style-loader', 'css-loader', 'sass-loader'],
        test: /\.scss$/
      },
      {
        loader: 'vue-loader',
        test: /\.vue$/
      },
    ]
  }
})
