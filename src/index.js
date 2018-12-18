import React from 'react';
import {render} from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';
//redux imports
import {createStore, applyMiddleware} from 'redux';
//react-redux imports
import {Provider} from 'react-redux';
import ReduxThunk from 'redux-thunk';
import ReduxPromise from 'redux-promise';
import reducers from './reducers';
import App from './containers/App';

// export stuff for plugins

import ReactDom from 'react-dom';
import ReactRedux from 'react-redux';
import ReactRouterDom from 'react-router-dom';
import Redux from 'redux';
import ReduxForm from 'redux-form';
import Axios from 'axios';
var materialUiCore = require('@material-ui/core/index.js');
var materialUiIcons = require('@material-ui/icons/index.js');

window.acoreReact = React;
window.acoreReactDom = ReactDom;
window.acoreReactRedux = ReactRedux;
window.acoreReactRoterDom = ReactRouterDom;
window.acoreRedux = Redux;
window.acoreReduxForm = ReduxForm;
window.acoreReduxPromise = ReduxPromise;
window.acoreReduxThunk = ReduxThunk;
window.acoreAxios = Axios;
var mod;
for (mod in materialUiCore) {
    window['acore@material-ui/core/' + mod] = materialUiCore[mod];
}
for (mod in materialUiIcons) {
    window['acore@material-ui/icons/' + mod] = materialUiIcons[mod];
}

// end export

const createStoreWithMiddleware = applyMiddleware(ReduxThunk, ReduxPromise)(createStore);
const store = createStoreWithMiddleware(reducers);

var loadScript = function(src) {
  var tag = document.createElement('script');
  tag.async = false;
  tag.src = src;
  document.getElementsByTagName('body')[0].appendChild(tag);
};

loadScript('/plugins/MyA/plugin.js');

render(
    <Provider store={store}>
        <Router>
            <App/>
        </Router>
    </Provider>
    , document.getElementById('root'));
