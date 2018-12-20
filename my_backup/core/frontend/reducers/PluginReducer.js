import {
    PLUGINS_LISTED,
    PLUGINS_LOADED,
} from '../actions/plugins';

const intialState =
{
    listed_plugins: [],
    loaded_plugins: {}
};

export default function(state = intialState, action)
{
    switch (action.type) {
    case PLUGINS_LISTED: {
        if (action.error) {
            return {...state, listed_plugins: [], loaded_plugins: {} };
        }
        let listed_plugins = [...action.payload];
        for (let plugin of listed_plugins) {
            plugin.component = state.loaded_plugins[plugin.basename];
        }
        return {...state, listed_plugins: listed_plugins };
    }
    case PLUGINS_LOADED: {
        let listed_plugins = [...state.listed_plugins];
        for (let plugin of listed_plugins) {
            plugin.component = action.payload[plugin.basename];
        }
        return {...state, loaded_plugins: action.payload, listed_plugins: listed_plugins };
    }
    default:
        return state;
    }
}
