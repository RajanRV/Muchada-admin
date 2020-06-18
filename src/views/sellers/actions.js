import * as actions from './actionTypes';
import * as urls from '../../configs/urls';
import axios from 'axios';
import toast from '../../core/toast';

export const getSellers = (token) => (dispatch) => {
    dispatch({type : actions.FETCH_SELLERS});
    axios.get(urls.SELLERS_LIST, {headers : {Authorization : `Bearer ${token}`}})
        .then(response => {
            // const sellers = response.data
            dispatch({
                type : actions.FETCH_SELLERS_SUCCESS,
                payload : response.data
            })
        }).catch(error => {
            console.error(error);
            toast(error.response.data.message[0].messages[0].message, 'error');
            dispatch({
                type: actions.FETCH_SELLERS_FAILED,
                payload: error.response.data.message[0].messages[0].message
            })
        });
}