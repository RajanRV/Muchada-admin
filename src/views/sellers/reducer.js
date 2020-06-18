import * as actions from './actionTypes';

const initalState = {
    loading : false,
    list : [],
    error : ''
}

export const sellersReducer = (state = initalState, action) => {
    switch(action.type){
        case actions.FETCH_SELLERS : 
            return {...state,  loading: true, error: '', list: [] }
        case actions.FETCH_SELLERS_SUCCESS : 
            return {...state, loading: false, error: '', list : action.payload }
        case actions.FETCH_SELLERS_FAILED :
            return {...state, loading: false, error: action.payload, list: [] }
        
        // case actions.FETCH_USERS_COUNT : 
        //     return {...state, users : { loading: true, error: '', count: 0, list : [] }}
        // case actions.FETCH_USERS_SUCCESS_COUNT : 
        //     return {...state, users : { loading: false, error: '', count : action.payload}}
        // case actions.FETCH_USERS_FAILED_COUNT :
        //     return {...state, users : { loading: false, error: action.payload, count: 0 }}

        default : 
            return state
    }
}