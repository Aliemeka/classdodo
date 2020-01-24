import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import TestForm from '../test/TestForm'

// import * as actions from '../../store/actions/subjects'


/*
 *
 *  Component renders a form for a teacher to add subjects, test and questions
 *
 *  
*/

class CreateSubjects extends Component {
    state ={
        testsCount: 0,
        tests: [],
        test_title: null,
        
        test_Questions: [],
        questionInput: '',
        qCount: 1,
        question: {
            test: null,
            //question: '',
            //order: 1,
            optionId: 1,
            option: null,
            answer: null,
            options: []
        },

        option: {
            question: null, //question.question
            option: null,
            is_answer: false
        },
        answer: null
    }

    // componentDidMount(){
    //     if(this.props.token !== null && this.props.token !== undefined){
    //         this.props.getTeachers(this.props.token)
    //     }
    // }

    // componentWillUpdate(newProps){
    //     if(newProps.token !== this.props.token){
    //         if(newProps.token !== null && newProps.token !== undefined){
    //             this.props.getSubjects(newProps.token) 
    //             this.props.getTeachers(newProps.token) 
    //         } 
    //     }
    // }

    createQuestion = questionItem =>{
        questionItem.test = this.state.testsCount
        questionItem.id = this.state.qCount
        this.setState({ question: questionItem })
        const test_Questions = [...this.state.test_Questions, questionItem]
        this.setState({ test_Questions })
    }

    addQuestionField = () =>{
        let qCount = this.state.qCount
        qCount += 1
        if(qCount>1){
            const question = {}
            question.question = this.state.questionInput
            this.createQuestion(question)
        }
        this.setState({ qCount })
    }

    removeQuestionField = () =>{
        let qCount = this.state.qCount
        this.setState({ qCount: qCount-1 })
        const test_Questions = this.state.test_Questions.filter(q => q.id !== qCount);
        this.setState({ test_Questions })
    }

    handleQuestionInput = e =>{
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    handleTestTitle = e =>{
        this.setState({
            [e.target.id] : e.target.value
        })
    }

    createTest = testItem =>{
        testItem.order = this.state.testsCount
        const tests = [...this.state.tests, testItem]
        this.setState({ tests })
        console.log(tests)
    }

    handleAddTest= () =>{
        let testsCount = this.state.testsCount + 1
        this.setState({ testsCount })
        if(this.state.testsCount>=1){
            const testItem = {}
            testItem.test_title = this.state.test_title
            this.createTest(testItem) 
        }
    }

    handleDeleteTest = () =>{
        const testsCount = this.state.testsCount
        this.setState({ testsCount: testsCount - 1})
        const tests = this.state.tests.filter(t => t.order !== testsCount);
        const test_Questions = this.state.test_Questions.filter(tq => tq.test !== testsCount);
        this.setState({ tests })
        this.setState({ test_Questions })
    }

    handleSubmit = e =>{
        e.preventDefault();
        const tests = this.state.tests
        for(let i=0; i<=tests.length; i++){
            // const questions = []
        }
    }

    // {errorMessage}
    render() {
        const testForms = []
        const testLength = this.state.testsCount
        let addMessage =<p className='pb-1'>Add a test</p>
        if(testLength>0){
            addMessage = null
        }
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
                                {addMessage}
                                    {testForms.map(i => <TestForm key={i} testOrder={i} handleDelete={this.handleDeleteTest} 
                                                            enterTitle={this.handleTestTitle} removeQuestion={this.removeQuestionField}
                                                            addQuestion={this.addQuestionField} inputQuestion={this.handleQuestionInput}
                                                            qCount={this.state.qCount}/>)}
                                    <button type="button" className="btn btn-sm btn-success btn-round" onClick={this.handleAddTest}><i className="icon-plus"></i></button>
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

const mapStateToProps = state =>{
    return{
      token: state.auth.token !== null,
      teacher: state.auth.userId
    }
  }

  
export default connect(mapStateToProps)(CreateSubjects);
