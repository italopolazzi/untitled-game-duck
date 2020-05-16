const HtmlWebPackPlugin = require('html-webpack-plugin')

const config = {
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