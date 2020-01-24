import * as actionTypes from '../actions/actionTypes'
import { updateObject } from '../utility'


const initialState = {
    subjects: [],
    currentSubject: {},
    currentTest: {},
    error: null,
    loading: false
}

const getSubjectsStart = (state, action) =>{
    return updateObject(state, {
        error: null,
        subjects: [],
        loading: true
    })
}

const getSubjectsSuccess = (state, action) =>{
    return updateObject(state, {
        subjects: action.subjects, 
        error: null,
        loading: false
    })
} 


const getSubjectsFail = (state, action) =>{
    return updateObject(state, {
        error: action.error,
        loading: false
    })
} 

//Creates subject reducers
const createSubjectStart = (state, action) =>{
    return updateObject(state, {
        error: null,
        loading: true
    })
}

const createSubjectSuccess = (state, action) =>{
    return updateObject(state, {
        error: null,
        loading: false
    })
} 


const createSubjectFail = (state, action) =>{
    return updateObject(state, {
        error: action.error,
        loading: false
    })
} 


const getSubjectTestsStart = (state, action) =>{
    return updateObject(state, {
        error: null,
        currentSubject: {},
        loading: true
    })
}

const getSubjectTestsSuccess = (state, action) =>{
    return updateObject(state, {
        currentSubject: action.subject, 
        error: null,
        loading: false
    })
} 


const getSubjectTestsFail = (state, action) =>{
    return updateObject(state, {
        error: action.error,
        loading: false
    })
} 


const getTestDetailsStart = (state, action) =>{
    return updateObject(state, {
        error: null,
        currentTest: {},
        loading: true
    })
}

const getTestDetailsSuccess = (state, action) =>{
    return updateObject(state, {
        currentTest: action.test, 
        error: null,
        loading: false
    })
} 


const getTestDetailsFail = (state, action) =>{
    return updateObject(state, {
        error: action.error,
        loading: false
    })
} 



const subjectsReducer = (state=initialState, action) =>{
    switch (action.type) {
        //All Subjects
        case actionTypes.GET_SUBJECTS_START: return getSubjectsStart(state, action);
        case actionTypes.GET_SUBJECTS_SUCCESS: return getSubjectsSuccess(state, action);
        case actionTypes.GET_SUBJECTS_FAIL: return getSubjectsFail(state, action);
        //Create Subject
        case actionTypes.CREATE_SUBJECT_START: return createSubjectStart(state, action);
        case actionTypes.CREATE_SUBJECT_SUCCESS: return createSubjectSuccess(state, action);
        case actionTypes.CREATE_SUBJECT_FAIL: return createSubjectFail(state, action);
        //Subject details
        case actionTypes.GET_SUBJECT_TESTS_START: return getSubjectTestsStart(state, action);
        case actionTypes.GET_SUBJECT_TESTS_SUCCESS: return getSubjectTestsSuccess(state, action);
        case actionTypes.GET_SUBJECT_TESTS_FAIL: return getSubjectTestsFail(state, action);
        //Test details
        case actionTypes.GET_TEST_DETAILS_START: return getTestDetailsStart(state, action);
        case actionTypes.GET_TEST_DETAILS_SUCCESS: return getTestDetailsSuccess(state, action);
        case actionTypes.GET_TEST_DETAILS_FAIL: return getTestDetailsFail(state, action);
        default: return state;
    }
}

export default subjectsReducer;