import React, {Fragment} from 'react';
import { Route } from 'react-router-dom';

import TestList from '../components/test/TestList'


const TestRoutes = () =>{
    return (
        <Fragment>
            <Route exact path='/test' component={TestList}/>
        </Fragment>
    )
}

export default TestRoutes