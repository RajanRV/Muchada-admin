import { compose,createStore,applyMiddleware } from 'redux';
import thunk from "redux-thunk";

import reducers from './configs/reducer';

const middlewares = [thunk];
var initialState = {};

if(localStorage.getItem('isLoggedIn') !== 'false'){
    console.log("hahaha login cho tme")
    initialState = {
        login: {
            loading: false,
            currentUser: JSON.parse(localStorage.getItem('user')),
            token: localStorage.getItem('token'),
            error: ''
        }
    }
}

const store = createStore(
    reducers, 
    initialState,
    compose(
        applyMiddleware(...middlewares),
        window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);


export default store;