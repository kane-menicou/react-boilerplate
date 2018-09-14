'use strict'

const path = require('path')
const merge = require('webpack-merge')

const packageConfig = require('../package')
const baseConfig = require('./webpack.base.conf')

const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')
const WebpackNotifierPlugin = require('webpack-notifier')

const tsCheckerPlugin = new ForkTsCheckerWebpackPlugin({
  tslint: path.join(__dirname, 'tslint.json'),
  tsconfig: path.join(__dirname, 'tsconfig.json'),
  async: true,
})

const notifyPlugin = new WebpackNotifierPlugin({
  title: packageConfig.name,
  contentImage: path.join(__dirname, 'logo/logo.png'),
})

module.exports = merge(baseConfig, {
  devServer: {
    overlay: true,
    hot: true,
  },
  plugins: [tsCheckerPlugin, notifyPlugin],
})
