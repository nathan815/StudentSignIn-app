import { combineReducers } from 'redux';

import authReducer from 'auth';
import userReducer from 'user';

// Set up all of the reducers
const rootReducer = combineReducers({
    userReducer
});
 
export default rootReducer;