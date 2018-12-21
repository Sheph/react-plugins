import {postRequest} from '../acore/action';

const CORE_URL = '/core';

export const PLUGINS_LISTED = 'PLUGINS_LISTED';
export const PLUGINS_LOADED = 'PLUGINS_LOADED';

export function pluginsList() {
    const request = postRequest(`${CORE_URL}/plugins`, {});
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
