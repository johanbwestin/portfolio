new webpack.DefinePlugin({
  ‘process.env’: config.dev.env,
  ‘API_URL’: ‘“http://localhost:3000”’
  }),