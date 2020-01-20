import axios from 'axios';
import * as actionTypes from './actionTypes';

//Begins the authentication process
export const getSubjectsStart = () =>{
    return {
        type: actionTypes.GET_SUBJECTS_START
    }
}

//Checks if getSubjectListentication was successful then gets the token
export const getSubjectsSuccess = subjects =>{
    return {
        type: actionTypes.GET_SUBJECTS_SUCCESS,
        subjects
    }
}

//Checks if there is an error in authentication
export const getSubjectsFail = error =>{
    return {
        type: actionTypes.GET_SUBJECTS_FAIL,
        error
    } 
}


export const getSubjects = token =>{
    return dispatch =>{
        dispatch(getSubjectsStart())
        axios.defaults.headers = {
            'Content-Type': 'application/json',
            Authorization: `Token ${token}`
        }
        axios.get('http://127.0.0.1:8000/classroom/').then(res=>{
            const subjects = res.data;
            dispatch(getSubjectsSuccess(subjects))
        }).catch(err=>{
            dispatch(getSubjectsFail(err))
        })
    }
}
