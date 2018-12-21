const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
var webpack = require('webpack')

module.exports = (env, argv) => ({
  entry: './frontend/index.js',
  output: {
    path: path.resolve('.'),
    filename: 'static/core.js'
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
      },
      {
        test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
        loader: require.resolve('url-loader'),
        options: {
          limit: 10000,
          name: 'static/[name].[hash:8].[ext]',
        }
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
     template: './frontend/index.html',
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
    contentBase: path.join(__dirname, ''),
    overlay: true,
    historyApiFallback: true
  }
});
