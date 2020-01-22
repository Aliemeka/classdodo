import React, { Component, Fragment } from 'react'
import QuestionForm from './QuestionForm'

export class TestForm extends Component {
    render() {
        const { handleDelete } = this.props
        return (
            <Fragment>
                <div className="form-group "> 
                    <div className="col-xs-12 col-sm-10"> 
                        <input type="text" className="form-control" name="test_title"  
                        placeholder="Enter test title" required/> 
                    </div>
                </div>
                <QuestionForm />
                <div className="form-group mb-1">
                     <button type="button" className="btn btn-sm btn-dark" title="add question"> Add question<i className="icon-plus"></i></button>
                 </div> 
                <div className="col-xs-4 col-sm-4 row mb-2">
                    <div className="col-xs-9 col-sm-6">
                        <p className="text-right"><button type="button" className="btn btn-sm btn-danger btn-round" onClick={handleDelete}><i className="icon-trash"></i></button></p>
                    </div> 
                </div>
                <hr className="test-line"/>
            </Fragment>
        )
    }
}

export default TestForm
