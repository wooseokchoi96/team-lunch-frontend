import authReducer from './authReducer';
import messengerReducer from './messengerReducer';
import {combineReducers} from 'redux';

const rootReducer = combineReducers({
    auth: authReducer,
    messenger: messengerReducer
});

export default rootReducer;