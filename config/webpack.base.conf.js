'use strict'

const HtmlWebPackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const path = require('path')

const htmlPlugin = new HtmlWebPackPlugin({
  template: './src/index.html',
  filename: './index.html'
})

const cssPlugin = new MiniCssExtractPlugin({
  filename: '[name].[hash].css',
  chunkFilename: '[id].css'
})

module.exports = {
  output: {
    path: path.resolve('public'),
    filename: 'app.[hash].js'
  },
  entry: './src/index.tsx',
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.(ts|tsx)$/,
        loader: 'tslint-loader',
        exclude: /node_modules/,
        options: {
          emitErrors: true,
          typeCheck: true
        }
      },
      {
        test: /\.(tsx|ts)?$/,
        use: [
          { loader: 'ts-loader' }
        ]
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: '../'
            }
          },
          'css-loader'
        ]
      }
    ]
  },
  plugins: [htmlPlugin, cssPlugin]
}
