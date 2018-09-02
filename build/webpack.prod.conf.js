'use strict'

const path = require('path')
const merge = require('webpack-merge')

const baseConfig = require('./webpack.base.conf')

const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')

const tsCheckerPlugin = new ForkTsCheckerWebpackPlugin({
  tslint: path.join(__dirname, 'tslint.json'),
  tsconfig: path.join(__dirname, 'tsconfig.json'),
  async: true,
})

module.exports = merge(baseConfig, {
  output: {
    filename: '[hash].js',
  },
  plugins: [tsCheckerPlugin]
})
