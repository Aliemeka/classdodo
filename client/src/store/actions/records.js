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
        axios.get('https://classdodo.herokuapp.com/records/').then(res=>{
            const records = res.data
            dispatch(getRecordsSuccess(records))
        }).catch(err=>{
            dispatch(getRecordsFail(err))
        })
    }
}

//Begins the authentication process
const getResultsStart = () =>{
    return {
        type: actionTypes.GET_RESULTS_START
    }
}

//Checks if getResults was successful
const getResultsSuccess = results =>{
    return {
        type: actionTypes.GET_RESULTS_SUCCESS,
        results
    }
}

//Checks if there is an error in getting results
const getResultsFail = error =>{
    return {
        type: actionTypes.GET_RESULTS_FAIL,
        error
    } 
}

//Get results action
export const getResults = (token, recordId) =>{
    return dispatch =>{
        dispatch(getResultsStart())
        axios.defaults.headers = {
            'Content-Type': 'application/json',
            Authorization: `Token ${token}`
        }
        axios.get(`https://classdodo.herokuapp.com/records/${recordId}/results/`).then(res=>{
            const results = res.data
            dispatch(getResultsSuccess(results))
        }).catch(err=>{
            dispatch(getResultsFail(err))
        })
    }
}


//Begins the authentication process
const getResultDetailsStart = () =>{
    return {
        type: actionTypes.GET_RESULT_DETAILS_START
    }
}

//Checks if getResultDetails was successful
const getResultDetailsSuccess = resultDetails =>{
    return {
        type: actionTypes.GET_RESULT_DETAILS_SUCCESS,
        resultDetails
    }
}

//Checks if there is an error in getting results
const getResultDetailsFail = error =>{
    return {
        type: actionTypes.GET_RESULT_DETAILS_FAIL,
        error
    } 
}

//Get results action
export const getResultDetails = (token, recordId, resultId) =>{
    return dispatch =>{
        dispatch(getResultDetailsStart())
        axios.defaults.headers = {
            'Content-Type': 'application/json',
            Authorization: `Token ${token}`
        }
        axios.get(`https://classdodo.herokuapp.com/records/${recordId}/results/${resultId}/`).then(res=>{
            const resultDetails = res.data
            dispatch(getResultDetailsSuccess(resultDetails))
        }).catch(err=>{
            dispatch(getResultDetailsFail(err))
        })
    }
}


//Begins the authentication process
const getTestScoresStart = () =>{
    return {
        type: actionTypes.GET_TESTS_SCORES_START
    }
}

//Checks if getTestScores was successful
const getTestScoresSuccess = testScores =>{
    return {
        type: actionTypes.GET_TESTS_SCORES_SUCCESS,
        testScores
    }
}

//Checks if there is an error in getting results
const getTestScoresFail = error =>{
    return {
        type: actionTypes.GET_TESTS_SCORES_FAIL,
        error
    } 
}

//Get results action
export const getTestScores = (token, recordId, resultId) =>{
    return dispatch =>{
        dispatch(getTestScoresStart())
        axios.defaults.headers = {
            'Content-Type': 'application/json',
            Authorization: `Token ${token}`
        }
        axios.get(`https://classdodo.herokuapp.com/records/${recordId}/results/${resultId}/tests/`).then(res=>{
            const testScores = res.data
            dispatch(getTestScoresSuccess(testScores))
        }).catch(err=>{
            dispatch(getTestScoresFail(err))
        })
    }
}


// //Begins the authentication process
// const submitTestStart = () =>{
//     return {
//         type: actionTypes.SUBMIT_TEST_START
//     }
// }


// //Checks if getSubjectListentication was successful then gets the token
// const submitTestSuccess = test =>{
//     return {
//         type: actionTypes.SUBMIT_TEST_SUCCESS,
//         test
//     }
// }

// //Checks if there is an error in authentication
// const submitTestFail = error =>{
//     return {
//         type: actionTypes.SUBMIT_TEST_FAIL,
//         error
//     } 
// }


export const submitTest = (token, test) =>{
    return dispatch =>{
        // dispatch(submitTestStart())
        axios.defaults.headers = {
            'Content-Type': 'application/json',
            Authorization: `Token ${token}`
        }
        axios.post('https://classdodo.herokuapp.com/testscore/create/', test).then(res=>{
            console.log('Success: ', test)    
        // dispatch(submitTestSuccess())
        }).catch(err=>{
            // dispatch(submitTestFail(err))
        })
    }
}