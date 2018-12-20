import React from 'react';
import {render} from 'react-dom';
import {BrowserRouter as Router, Switch} from 'react-router-dom';
//redux imports
import {createStore, applyMiddleware} from 'redux';
//react-redux imports
import {Provider} from 'react-redux';
import ReduxThunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { apiMiddleware } from './middleware';
import reducers from './reducers';
import App from './containers/App';

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

render(
    <Provider store={store}>
        <Router basename={process.env.BASE_URL}>
            <Switch>
                <App/>
            </Switch>
        </Router>
    </Provider>
    , document.getElementById('root'));
