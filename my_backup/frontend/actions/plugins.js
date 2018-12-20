import axios from 'axios';

import {ROOT_URL} from '../acore/action';

const CORE_URL = ROOT_URL + '/core';

export const PLUGINS_LISTED = 'PLUGINS_LISTED';
export const PLUGIN_LOADED = 'PLUGIN_LOADED';

export function pluginsList() {
    const request = axios.post(`${CORE_URL}/plugins`);
    return {
        type: PLUGINS_LISTED,
        payload: request
    };
}

export function pluginLoaded(plugin) {
    return {
        type: PLUGIN_LOADED,
        payload: plugin
    };
}
