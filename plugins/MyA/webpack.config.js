const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve('../../build/plugins/MyA'),
    filename: 'plugin.js',
    libraryTarget : 'window'
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
              sourceMap: true,
              minimize: true
            }
          }
        ]
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
      'axios': 'acoreAxios'
    },
    function(context, request, callback) {
       if (/@material-ui\/*./.test(request)) {
         return callback(null, 'window acore' + request);
       }
       callback();
    }
  ]
};
