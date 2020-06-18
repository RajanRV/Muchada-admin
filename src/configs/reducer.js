import { combineReducers } from 'redux';

import loginReducer from '../views/login/reducer';
import { dashboardReducer } from '../views/index/reducer';
import { sellersReducer } from '../views/sellers/reducer';

export default combineReducers({
    login: loginReducer,
    dashboard: dashboardReducer,
    sellers: sellersReducer
});
