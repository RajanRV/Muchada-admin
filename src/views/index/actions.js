import * as actions from './actionTypes';
import * as urls from '../../configs/urls';
import axios from 'axios';
import toast from '../../core/toast';

export const getSellersCount = (token) => (dispatch) => {
    dispatch({type : actions.FETCH_SELLERS_COUNT});
    axios.get(urls.SELLERS_COUNT, {headers : {Authorization : `Bearer ${token}`}})
        .then(response => {
            const count = response.data
            dispatch({
                type : actions.FETCH_SELLERS_SUCCESS_COUNT,
                payload : count
            })
        }).catch(error => {
            console.error(error);
            toast(error.response.data.message[0].messages[0].message, 'error');
            dispatch({
                type: actions.FETCH_SELLERS_FAILED_COUNT,
                payload: error.response.data.message[0].messages[0].message
            })
        });
}

export const getUsersCount = (token) => (dispatch) => {
    dispatch({type : actions.FETCH_USERS_COUNT});
    axios.get(urls.USERS_COUNT, {headers : {Authorization : `Bearer ${token}`}})
        .then(response => {
            const count = response.data
            dispatch({
                type : actions.FETCH_USERS_SUCCESS_COUNT,
                payload : count
            })
        }).catch(error => {
            console.error(error);
            toast(error.response.data.message[0].messages[0].message, 'error');
            dispatch({
                type: actions.FETCH_USERS_FAILED_COUNT,
                payload: error.response.data.message[0].messages[0].message
            })
        });
}

export const getItemCategoryCount = (token) => (dispatch) => {
    dispatch({type : actions.FETCH_ITEM_CATEGORY_COUNT});
    axios.get(urls.ITEM_CATEGORY_COUNT, {headers : {Authorization : `Bearer ${token}`}})
        .then(response => {
            const count = response.data
            dispatch({
                type : actions.FETCH_ITEM_CATEGORY_SUCCESS_COUNT,
                payload : count
            })
        }).catch(error => {
            console.error(error);
            toast(error.response.data.message[0].messages[0].message, 'error');
            dispatch({
                type: actions.FETCH_ITEM_CATEGORY_FAILED_COUNT,
                payload: error.response.data.message[0].messages[0].message
            })
        });
}

export const getItemCount = (token) => (dispatch) => {
    dispatch({type : actions.FETCH_ITEM_COUNT});
    axios.get(urls.ITEM_COUNT, {headers : {Authorization : `Bearer ${token}`}})
        .then(response => {
            const count = response.data
            dispatch({
                type : actions.FETCH_ITEM_SUCCESS_COUNT,
                payload : count
            })
        }).catch(error => {
            console.error(error);
            toast(error.response.data.message[0].messages[0].message, 'error');
            dispatch({
                type: actions.FETCH_ITEM_FAILED_COUNT,
                payload: error.response.data.message[0].messages[0].message
            })
        });
}