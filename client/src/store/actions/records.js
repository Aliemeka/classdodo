import axios from 'axios';
import * as actionTypes from './actionTypes';

//Begins the authentication process
const getRecordsStart = () =>{
    return {
        type: actionTypes.GET_RECORDS_START
    }
}

//Checks if getSubject was successful
const getRecordsSuccess = records =>{
    return {
        type: actionTypes.GET_RECORDS_SUCCESS,
        records
    }
}

//Checks if there is an error in getting records
const getRecordsFail = error =>{
    return {
        type: actionTypes.GET_RECORDS_FAIL,
        error
    } 
}

//Get records action
export const getRecords = token =>{
    return dispatch =>{
        dispatch(getRecordsStart())
        axios.defaults.headers = {
            'Content-Type': 'application/json',
            Authorization: `Token ${token}`
        }
        axios.get('http://127.0.0.1:8000/records/').then(res=>{
            const records = res.data
            dispatch(getRecordsSuccess(records))
        }).catch(err=>{
            dispatch(getRecordsFail(err))
        })
    }
}