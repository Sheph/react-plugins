const path = require('path');

module.exports = {
  entry: './frontend/index.js',
  output: {
    path: path.resolve('static'),
    publicPath : 'queues/static/',
    filename: 'plugin.js',
    libraryTarget : 'window'
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
          name: '[name].[hash:8].[ext]',
        }
      }
    ]
  },
  plugins: [
  ],
  externals: [
    {
      'react': 'acoreReact',
      'react-dom': 'acoreReactDom',
      'react-redux': 'acoreReactRedux',
      'react-router-dom': 'acoreReactRouterDom',
      'redux': 'acoreRedux',
      'redux-form': 'acoreReduxForm',
      'redux-promise': 'acoreReduxPromise',
      'redux-thunk': 'acoreReduxThunk',
      'redux-logger': 'acoreReduxLogger',
      'axios': 'acoreAxios'
    },
    function(context, request, callback) {
       if (/@material-ui/.test(request)) {
         return callback(null, 'window acore' + request);
       }
       if (/@material-ui\/core*./.test(request)) {
         return callback(null, 'window acore' + request);
       }
       if (/acore*./.test(request)) {
         return callback(null, 'window ' + request);
       }
       callback();
    }
  ]
};
