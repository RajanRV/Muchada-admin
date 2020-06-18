import * as actions from './actionTypes';

const initalState = {
    loading : false,
    list: [],
    error : ''
}

export const usersReducer = (state = initalState, action) => {
    switch(action.type){
        
        case actions.FETCH_USERS : 
            return {...state, loading: true, error: '', list : [] }
        case actions.FETCH_USERS_SUCCESS : 
            return {...state, loading: false, error: '', list : action.payload}
        case actions.FETCH_USERS_FAILED :
            return {...state, loading: false, error: action.payload, list: [] }

        default : 
            return state
    }
}