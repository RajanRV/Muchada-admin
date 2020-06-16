import * as actionTypes from './actionTypes';
import * as URLs from '../../configs/urls';
import axios from 'axios';
import auth from '../../core/auth';
import { toast } from 'react-toastify';

export const loginUser = (identifier, password) => (dispatch) => {
	dispatch({ type: actionTypes.CALL_LOGIN_USER });
	axios.post(URLs.LOGIN_URL, {
		identifier,
		password,
	})
    .then((response) => {
		const { user, jwt } = response.data;
		if(!user || !jwt || user.blocked || !user.confirmed){
			return auth.logout(() => {
				let error = 'Some technical error occured';
				if(user.blocked){
					error = "You are currently blocked by admin."
				}
				if(!user.confirmed){
					error = "Please verify your account to login."
				}
				return dispatch({ 
					type: actionTypes.LOGIN_USER_FAILED, 
					payload: error  
				})
			});
		}
		return auth.login({user, jwt}, () => {
			return dispatch({ type: actionTypes.LOGIN_USER_SUCCESS, payload: {user, jwt} });
		});
    })
    .catch(function(error) {
		console.error(error);
		toast.error(error.response.data.message[0].messages[0].message, {
			position: "top-center",
			autoClose: 5000,
			hideProgressBar: true,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
			});
		return auth.logout(() => {
			return dispatch({ type: actionTypes.LOGIN_USER_FAILED, payload: error.response.data.message.pop().messages.pop().message })
		});
    });
};

export const logoutUser = () => (dispatch) => {
	return auth.logout(() => {
		return dispatch({ type : actionTypes.LOGOUT_USER });
	})
}