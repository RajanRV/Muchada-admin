import * as actions from './actionTypes';

const initalState = {
    sellers : {
        loading : false,
        count : 0,
        error : ''
    },
    users : {
        loading : false,
        count: 0,
        error : ''
    },
    itemCategory : {
        loading : false,
        count: 0,
        error : ''
    },
    item : {
        loading : false,
        count: 0,
        error : ''
    },
}

export const dashboardReducer = (state = initalState, action) => {
    switch(action.type){
        case actions.FETCH_SELLERS_COUNT : 
            return {...state, sellers : { loading: true, error: '', count: 0 }}
        case actions.FETCH_SELLERS_SUCCESS_COUNT : 
            return {...state, sellers : { loading: false, error: '', count : action.payload }}
        case actions.FETCH_SELLERS_FAILED_COUNT :
            return {...state, sellers : { loading: false, error: action.payload, count: 0 }}
        
        case actions.FETCH_USERS_COUNT : 
            return {...state, users : { loading: true, error: '', count: 0}}
        case actions.FETCH_USERS_SUCCESS_COUNT : 
            return {...state, users : { loading: false, error: '', count : action.payload}}
        case actions.FETCH_USERS_FAILED_COUNT :
            return {...state, users : { loading: false, error: action.payload, count: 0 }}

        case actions.FETCH_ITEM_CATEGORY_COUNT : 
            return {...state, itemCategory : { loading: true, error: '', count: 0 }}
        case actions.FETCH_ITEM_CATEGORY_SUCCESS_COUNT : 
            return {...state, itemCategory : { loading: false, error: '', count : action.payload}}
        case actions.FETCH_ITEM_CATEGORY_FAILED_COUNT :
            return {...state, itemCategory : { loading: false, error: action.payload, count: 0 }}

        case actions.FETCH_ITEM_COUNT : 
            return {...state, item : { loading: true, error: '', count: 0 }}
        case actions.FETCH_ITEM_SUCCESS_COUNT : 
            return {...state, item : { loading: false, error: '', count : action.payload}}
        case actions.FETCH_ITEM_FAILED_COUNT :
            return {...state, item : { loading: false, error: action.payload, count: 0 }}

        default : 
            return state
    }
}