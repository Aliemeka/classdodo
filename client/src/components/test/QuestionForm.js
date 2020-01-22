import React, { Component } from 'react'

export class QuestionForm extends Component {
    render() {
        return (
            <div className="form-group mb-2 mt-1"> 
                <label for="name">Question</label> 
                <textarea className="form-control" rows="3"></textarea> 
            </div>
        )
    }
}

export default QuestionForm
