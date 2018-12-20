import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';
import PluginReducer from './PluginReducer';

const rootReducer = combineReducers({
    plugin : PluginReducer,
    form : formReducer
});
export default rootReducer;
