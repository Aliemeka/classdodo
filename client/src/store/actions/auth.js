import axios from 'axios';
import * as actionTypes from './actionTypes';

//Begins the authentication process
export const authStart = () =>{
    return {
        type: actionTypes.AUTH_START
    }
}

//Checks if authentication was successful then gets the token
export const authSuccess = user =>{
    return {
        type: actionTypes.AUTH_SUCCESS,
        user
    }
}

//Checks if there is an error in authentication
export const authFail = error =>{
    return {
        type: actionTypes.AUTH_FAIL,
        error
    }
}

export const logout = () =>{
    localStorage.removeItem('user');    //delete user from local storage
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
            const { key, user_type  } = res.data
            const user = {
                token : key,
                first_name: user_type.first_name,
                last_name: user_type.last_name,
                userId: res.data.user,
                username,
                is_student: user_type.is_student,
                is_teacher: user_type.is_teacher,
                record: user_type.record,
                expirationDate: new Date(new Date().getTime() + 7200 * 1000)
            }
            // const token = res.data.key;  //gets authentication key
            // const expirationDate = new Date(new Date().getTime() + 7200 * 1000); //sets expiration time for 2 hour
            localStorage.setItem('user', JSON.stringify(user));   //stores token in local storage
            dispatch(authSuccess(user));   //gets token
            dispatch(checkAuthTimeout(7200)); //times out user after 2 hours
        })
        .catch(err=>{
            dispatch(authFail(err))
        })
    }
}


export const authSignUp = (first_name, last_name, username, email, password1, password2, is_student, is_teacher) =>{
    return dispatch => {
        dispatch(authStart()); //begins authentication process
        const user = {
            first_name,
            last_name,
            username,
            email,
            password1,
            password2,
            is_student,
            is_teacher
        }
        axios.post('http://127.0.0.1:8000/rest-auth/registration/', user)
        .then(res => {
            const user = {
                token: res.data.key,
                first_name,
                last_name,
                userId: res.data.user,
                username,
                is_student,
                is_teacher,
                record: res.data.user_type.record,
                expirationDate: new Date(new Date().getTime() + 7200 * 1000) //sets expiration time for 2 hour
            } 
            localStorage.setItem('user', JSON.stringify(user));   //stores token in local storage
            dispatch(authSuccess(user));   //gets user
            dispatch(checkAuthTimeout(7200)); //times out user after 2 hours
        })
        .catch(err=>{
            dispatch(authFail(err))
        })
    }
}

export const authCheckState = ()=>{
    return dispatch=>{
        const user = JSON.parse(localStorage.getItem('user'));
        if(user === undefined || user === null){
            dispatch(logout())
        } else{
            const expirationDate = new Date(user.expirationDate); //sets expiration time for 2 hour
            if (expirationDate <= new Date()){
                dispatch(logout())
            } else{
                dispatch(authSuccess(user))
                dispatch(checkAuthTimeout(
                        (expirationDate.getTime() - new Date().getTime()) / 1000
                    ))
            }
        }
    }
}