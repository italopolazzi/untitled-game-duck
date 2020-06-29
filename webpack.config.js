const HtmlWebPackPlugin = require('html-webpack-plugin')
const path = require('path')

const config = {}

config.output = {
  path: path.resolve(__dirname, "dist"),
  filename: '[name].bundle.js',
  publicPath: "/"
}

config.devServer = {
  historyApiFallback: true,
  publicPath: '/'
}

config.resolve = {
  alias: {
    '@': path.resolve(__dirname, 'src')
  }
}

config.module = {
  rules: [
    {
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: {
          cacheDirectory: true
        }
      }
    },
    {
      test: /\.html$/,
      exclude: /node_modules/,
      use: [
        {
          loader: "html-loader"
        }
      ]
    },
    {
      test: /\.sass$/,
      exclude: /node_modules/,
      use: ['style-loader', 'css-loader', 'sass-loader']
    }
  ]
}

config.plugins = [new HtmlWebPackPlugin({ template: './public/index.html', filename: './index.html' })]

module.exports = config