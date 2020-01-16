import axios from 'axios';
import * as actionTypes from './actionTypes';

//Begins the authentication process
export const authStart = () =>{
    return {
        type: actionTypes.AUTH_START
    }
}

//Checks if authentication was successful then gets the token
export const authSuccess = token =>{
    return {
        type: actionTypes.AUTH_SUCCESS,
        token: token
    }
}

//Checks if there is an error in authentication
export const authFail = error =>{
    return {
        type: actionTypes.AUTH_FAIL,
        error: error
    }
}

export const logout = () =>{
    localStorage.removeItem('user');    //delete user from local storage
    localStorage.removeItem('expirationDate'); //delete expiration date from local storage
    return{
        type: actionTypes.AUTH_LOGOUT
    }
}


//Times user login token until the expiration date expires
export const checkAuthTimeout = expTime =>{
    return dispatch =>{
        setTimeout(() => {
            dispatch(logout())
        }, expTime * 1000);
    }
}



export const authLogin = (username, password) =>{
    return dispatch => {
        dispatch(authStart()); //begins authentication process
        axios.post('http://127.0.0.1:8000/rest-auth/login/', { //post creditials to the server
            username: username,
            password: password
        }).then(res => {
            const token = res.data.key;  //gets authentication key
            const expirationDate = new Date(
                new Date().getTime() + 7200 * 1000); //sets expiration time for 2 hour
            localStorage.setItem('token', token);   //stores token in local storage
            localStorage.setItem('expirationDate', expirationDate); //stores expiration time in local storage
            dispatch(authSuccess(token));   //gets token
            dispatch(checkAuthTimeout(7200)); //times out user after 2 hours
        })
        .catch(err=>{
            dispatch(authFail(err))
        })
    }
}


export const authSignUp = (first_name, last_name, username, email, password1, password2) =>{
    return dispatch => {
        dispatch(authStart()); //begins authentication process
        axios.post('http://127.0.0.1:8000/rest-auth/registration/', { //post creditials to the server
            first_name: first_name,
            last_name: last_name,
            username: username,
            email: email,
            password1: password1,
            password2: password2,
        }).then(res => {
            const token = res.data.key;  //gets authentication key
            const expirationDate = new Date(
                new Date().getTime() + 7200 * 1000); //sets expiration time for 2 hour
            localStorage.setItem('token', token);   //stores token in local storage
            localStorage.setItem('expirationDate', expirationDate); //stores expiration time in local storage
            dispatch(authSuccess(token));   //gets token
            dispatch(checkAuthTimeout(7200)); //times out user after 2 hours
        })
        .catch(err=>{
            dispatch(authFail(err))
        })
    }
}

export const authCheckState = ()=>{
    return dispatch=>{
        const token = localStorage.getItem('token');
        if(token === undefined){
            dispatch(logout())
        } else{
            const expirationDate = new Date(localStorage.getItem('expirationDate')); //sets expiration time for 2 hour
            if (expirationDate <= new Date()){
                dispatch(logout())
            } else{
                dispatch(authSuccess())
                dispatch(checkAuthTimeout(
                        (expirationDate.getTime() - new Date().getTime()) / 1000
                    ))
            }
        }
    }
}