const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
var webpack = require('webpack')

module.exports = (env, argv) => ({
  entry: './frontend/index.js',
  output: {
    path: path.resolve('static'),
    filename: 'core.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
             loader: 'babel-loader'
          },
          {
             loader: 'eslint-loader',
             options: {
               configFile: path.resolve(__dirname, ".eslintrc")
             }
          }
        ]
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
    new webpack.DefinePlugin({
     'process.env': {
        'BASE_URL': JSON.stringify(argv.mode === 'production' ? '/s/analytics' : '/'),
        'FORCE_PROD_PLUGINS': JSON.stringify(process.env.FORCE_PROD_PLUGINS === undefined ? false : process.env.FORCE_PROD_PLUGINS)
      }
    }),
    new HtmlWebPackPlugin({
     template: './public/index.html',
     filename: './index.html',
     baseurl: argv.mode === 'production' ? '/s/analytics/' : '/'
    })
  ],
  resolve: {
    alias: {
      acore: path.resolve(__dirname, 'frontend/acore'),
    }
  },
  devServer: {
    contentBase: path.join(__dirname, 'build'),
    overlay: true,
    historyApiFallback: true
  }
});
