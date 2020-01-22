import React, { Component } from 'react'
// import { Link } from 'react-router-dom'

import TestForm from '../test/TestForm'


// import * as actions from '../../store/actions/subjects'

class CreateSubjects extends Component {
    state ={
        subject_Count: 0
    }


    // {errorMessage}
    render() {
        return (
            <main className="main-area pt-5 pb-5">
          
                <h1 className="text-center">Sign-Up</h1>
                <section className="form-area container bg-light">
                    <form className="p-2 mt-1" >
                        <div className="row mt-2">

                            <div className="col-md-6">
                                <div className="form-area-inner mt-4 pt-5">
                                    <div className="form-group row"> 
                                        <label htmlFor="subject_name" className="col-sm-3 control-label">Subject Name*</label> 
                                        <div className="col-sm-9"> 
                                            <input type="text" className="form-control" name="subject_name"  
                                            placeholder="Enter subject" required/> 
                                        </div> 
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-6">
                                <div className="form-area-inner mt-4 pt-5">
                                    <TestForm />
                                </div>
                            </div>
                        </div>
                        <div className="form-group mt-1 p-2"> 
                            <div className="col-sm-offset-2 col-sm-10"> 
                                <button className="btn btn-dark">Add subject <i className="icon-plus"></i></button>
                            </div> 
                        </div>
                    </form>
                </section>
            </main>
        )
    }
}

export default CreateSubjects
