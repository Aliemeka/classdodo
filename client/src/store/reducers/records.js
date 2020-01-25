import * as actionTypes from '../actions/actionTypes'
import { updateObject } from '../utility'


const initialState = {
    records: [],
    results: [],
    currentTest: {},
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
        //Initial state
        default: return state;
    }
}

export default recordsReducer;