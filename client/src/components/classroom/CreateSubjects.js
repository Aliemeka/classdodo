import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import TestForm from '../test/TestForm'


// import * as actions from '../../store/actions/subjects'

class CreateSubjects extends Component {
    state ={
        testsCount: 0
    }

    handleAddTest= () =>{
        const testsCount = this.state.testsCount
        this.setState({ testsCount: testsCount + 1})
    }

    handleDeleteTest = () =>{
        const testsCount = this.state.testsCount
        this.setState({ testsCount: testsCount - 1})
    }

    handleAddQuestion = ()=>{
        //
    }

    handleSubmit = e =>{
        e.preventDefault();
    }

    // {errorMessage}
    render() {
        const testForms = []
        const testLength = this.state.testsCount
        for(let i=1; i<=testLength; i++){
            testForms.push(i)
        }
        // const questionForms = []

        return (
            <main className="main-area pt-5 pb-5">
          
                <h1 className="text-center">Add a subject</h1>
                <section className="form-area container bg-light">
                    <form className="p-2 mt-1" onSubmit={this.handleSubmit}>
                        <div className="row mt-2 pt-2">

                            <div className="col-md-6">
                                <div className="form-area-inner pt-5">
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
                                <div className="form-area-inner pt-5">
                                    {testForms.map(i => <TestForm key={i} handleDelete={this.handleDeleteTest}/>)}
                                    <button type="button" className="btn btn-sm btn-dark" onClick={this.handleAddTest}>Add test <i className="icon-plus"></i></button>
                                </div>
                            </div>
                        </div>
                        <div className="form-group mt-2 p-2"> 
                            <div className="col-sm-offset-2 col-sm-10"> 
                                <button type="submit" className="btn btn-dark">Save subject <i className="icon-plus"></i></button>
                            </div> 
                        </div>
                    </form>
                    <div><Link to='/1/add'>Go to</Link></div>
                </section>
            </main>
        )
    }
}

export default CreateSubjects
