import * as actionTypes from '../actions/actionTypes'
import { updateObject } from '../utility'


const initialState = {
    token: null,
    error: null,
    userId: null,
    first_name: null,
    last_name: null,
    username: null,
    is_student: null,
    is_teacher: null,
    loading: false
}

const authStart = (state, action) =>{
    return updateObject(state, {
        error: null,
        username: null,
        is_student: null,
        is_teacher: null,
        loading: true
    })
}

const authSuccess = (state, action) =>{
    return updateObject(state, {
        token: action.user.token,
        userId: action.user.userId,
        first_name: action.user.first_name,
        last_name: action.user.last_name,
        username: action.user.username,
        is_student: action.user.is_student,
        is_teacher: action.user.is_teacher,
        error: null,
        loading: false
    })
} 


const authFail = (state, action) =>{
    return updateObject(state, {
        error: action.error,
        loading: false
    })
} 

const authLogout = (state, action) =>{
    return updateObject(state, {
        token: null
    })
} 


const authReducer = (state=initialState, action) =>{
    switch (action.type) {
        case actionTypes.AUTH_START: return authStart(state, action);
        case actionTypes.AUTH_SUCCESS: return authSuccess(state, action);
        case actionTypes.AUTH_FAIL: return authFail(state, action);
        case actionTypes.AUTH_LOGOUT: return authLogout(state, action);
        default: return state;
    }
}

export default authReducer;