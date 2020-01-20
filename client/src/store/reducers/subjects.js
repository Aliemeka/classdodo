import * as actionTypes from '../actions/actionTypes'
import { updateObject } from '../utility'


const initialState = {
    subjects: [],
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



const subjectsReducer = (state=initialState, action) =>{
    switch (action.type) {
        case actionTypes.GET_SUBJECTS_START: return getSubjectsStart(state, action);
        case actionTypes.GET_SUBJECTS_SUCCESS: return getSubjectsSuccess(state, action);
        case actionTypes.GET_SUBJECTS_FAIL: return getSubjectsFail(state, action);
        default: return state;
    }
}

export default subjectsReducer;