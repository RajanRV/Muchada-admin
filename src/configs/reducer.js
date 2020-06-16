import { combineReducers } from 'redux';

import loginReducer from '../views/login/reducer';


export default combineReducers({
    login: loginReducer
});
