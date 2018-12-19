const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './frontend/index.js',
  output: {
    path: path.resolve('build'),
    filename: 'core.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader', 'eslint-loader']
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader',
            options: {
              modules: true,
              importLoaders: 1,
              localIdentName: '[name]_[local]_[hash:base64]',
              sourceMap: true
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
     template: './public/index.html',
     filename: './index.html'
    })
  ],
  devServer: {
    contentBase: path.join(__dirname, 'build'),
    overlay: true,
    historyApiFallback: true,
  }
};
