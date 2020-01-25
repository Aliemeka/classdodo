import axios from 'axios';
import * as actionTypes from './actionTypes';

//Begins the authentication process
const getSubjectsStart = () =>{
    return {
        type: actionTypes.GET_SUBJECTS_START
    }
}

//Checks if getSubject was successful
const getSubjectsSuccess = subjects =>{
    return {
        type: actionTypes.GET_SUBJECTS_SUCCESS,
        subjects
    }
}

//Checks if there is an error in getting subjects
const getSubjectsFail = error =>{
    return {
        type: actionTypes.GET_SUBJECTS_FAIL,
        error
    } 
}

//Get subjects action
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


//Begins the authentication process
const createSubjectStart = () =>{
    return {
        type: actionTypes.CREATE_SUBJECT_START
    }
}

//Checks if getSubjectListentication was successful then gets the token
const createSubjectSuccess = subjects =>{
    return {
        type: actionTypes.CREATE_SUBJECT_SUCCESS,
        subjects
    }
}

//Checks if there is an error in authentication
const createSubjectFail = error =>{
    return {
        type: actionTypes.CREATE_SUBJECT_FAIL,
        error
    } 
}


export const createSubject = (token, subject) =>{
    return dispatch =>{
        dispatch(createSubjectStart())
        axios.defaults.headers = {
            'Content-Type': 'application/json',
            Authorization: `Token ${token}`
        }
        axios.post('http://127.0.0.1:8000/classroom/', subject).then(res=>{
            dispatch(createSubjectSuccess())
        }).catch(err=>{
            dispatch(createSubjectFail(err))
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
        if(id!=='record'){
            axios.get(`http://127.0.0.1:8000/classroom/${id}/`).then(res=>{
                const subject = res.data;
                dispatch(getSubjectTestsSuccess(subject))
            }).catch(err=>{
                dispatch(getSubjectTestsFail(err))
            })
        }
    }
}


const getTestDetailsStart = () =>{
    return {
        type: actionTypes.GET_TEST_DETAILS_START
    }
}


//Checks if getSubjectListentication was successful then gets the token
const getTestDetailsSuccess = test =>{
    return {
        type: actionTypes.GET_TEST_DETAILS_SUCCESS,
        test
    }
}

//Checks if there is an error in authentication
const getTestDetailsFail = error =>{
    return {
        type: actionTypes.GET_TEST_DETAILS_FAIL,
        error
    } 
}


export const getTestDetails = (token, subjectId, testOrder) =>{
    return dispatch =>{
        dispatch(getTestDetailsStart())
        axios.defaults.headers = {
            'Content-Type': 'application/json',
            Authorization: `Token ${token}`
        }
        axios.get(`http://127.0.0.1:8000/classroom/${subjectId}/`).then(res=>{
            const tests = res.data.tests;
            const test = tests[testOrder-1]
            dispatch(getTestDetailsSuccess(test))
        }).catch(err=>{
            dispatch(getTestDetailsFail(err))
        })
    }
}

