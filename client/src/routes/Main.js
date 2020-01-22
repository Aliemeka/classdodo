import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Classes from '../components/classroom/Classes'
import CreateSubjects from '../components/classroom/CreateSubjects'
import Records from '../components/records/Records'
import Results from '../components/records/Results'

import Login from '../components/signing/Login';
import SignUp from '../components/signing/SignUp';

import TestList from '../components/test/TestList'
import TestMain from '../components/test/TestMain'
import AddTest from '../components/test/AddTest'


const Main = () =>{
    return (
        <Switch>
            <Route exact path='/' component={Classes} />
            <Route exact path='/add-subject' component={CreateSubjects} />
            <Route exact path='/records' component={Records}/>
            <Route exact path='/sign-up' component={SignUp}/>
            <Route exact path='/log-in' component={Login}/>
            <Route exact path='/:subject_id' component={TestList}/>
            <Route exact path='/:subject_id/test/:test_id' component={TestMain}/>
            <Route exact path='/:subject_id/add' component={AddTest}/>
            <Route exact path='/records/:record_id' component={Results}/>
        </Switch>
    )
}

export default Main