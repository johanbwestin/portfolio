const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const webpack = require('webpack')
const Dotenv = require('dotenv-webpack')
const common = require("./webpack.common")
const merge = require("webpack-merge")
const HtmlWebpackPlugin = require('html-webpack-plugin')

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
      favicon: './src/assets/media/png/favicon.png',
      template: "./src/template.html",
      // chunksSortMode: "dependency"
    })
  ],
  module: {
    rules: [
      // {
      //   test: /\.js$/,
      //   use: {
      //     loader: 'babel-loader',
      //     options: {
      //       presets: ['@babel/preset-env'],
      //       envName: 'development'
      //     }, 
      //   }
      // },
      {
        loader: 'vue-loader',
        test: /\.vue$/
      },
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: 'babel-loader'
      },
      {
        loader: ['vue-style-loader', 'css-loader'],
        test: /\.css$/
      },
      {
        loader: ['vue-style-loader', 'css-loader', 'sass-loader'],
        test: /\.scss$/
      },
    ]
  }
})
