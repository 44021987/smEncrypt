const path = require('path')
const mode = process.env.NODE_ENV

module.exports = {
  entry: {
    smEncrypt: './index.js'
  },
  mode,
  output: {
    // library: 'sm',
    libraryTarget: "umd",
    filename: '[name].min.js',
    chunkFilename: '[name].min.js',
    path: path.resolve(__dirname)
  },
  module: {
    rules: [{
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins: ['@babel/plugin-transform-runtime']
          }
        }
      }
    ]
  }
}