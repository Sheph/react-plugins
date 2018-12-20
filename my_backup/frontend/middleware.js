import {
    ASYNC_START,
    ASYNC_END,
} from './acore/action';

const apiMiddleware = store => next => action => {
    if (!(action.payload instanceof Promise)) {
        return next(action);
    }

    store.dispatch({ type: ASYNC_START, subtype: action.type });

    return action.payload.then(
        (result) => {
            action.payload = result.payload.data;
            action.error = false;
            store.dispatch({ type: ASYNC_END, promise: action.payload });
            store.dispatch(action);
            return action;
        }).catch((result) => {
            if (result.response === undefined) {
                action.payload = undefined;
            } else {
                action.payload = result.response.data;
            }
            action.error = true;
            store.dispatch({ type: ASYNC_END, promise: action.payload });
            store.dispatch(action);
            return action;
        }
    );
};

export { apiMiddleware };
