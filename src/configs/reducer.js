import { combineReducers } from 'redux';

import loginReducer from '../views/login/reducer';
import { dashboardReducer } from '../views/index/reducer';
import { sellersReducer } from '../views/sellers/reducer';
import { usersReducer } from '../views/users/reducer';

export default combineReducers({
    login: loginReducer,
    dashboard: dashboardReducer,
    sellers: sellersReducer,
    users: usersReducer
});
