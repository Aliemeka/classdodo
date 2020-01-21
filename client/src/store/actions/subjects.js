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


const getSubjectTestsStart = () =>{
    return {
        type: actionTypes.GET_SUBJECT_TESTS_START
    }
}

//Checks if getSubjectListentication was successful then gets the token
const getSubjectTestsSuccess = subject =>{
    return {
        type: actionTypes.GET_SUBJECT_TESTS_SUCCESS,
        subject
    }
}

//Checks if there is an error in authentication
const getSubjectTestsFail = error =>{
    return {
        type: actionTypes.GET_SUBJECT_TESTS_FAIL,
        error
    } 
}


export const getSubjectTests = (token, id) =>{
    return dispatch =>{
        dispatch(getSubjectTestsStart())
        axios.defaults.headers = {
            'Content-Type': 'application/json',
            Authorization: `Token ${token}`
        }
        axios.get(`http://127.0.0.1:8000/classroom/${id}/`).then(res=>{
            const subject = res.data;
            dispatch(getSubjectTestsSuccess(subject))
        }).catch(err=>{
            dispatch(getSubjectTestsFail(err))
        })
    }
}


const getTestDetailsStart = () =>{
    return {
        type: actionTypes.GET_TEST_DETAILS_START
    }
}


//Checks if getSubjectListentication was successful then gets the token
const getTestDetailsSuccess = subject =>{
    return {
        type: actionTypes.GET_TEST_DETAILS_SUCCESS,
        subject
    }
}

//Checks if there is an error in authentication
const getTestDetailsFail = error =>{
    return {
        type: actionTypes.GET_TEST_DETAILS_FAIL,
        error
    } 
}


export const getTestDetails = (token, subjectId, testId) =>{
    return dispatch =>{
        dispatch(getTestDetailsStart())
        axios.defaults.headers = {
            'Content-Type': 'application/json',
            Authorization: `Token ${token}`
        }
        axios.get(`http://127.0.0.1:8000/classroom/${subjectId}/`).then(res=>{
            const tests = res.data.tests;
            const test = tests[testId-1]
            console.log(test)
            dispatch(getTestDetailsSuccess(test))
        }).catch(err=>{
            dispatch(getTestDetailsFail(err))
        })
    }
}

