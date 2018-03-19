import axios from 'axios';  
import { browserHistory } from 'react-router';  
import cookie from 'react-cookie';  
import actionTypes from './types';
// import { AUTH_USER,  
//          AUTH_ERROR,
//          UNAUTH_USER,
//          PROTECTED_TEST } from './types';

const loginUrl = 'http://localhost:3000/login';

export function errorHandler(dispatch, error, type) {  
let errorMessage = '';

    if(error.data.error) {
        errorMessage = error.data.error;
    } else if(error.data){
        errorMessage = error.data;
    } else {
        errorMessage = error;
    }

    if(error.status === 401) {
        dispatch({
        type: type,
        payload: 'You are not authorized to do this. Please login and try again.'
        });
        logoutUser();
    } else {
        dispatch({
        type: type,
        payload: errorMessage
        });
    }
}

export function loginUser({ userName, password }) {  
    return function(dispatch) {
      axios.post(`${API_URL}`, { userName, password })
      .then(response => {
        cookie.save('token', response.data.token, { path: '/' });
        dispatch({ type: AUTH_USER });
        window.location.href = CLIENT_ROOT_URL + '/dashboard';
      })
      .catch((error) => {
        errorHandler(dispatch, error.response, AUTH_ERROR)
      });
      }
    }

export function protectedTest() {  
    return function(dispatch) {
        axios.get(`${API_URL}/protected`, {
        headers: { 'Authorization': cookie.load('token') }
        })
        .then(response => {
        dispatch({
            type: actionTypes.PROTECTED_TEST,
            payload: response.data.content
        });
        })
        .catch((error) => {
        errorHandler(dispatch, error.response, AUTH_ERROR)
        });
    }
}