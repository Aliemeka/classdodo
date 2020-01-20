import * as actionTypes from '../actions/actionTypes'
import { updateObject } from '../utility'


const initialState = {
    users: [],
    teachers: [],
    students: [],
    error: null,
    loading: false
}


//-----Users Reducers---------------
//user start
const getUsersStart = (state, action) =>{
    return updateObject(state, {
        error: null,
        users: [],
        loading: true
    })
}

//success
const getUsersSuccess = (state, action) =>{
    return updateObject(state, {
        users: action.users, 
        error: null,
        loading: false
    })
} 

//error
const getUsersFail = (state, action) =>{
    return updateObject(state, {
        error: action.error,
        loading: false
    })
} 



//-----Teachers Reducers---------------
//start
const getTeachersStart = (state, action) =>{
    return updateObject(state, {
        error: null,
        teachers: [],
        loading: true
    })
}

//success
const getTeachersSuccess = (state, action) =>{
    return updateObject(state, {
        teachers: action.teachers, 
        error: null,
        loading: false
    })
} 

//error
const getTeachersFail = (state, action) =>{
    return updateObject(state, {
        error: action.error,
        loading: false
    })
} 



//-----Students Reducers---------------
//start
const getStudentsStart = (state, action) =>{
    return updateObject(state, {
        error: null,
        students: [],
        loading: true
    })
}

//success
const getStudentsSuccess = (state, action) =>{
    return updateObject(state, {
        students: action.students, 
        error: null,
        loading: false
    })
} 

//error
const getStudentsFail = (state, action) =>{
    return updateObject(state, {
        error: action.error,
        loading: false
    })
} 



const usersReducer = (state=initialState, action) =>{
    switch (action.type) {
        //All users
        case actionTypes.GET_USERS_START: return getUsersStart(state, action);
        case actionTypes.GET_USERS_SUCCESS: return getUsersSuccess(state, action);
        case actionTypes.GET_USERS_FAIL: return getUsersFail(state, action);
        //Teachers
        case actionTypes.GET_TEACHERS_START: return getTeachersStart(state, action);
        case actionTypes.GET_TEACHERS_SUCCESS: return getTeachersSuccess(state, action);
        case actionTypes.GET_TEACHERS_FAIL: return getTeachersFail(state, action);
        //Students
        case actionTypes.GET_STUDENTS_START: return getStudentsStart(state, action);
        case actionTypes.GET_STUDENTS_SUCCESS: return getStudentsSuccess(state, action);
        case actionTypes.GET_STUDENTS_FAIL: return getStudentsFail(state, action);
        //Initial
        default: return state;
    }
}

export default usersReducer;