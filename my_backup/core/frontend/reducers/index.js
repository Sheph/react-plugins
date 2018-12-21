import {reducer as formReducer} from 'redux-form';
import PluginReducer from './PluginReducer';

const rootReducer = {
    plugin : PluginReducer,
    form : formReducer
};

export default rootReducer;
