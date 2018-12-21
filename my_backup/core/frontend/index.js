import React from 'react';
import {render} from 'react-dom';
import {BrowserRouter as Router, Switch} from 'react-router-dom';
import {createStore, applyMiddleware, combineReducers} from 'redux';
import {Provider} from 'react-redux';
import ReduxThunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { apiMiddleware } from './middleware';
import reducers from './reducers';
import App from './containers/App';
import {pluginsLoaded} from './actions/plugins';
import {pluginRegistry, reducerRegistry} from './acore';
import {setStore} from './acore/store';

import './assets/styles/base.css';

const getMiddleware = () => {
    if (process.env.NODE_ENV === 'production') {
        return applyMiddleware(ReduxThunk, apiMiddleware);
    } else {
        return applyMiddleware(ReduxThunk, apiMiddleware, createLogger());
    }
};

const createStoreWithMiddleware = getMiddleware()(createStore);
const store = createStoreWithMiddleware(combineReducers(reducers));
setStore(store);

require('./pluginExports');

reducerRegistry.setChangeListener(moreReducers => {
    let actualReducers = {...reducers};
    for (let name in moreReducers) {
        actualReducers[name] = moreReducers[name];
    }
    store.replaceReducer(combineReducers(actualReducers));
});

pluginRegistry.setChangeListener(plugins => {
    store.dispatch(pluginsLoaded(plugins));
});

if ((process.env.NODE_ENV !== 'production') && !process.env.FORCE_PROD_PLUGINS) {
    require('./devPlugins_generated');
}

render(
    <Provider store={store}>
        <Router basename={process.env.BASE_URL}>
            <Switch>
                <App/>
            </Switch>
        </Router>
    </Provider>
    , document.getElementById('root'));
