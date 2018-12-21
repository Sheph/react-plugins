import React from 'react';
import {Provider} from 'react-redux';
import {pluginRegistry, reducerRegistry} from 'acore';
import {store} from 'acore/store';
import Main from './containers/Main';
import QueuesReducer from './reducers/QueuesReducer';

reducerRegistry.register('queues', QueuesReducer);

pluginRegistry.register('queues', () => {
    return (
        <Provider store={store}>
            <Main/>
        </Provider>
    );
});
