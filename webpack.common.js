var path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
var webpack = require('webpack')
const Dotenv = require('dotenv-webpack')

module.exports = {
  entry: {
    main: "./src/index.js",
    // vendor: "./src/vendor.js"
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        use: ["html-loader"]
      },
      {
        test: /\.(gif|mp4)(\?[a-z0-9=.]+)?$/,
        use: {
          loader: "file-loader",
          options: {
            name: "[name].[hash].[ext]",
            outputPath: "assets/mp4",
            // publicPath: "assets/mp4",
            esModule: false,
          }
        }
      },
      {
        test: /\.(jpe?g|png|svg)(\?[a-z0-9=.]+)?$/,
        use: {
          loader: "file-loader",
          options: {
            name: "[name].[hash].[ext]",
            outputPath: "assets/images",
            // publicPath: "assets/images",
            esModule: false,
          }
        }
      },
      {
        test: /\.(ttf|otf)(\?[a-z0-9=.]+)?$/,
        use: {
          loader: "file-loader",
          options: {
            name: "[name].[hash].[ext]",
            outputPath: "assets/fonts",
            // publicPath: "assets/fonts",
            esModule: false,
          }
        }
      }
    ],
  },
  plugins: [
    new VueLoaderPlugin(),
    new Dotenv({
      path: path.resolve(__dirname, './server/.env')
    }),
  ],
  resolve: {
    alias: {
      vue: 'vue/dist/vue.min.js'
    }
  }
}
