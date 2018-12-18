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

const createStoreWithMiddleware = applyMiddleware(ReduxThunk, ReduxPromise)(createStore);
const store = createStoreWithMiddleware(reducers);

render(
    <Provider store={store}>
        <Router>
            <App/>
        </Router>
    </Provider>
    , document.getElementById('root'));
