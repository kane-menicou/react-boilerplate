'use strict'

const merge = require('webpack-merge')
const baseConfig = require('./webpack.base.conf')

module.exports = merge(baseConfig, {
  devServer: {
    overlay: true,
    hot: true,
  },
})
