import React, { Component } from 'react'

export class QuestionForm extends Component {
    render() {
        const { removeField } = this.props
        return (
            <div className="form-group mb-3 mt-1"> 
                <label for="name">Question</label> 
                <textarea className="form-control" rows="3" name="question"></textarea>
                <p className='text-right'>
                    <button type="button" className="btn btn-sm btn-danger btn-round-sm ml-2 mt-1" title="add question" onClick={this.addField}>
                        <small><i className="icon-minus" onClick={removeField}></i></small>
                    </button>
                </p>
            </div>
        )
    }
}

export default QuestionForm
