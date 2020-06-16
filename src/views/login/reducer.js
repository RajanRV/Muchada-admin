import * as actionTypes from './actionTypes';

const initialState = {
    loading: false,
    currentUser: {},
    token: false,
    error: ''
};

export default (state = initialState, action) => {
    switch(action.type){
        case actionTypes.CALL_LOGIN_USER:
            return {...state, loading: true}
        case actionTypes.LOGIN_USER_SUCCESS: 
            return {...state, loading:false, currentUser: action.payload.user, token: action.payload.jwt}
        case actionTypes.LOGIN_USER_FAILED: 
            return {...state, loading:false, currentUser: [], token: false, error: action.payload}
        case actionTypes.LOGOUT_USER: 
            return {...state, loading:false, currentUser: [], token:false, error: ''}
        default: 
            return state;
    }
}