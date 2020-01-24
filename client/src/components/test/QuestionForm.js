import React, { Component, Fragment } from 'react'

import Option from './Option'

export class QuestionForm extends Component {
    state = {
        optionId: 1,
        option: null,
        answer: null,
        options: []
    }

    createNewOption = optionItem =>{
        //creates new option
        optionItem.key = this.state.optionId
        const options = [...this.state.options, optionItem]
        this.setState({
          options: options
        })
        optionItem.key += 1
        this.setState({ optionId: optionItem.key })
    }

    handleChange = e =>{
        this.setState({
            [e.target.id] : e.target.value
        })
    }

    handleAddOption = ()=>{
        //inputs an option to be added
        const optionItem = {}
        optionItem.option = this.state.option
        this.createNewOption(optionItem)
    }

    handleAnswer = e =>{
        let answer = this.state.answer
        answer = e.target.value
        this.setState({ answer: answer })
    }

    deleteOption = (key) =>{
        //deletes selected option
        const options = this.state.options.filter(o => o.key !== key);
        this.setState({ options })
    }
    
    render() {
        const { removeField, order, inputQuestion } = this.props
        return (
            <div className="mb-3 mt-1"> 
                <label htmlFor="name">Question {order}</label> 
                <textarea className="form-control" rows="3" name="questionInput" id={order} onChange={inputQuestion}></textarea>
                <Fragment>
                    {this.state.options.map(option=><Option key={option.key} option={option.option} deleteOption={this.deleteOption}
                                                  question={order} id={option.key} selectOption={this.handleAnswer} answer={this.state.answer}/>)}
                </Fragment>

                <div className='d-flex align-items-center p-1'>
                    <div className='col-10'>
                        <input type="text" placeholder="Add an option" id="option" className="option-text" onChange={this.handleChange}/>
                    </div>
                    <div className='col-1'>
                        <button className='btn btn-sm btn-dark' type="button" onClick={this.handleAddOption}><i className="icon-plus"></i></button>
                    </div>
                </div>

                <p className='text-right'>
                    <button type="button" className="btn btn-sm btn-danger btn-round-sm ml-2 mt-1" title="add question" onClick={removeField}>>
                        <small><i className="icon-minus"></i></small>
                    </button>
                </p>
            </div>
        )
    }
}

export default QuestionForm
