import React, { Component } from 'react'

export class TestForm extends Component {
    render() {
        return (
            <div className="form-group row"> 
                <div className="col-xs-10 col-sm-8"> 
                    <input type="text" className="form-control" name="test_title"  
                    placeholder="Enter test title" required/> 
                </div>
                <div className="col-xs-2 col-sm-4">
                    <button className="btn btn-md btn-dark btn-round"><i className="icon-plus"></i></button>
                </div> 
            </div>
        )
    }
}

export default TestForm
