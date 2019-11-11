import authReducer from './authReducer';
import messengerReducer from './messengerReducer';
import restaurantReducer from './restaurantReducer';
import {combineReducers} from 'redux';

const rootReducer = combineReducers({
    auth: authReducer,
    messenger: messengerReducer,
    restaurant: restaurantReducer
});

export default rootReducer;