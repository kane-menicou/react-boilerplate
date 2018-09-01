'use strict'

const path = require('path')
const HtmlWebPackPlugin = require('html-webpack-plugin')
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')

const babelConfig = require('./babel')

const htmlPlugin = new HtmlWebPackPlugin({
  template: path.join(__dirname, '..', 'src', 'index.html'),
  filename: './index.html',
})

const tsCheckerPlugin = new ForkTsCheckerWebpackPlugin({
  tslint: path.join(__dirname, 'tslint.json'),
  tsconfig: path.join(__dirname, 'tsconfig.json'),
  async: false,
})

module.exports = {
  output: {
    path: path.resolve('public'),
    filename: 'app.[hash].js',
  },
  entry: './src/index.tsx',
  module: {
    rules: [
      {
        test: /\.(tsx|ts)?$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              babelrc: false,
              ...babelConfig,
            },
          },
        ],
      },
      {
        test: /\.(sass|scss)/,
        use: [
          {loader: 'style-loader'},
          {loader: 'css-loader'},
          {loader: 'sass-loader'},
        ],
      },
    ],
  },
  plugins: [
    htmlPlugin,
    tsCheckerPlugin,
  ],
}
