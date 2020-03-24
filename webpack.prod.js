const path = require('path')
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const TerserPlugin = require("terser-webpack-plugin")
const Dotenv = require('dotenv-webpack')
const common = require("./webpack.common")
const merge = require("webpack-merge")
const { CleanWebpackPlugin } = require("clean-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = merge(common, {
  mode: 'production',
  output: {
    filename: '[name].[contentHash].bundle.js',
    path: path.resolve(__dirname, "./server/public")
  },
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: "[contentHash].style.css",
      // publicPath: '/dist/style',
      // mode: 'none'
    }),
    new HtmlWebpackPlugin({
      favicon:'./src/assets/media/png/favicon.png',
      template: "./src/template.html",
      // chunksSortMode: "dependency,"
      minify: {
        collapseWhitespace: true,
        removeAttributeQuotes: true,
        removeComments: true
      }
    })
  ],
  optimization: {
    minimizer: [
      new OptimizeCssAssetsPlugin(),
      new TerserPlugin()
    ]
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [ 'vue-style-loader', 'css-loader' ]
     },
      {
        test: /\.scss$/,
        use:  ['vue-style-loader', MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
        // outputPath: 'assets/css'
      },
      {
        loader: 'vue-loader',
        test: /\.vue$/
      },
    ]
  }
})
