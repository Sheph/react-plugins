import {
    PLUGIN_LOADED,
} from '../actions/plugins';

const intialState =
{
    plugins: []
};

export default function(state = intialState, action)
{
    switch (action.type) {
    case PLUGIN_LOADED:
        return {...state, plugins: [...state.plugins, action.payload] };
    default:
        return state;
    }
}
