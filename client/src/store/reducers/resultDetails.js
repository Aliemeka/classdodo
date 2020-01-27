import * as actionTypes from '../actions/actionTypes'
import { updateObject } from '../utility'

const initialState = {
    resultDetails: {},
    testScores: [],
    error: null,
    loading: false
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
        resultDetails: action.resultDetails, 
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

const resultReducer = (state=initialState, action) =>{
    switch (action.type) {
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

export default resultReducer;
