const baseConfig = require('./base.config')
const path = require('path')
const webpack = require('webpack')

let config = {
  ...baseConfig,
  mode: 'development',
  devServer: {
    contentBase: path.resolve(__dirname, '../dist'),
    host: 'localhost',
    port: '8080',
    hot: true
  }  
}

config.plugins.push(new webpack.HotModuleReplacementPlugin())

module.exports = config
