import axios from 'axios';

import {ROOT_URL} from '../acore/action';

const CORE_URL = ROOT_URL + '/core';

export const PLUGINS_LISTED = 'PLUGINS_LISTED';
export const PLUGINS_LOADED = 'PLUGINS_LOADED';

export function pluginsList() {
    const request = axios.post(`${CORE_URL}/plugins`, {}, { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } });
    return {
        type: PLUGINS_LISTED,
        payload: request
    };
}

export function pluginsLoaded(plugins) {
    return {
        type: PLUGINS_LOADED,
        payload: plugins
    };
}
