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
            action.payload = result.data;
            action.httpStatus = result.status;
            action.error = false;
            store.dispatch({ type: ASYNC_END, promise: action.payload });
            store.dispatch(action);
            return action;
        }).catch((result) => {
            if (result.response === undefined) {
                action.payload = undefined;
                action.httpStatus = 503;
            } else {
                action.payload = result.response.data;
                action.httpStatus = result.response.status;
            }
            action.error = true;
            store.dispatch({ type: ASYNC_END, promise: action.payload });
            store.dispatch(action);
            return action;
        }
    );
};

export { apiMiddleware };
