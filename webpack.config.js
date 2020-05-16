const HtmlWebPackPlugin = require('html-webpack-plugin')
const path = require('path')

const config = {
  resolve: {
    alias: {
      '@components': path.resolve(__dirname, 'src', 'components'),
      '@plugins': path.resolve(__dirname, 'src', 'plugins'),
      '@pages': path.resolve(__dirname, 'src', 'pages'),
      '@layouts': path.resolve(__dirname, 'src', 'layouts'),
    }
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader"
          }
        ]
      }
    ]
  },
  plugins: [new HtmlWebPackPlugin({ template: './public/index.html', filename: './index.html' })]
}

module.exports = config