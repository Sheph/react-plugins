import React from 'react';
import ReactDom from 'react-dom';
import ReactRedux from 'react-redux';
import ReactRouterDom from 'react-router-dom';
import Redux from 'redux';
import ReduxThunk from 'redux-thunk';
import ReduxPromise from 'redux-promise';
import ReduxForm from 'redux-form';
import ReduxLogger from 'redux-logger';
import Axios from 'axios';
let materialUiCore = require('@material-ui/core/index.js');
let materialUiIcons = require('@material-ui/icons/index.js');
let acore = require('./acore/index.js');

window.acoreReact = React;
window.acoreReactDom = ReactDom;
window.acoreReactRedux = ReactRedux;
window.acoreReactRoterDom = ReactRouterDom;
window.acoreRedux = Redux;
window.acoreReduxForm = ReduxForm;
window.acoreReduxPromise = ReduxPromise;
window.acoreReduxThunk = ReduxThunk;
window.acoreReduxLogger = ReduxLogger;
window.acoreAxios = Axios;

let mod;
window['acore@material-ui/core'] = materialUiCore;
for (mod in materialUiCore) {
    window['acore@material-ui/core/' + mod] = materialUiCore[mod];
}
window['acore@material-ui/icons'] = materialUiIcons;
for (mod in materialUiIcons) {
    window['acore@material-ui/icons/' + mod] = materialUiIcons[mod];
}
window['acore'] = acore;
for (mod in acore) {
    window['acore/' + mod] = acore[mod];
}
