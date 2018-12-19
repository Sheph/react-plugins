import axios from 'axios';

import ROOT_URL from '../acore/action';

export const PLUGINS_LIST = 'PLUGINS_LIST';
export const PLUGINS_LIST_SUCCESS = 'PLUGINS_LIST_SUCCESS';
export const PLUGINS_LIST_ERROR = 'PLUGINS_LIST_ERROR';

export function pluginsList() {
    const request = axios.post(`${ROOT_URL}/core/plugins`);
    return {
        type: PLUGINS_LIST,
        payload: request
    };
}

export function pluginsListSuccess(plugins) {
    return {
        type: PLUGINS_LIST_SUCCESS,
        payload: plugins
    };
}

export function pluginsListError(error) {
    return {
        type: PLUGINS_LIST_ERROR,
        payload: error
    };
}
