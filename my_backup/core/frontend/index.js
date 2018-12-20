import React from 'react';
import {render} from 'react-dom';
import {BrowserRouter as Router, Switch} from 'react-router-dom';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import ReduxThunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { apiMiddleware } from './middleware';
import reducers from './reducers';
import App from './containers/App';
import {pluginsLoaded} from './actions/plugins';
import {pluginRegistry} from './acore';

import './assets/styles/base.css';

require('./pluginExports');

const getMiddleware = () => {
    if (process.env.NODE_ENV === 'production') {
        return applyMiddleware(ReduxThunk, apiMiddleware);
    } else {
        return applyMiddleware(ReduxThunk, apiMiddleware, createLogger());
    }
};

const createStoreWithMiddleware = getMiddleware()(createStore);
const store = createStoreWithMiddleware(reducers);

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
