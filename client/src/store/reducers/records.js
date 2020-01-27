import * as actionTypes from '../actions/actionTypes'
import { updateObject } from '../utility'


const initialState = {
    records: [],
    results: [],
    resultDetails: {},
    testScores: [],
    error: null,
    loading: false
}

const getRecordsStart = (state, action) =>{
    return updateObject(state, {
        error: null,
        records: [],
        loading: true
    })
}

const getRecordsSuccess = (state, action) =>{
    return updateObject(state, {
        records: action.records, 
        error: null,
        loading: false
    })
} 


const getRecordsFail = (state, action) =>{
    return updateObject(state, {
        error: action.error,
        loading: false
    })
} 


const getResultsStart = (state, action) =>{
    return updateObject(state, {
        error: null,
        results: [],
        loading: true
    })
}

const getResultsSuccess = (state, action) =>{
    return updateObject(state, {
        results: action.results, 
        error: null,
        loading: false
    })
} 


const getResultsFail = (state, action) =>{
    return updateObject(state, {
        error: action.error,
        loading: false
    })
} 

const getResultDetailsStart = (state, action) =>{
    return updateObject(state, {
        error: null,
        resultDetails: {},
        loading: true
    })
}

const getResultDetailsSuccess = (state, action) =>{
    return updateObject(state, {
        results: action.resultDetails, 
        error: null,
        loading: false
    })
} 


const getResultDetailsFail = (state, action) =>{
    return updateObject(state, {
        error: action.error,
        loading: false
    })
} 


const getTestScoresStart = (state, action) =>{
    return updateObject(state, {
        error: null,
        testScores: [],
        loading: true
    })
}

const getTestScoresSuccess = (state, action) =>{
    return updateObject(state, {
        testScores: action.testScores, 
        error: null,
        loading: false
    })
} 


const getTestScoresFail = (state, action) =>{
    return updateObject(state, {
        error: action.error,
        loading: false
    })
} 

const recordsReducer = (state=initialState, action) =>{
    switch (action.type) {
        //All Records
        case actionTypes.GET_RECORDS_START: return getRecordsStart(state, action);
        case actionTypes.GET_RECORDS_SUCCESS: return getRecordsSuccess(state, action);
        case actionTypes.GET_RECORDS_FAIL: return getRecordsFail(state, action);
        //All Results
        case actionTypes.GET_RESULTS_START: return getResultsStart(state, action);
        case actionTypes.GET_RESULTS_SUCCESS: return getResultsSuccess(state, action);
        case actionTypes.GET_RESULTS_FAIL: return getResultsFail(state, action);
        //Result Details
        case actionTypes.GET_RESULT_DETAILS_START: return getResultDetailsStart(state, action);
        case actionTypes.GET_RESULT_DETAILS_SUCCESS: return getResultDetailsSuccess(state, action);
        case actionTypes.GET_RESULT_DETAILS_FAIL: return getResultDetailsFail(state, action);
        //Result Tests
        case actionTypes.GET_TESTS_SCORES_START: return getTestScoresStart(state, action);
        case actionTypes.GET_TESTS_SCORES_SUCCESS: return getTestScoresSuccess(state, action);
        case actionTypes.GET_TESTS_SCORES_FAIL: return getTestScoresFail(state, action);
        //Initial state
        default: return state;
    }
}

export default recordsReducer;