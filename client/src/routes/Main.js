import React, {Fragment} from 'react';
import { Route } from 'react-router-dom';

import Classes from '../components/classroom/Classes'

import Login from '../components/signing/Login';
import SignUp from '../components/signing/SignUp';


const Main = () =>{
    return (
        <Fragment>
            <Route exact path='/' component={Classes} />
            <Route exact path='/sign-up' component={SignUp}/>
            <Route exact path='/log-in' component={Login}/>
        </Fragment>
    )
}

export default Main