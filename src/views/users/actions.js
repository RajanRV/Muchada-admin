import * as actions from './actionTypes';
import * as urls from '../../configs/urls';
import axios from 'axios';
import toast from '../../core/toast';

export const getUsers = (token) => (dispatch) => {
    dispatch({type : actions.FETCH_USERS});
    axios.get(urls.USERS_LIST, {headers : {Authorization : `Bearer ${token}`}})
        .then(response => {
            const count = response.data
            dispatch({
                type : actions.FETCH_USERS_SUCCESS,
                payload : response.data
            })
        }).catch(error => {
            console.error(error);
            toast(error.response.data.message[0].messages[0].message, 'error');
            dispatch({
                type: actions.FETCH_USERS_FAILED,
                payload: error.response.data.message[0].messages[0].message
            })
        });
}