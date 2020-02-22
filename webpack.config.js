const VueLoaderPlugin = require('vue-loader/lib/plugin')
var path = require('path')
const Dotenv = require('dotenv-webpack');
// var webpack = require('webpack')
console.log(path)
module.exports = {
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
  entry: './assets/js/index.js',
  mode: 'development',
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
      {
        loader: "url-loader",
        options: {
          esModule: false
        },
        test: /\.(jpe?g|png|gif|woff|woff2|mp4|eot|ttf|otf|svg)(\?[a-z0-9=.]+)?$/,
      },
    ],
  },
  output: {
    filename: 'bundle.js',
    path: __dirname
  },
  plugins: [
    new VueLoaderPlugin(),
    new Dotenv()
  ],
  resolve: {
    alias: {
      vue: 'vue/dist/vue.min.js'
    }
  }
}
// module.exports = {
//   NODE_ENV: '"production"',
//   DEBUG_MODE: false,
//   API_KEY: '"..."' // this is shared between all environments
// }

// // config/dev.env.js
// module.exports = merge(prodEnv, {
//   NODE_ENV: '"development"',
//   DEBUG_MODE: true // this overrides the DEBUG_MODE value of prod.env
// })

// // config/test.env.js
// module.exports = merge(devEnv, {
//   NODE_ENV: '"testing"'
// })