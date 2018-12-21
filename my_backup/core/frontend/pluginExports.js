import React from 'react';
import ReactDom from 'react-dom';
import ReduxThunk from 'redux-thunk';
import ReduxPromise from 'redux-promise';
import ReduxLogger from 'redux-logger';
import Axios from 'axios';
let redux = require('redux');
let reactRedux = require('react-redux');
let reduxForm = require('redux-form');
let reactRouterDom = require('react-router-dom');
let materialUiCore = require('@material-ui/core');
let materialUiCoreStyles = require('@material-ui/core/styles');
let acore = require('./acore/index.js');
let acoreContainers = require('./acore/containers/index.js');

window.acoreReact = React;
window.acoreReactDom = ReactDom;
window.acoreReactRedux = reactRedux;
window.acoreReactRoterDom = reactRouterDom;
window.acoreRedux = redux;
window.acoreReduxForm = reduxForm;
window.acoreReduxPromise = ReduxPromise;
window.acoreReduxThunk = ReduxThunk;
window.acoreReduxLogger = ReduxLogger;
window.acoreAxios = Axios;

let mod;
window['acore@material-ui/core'] = materialUiCore;
for (mod in materialUiCore) {
    window['acore@material-ui/core/' + mod] = materialUiCore[mod];
}
window['acore@material-ui/core/styles'] = materialUiCoreStyles;
for (mod in materialUiCoreStyles) {
    window['acore@material-ui/core/styles/' + mod] = materialUiCoreStyles[mod];
}
window['acore'] = acore;
for (mod in acore) {
    window['acore/' + mod] = acore[mod];
}
for (mod in acoreContainers) {
    window['acore/containers/' + mod] = acoreContainers[mod];
}
