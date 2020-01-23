import React, { Component, Fragment } from 'react'
import QuestionForm from './QuestionForm'

export class TestForm extends Component {
    state ={
        count: 1
    }
    addField = () =>{
        const c = this.state.count
        this.setState({ count: c+1 })
    }
    removeField = () =>{
        const c = this.state.count
        if( c > 1){
            this.setState({ count: c-1 })
        }
    }
    render() {
        const count = this.state.count
        const { testOrder, handleDelete, enterTitle } = this.props
        const questionForms = []
        for(let i=1; i<=count; i++){
            questionForms.push(i)
        }
        return (
            <Fragment>
                <div className="row mb-2">
                    <div className="col-xs-3 col-sm-6" />
                    <div className="col-xs-9 col-sm-6">
                        <p className="text-right">
                        <button type="button" className="btn btn-sm btn-danger btn-round" 
                             onClick={handleDelete}><i className="icon-trash"></i></button>
                        </p>
                    </div> 
                </div>
                <div className="form-group"> 
                    <div className="col-xs-12 col-sm-10"> 
                        <input type="text" className="form-control" name="test_title" id="test_title"
                            placeholder="Enter test title" onChange={enterTitle} required/> 
                    </div>
                </div>
                <Fragment>
                    {questionForms.map(i =><QuestionForm key={parseFloat(`${i}.${testOrder}`)} order={i} removeField={this.removeField} 
                                                    id={parseFloat(`${i}.${testOrder}`)} test={testOrder}/>)}
                </Fragment>
                <div className="form-group mb-1">
                     <button type="button" className="btn btn-sm btn-dark" title="add question" onClick={this.addField}> 
                        Add question <i className="icon-plus"></i></button>
                 </div> 
                 <p />
                <hr className="test-line"/>
            </Fragment>
        )
    }
}

export default TestForm
