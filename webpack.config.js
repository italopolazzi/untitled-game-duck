const HtmlWebPackPlugin = require('html-webpack-plugin')
const path = require('path')

const config = {
  devServer: {
    historyApiFallback: true,
    publicPath: '/'
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@components': path.resolve(__dirname, 'src', 'components'),
      '@plugins': path.resolve(__dirname, 'src', 'plugins'),
      '@pages': path.resolve(__dirname, 'src', 'pages'),
      '@layouts': path.resolve(__dirname, 'src', 'layouts'),
      '@themes': path.resolve(__dirname, 'src', 'themes'),
      '@locales': path.resolve(__dirname, 'src', 'locales'),
      '@store': path.resolve(__dirname, 'src', 'store'),
    }
  },
  module: {
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
  },
  plugins: [new HtmlWebPackPlugin({ template: './public/index.html', filename: './index.html' })]
}

module.exports = config