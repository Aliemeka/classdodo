import axios from 'axios';
import * as actionTypes from './actionTypes';

//Begins the authentication process

//---All users
export const getUsersStart = () =>{
    return {
        type: actionTypes.GET_USERS_START
    }
}


//---Users who are teachers
export const getTeachersStart = () =>{
    return {
        type: actionTypes.GET_TEACHERS_START
    }
}

//---Users who are students
export const getStudentsStart = () =>{
    return {
        type: actionTypes.GET_STUDENTS_START
    }
}

//Checks if getUsersListentication was successful then gets the token

//Check for all users
export const getUsersSuccess = users =>{
    return {
        type: actionTypes.GET_USERS_SUCCESS,
        users
    }
}


//Check for teachers
export const getTeachersSuccess = teachers =>{
    return {
        type: actionTypes.GET_TEACHERS_SUCCESS,
        teachers
    }
}

//Check for students
export const getStudentsSuccess = students =>{
    return {
        type: actionTypes.GET_STUDENTS_SUCCESS,
        students
    }
}



//Checks if there is an error in authentication

//If getting users fail
export const getUsersFail = error =>{
    return {
        type: actionTypes.GET_USERS_FAIL,
        error
    } 
}

//If getting teachers fail
export const getTeachersFail = error =>{
    return {
        type: actionTypes.GET_TEACHERS_FAIL,
        error
    } 
}

//If getting students fail
export const getStudentsFail = error =>{
    return {
        type: actionTypes.GET_STUDENTS_FAIL,
        error
    } 
}

//Makes a GET request to get all users
export const getUsers = token =>{
    return dispatch =>{
        dispatch(getUsersStart())
        axios.defaults.headers = {
            'Content-Type': 'application/json',
            Authorization: `Token ${token}`
        }
        axios.get('http://127.0.0.1:8000/users/').then(res=>{
            const users = res.data;
            dispatch(getUsersSuccess(users))
        }).catch(err=>{
            dispatch(getUsersFail(err))
        })
    }
}

//Makes a GET request to get all teachers
export const getTeachers = token =>{
    return dispatch =>{
        dispatch(getTeachersStart())
        axios.defaults.headers = {
            'Content-Type': 'application/json',
            Authorization: `Token ${token}`
        }
        axios.get('http://127.0.0.1:8000/users/').then(res=>{
            const users = res.data;
            const teachers = users.filter(user => user.is_teacher===true)
            dispatch(getTeachersSuccess(teachers))
        }).catch(err=>{
            dispatch(getTeachersFail(err))
        })
    }
}

//Makes a GET request to get all students
export const getStudents = token =>{
    return dispatch =>{
        dispatch(getStudentsStart())
        axios.defaults.headers = {
            'Content-Type': 'application/json',
            Authorization: `Token ${token}`
        }
        axios.get('http://127.0.0.1:8000/users/').then(res=>{
            const users = res.data;
            const students = users.filter(user => user.is_student===true)
            dispatch(getStudentsSuccess(students))
        }).catch(err=>{
            dispatch(getStudentsFail(err))
        })
    }
}
