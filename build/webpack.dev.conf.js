'use strict'

const path = require('path');
const {merge} = require('webpack-merge');

const packageConfig = require('../package')
const baseConfig = require('./webpack.base.conf')

const WebpackNotifierPlugin = require('webpack-notifier')

const notifyPlugin = new WebpackNotifierPlugin({
  title: packageConfig.name,
  contentImage: path.join(__dirname, 'logo/logo.png'),
})

module.exports = merge(baseConfig, {
  devServer: {
    overlay: true,
    hot: true,
  },
  plugins: [notifyPlugin],
})
