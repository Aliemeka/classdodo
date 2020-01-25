import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import TestForm from '../test/TestForm'

import Alertbox from '../../containers/Alertbox'

import {createSubject} from '../../store/actions/subjects'


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
        options: [],
        optionCount: 1,
        is_Submitted: false
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
    //Creates new option in state
    createOptions = optionItem =>{
        optionItem.id = this.state.optionCount
        optionItem.question = this.state.qCount
        optionItem.test = this.state.testsCount
        const options = [...this.state.options, optionItem]
        this.setState({ options })
    }

    //Marks an option that corresponds to the answer value as the answer
    makeAnswer = answer =>{
        const options = []
        const oldOptions = this.state.options
        oldOptions.forEach(option => {
            if(option.option===answer){
                option.is_answer = true
            }
            options.push(option)
        });
        this.setState({ options })
    }

    //Trigger actions to add a new option
    addOption = option =>{
        const optionCount = this.state.optionCount
        this.setState({ optionCount: optionCount+1 })
        this.createOptions(option)
    }

    //Removes a given option
    removeOption = () =>{
        const optionCount = this.state.optionCount
        this.setState({ optionCount: optionCount-1 })
        const options = this.state.options
        options.filter(op => op.id !== optionCount)
        this.setState({ options })
    }

    //Creates new question
    createQuestion = questionItem =>{
        questionItem.test = this.state.testsCount
        questionItem.id = this.state.qCount
        this.setState({ question: questionItem })
        const test_Questions = [...this.state.test_Questions, questionItem]
        this.setState({ test_Questions })
    }

    //Adds a question trigger
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

    //deletes a question
    removeQuestionField = () =>{
        let qCount = this.state.qCount
        this.setState({ qCount: qCount-1 })
        const test_Questions = this.state.test_Questions.filter(q => q.id !== qCount);
        const options = this.state.options.filter(o => o.question !== qCount);
        this.setState({ test_Questions })
        this.setState({ options })
    }

    //Checks the input on the question field
    handleQuestionInput = e =>{
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    //Checks for inputed test title
    handleTestTitle = e =>{
        this.setState({
            [e.target.id] : e.target.value
        })
    }

    //Creates a new test
    createTest = testItem =>{
        testItem.order = this.state.testsCount
        const tests = [...this.state.tests, testItem]
        this.setState({ tests })
    }

    //Triggers actions to add new test
    handleAddTest= () =>{
        let testsCount = this.state.testsCount + 1
        this.setState({ testsCount })
        if(this.state.testsCount>=1){
            const testItem = {}
            testItem.test_title = this.state.test_title
            this.createTest(testItem) 
        }
    }

    //Deletes a test
    handleDeleteTest = () =>{
        const testsCount = this.state.testsCount
        this.setState({ testsCount: testsCount - 1})
        const tests = this.state.tests.filter(t => t.order !== testsCount);
        const test_Questions = this.state.test_Questions.filter(tq => tq.test !== testsCount);
        const options = this.state.options.filter(op => op.test !== testsCount);
        this.setState({ tests })
        this.setState({ test_Questions })
        this.setState({ options })
    }

    //Submits inputted values on the form
    handleSubmit = e =>{
        e.preventDefault();
        const tests = []
        for(let i=0; i<this.state.tests.length; i++){
            const test = {}
            const questions = []
            const sTests = this.state.tests
            test.test_title = sTests[i].test_title
            test.order = i+1
            const sQ = this.state.test_Questions.filter(q => q.test===i+1)
            for(let j=0; j<sQ.length; j++){
                const question ={}
                const options = []
                question.question = sQ[j].question
                question.order = j+1
                const opt = this.state.options.filter(q => q.question===j+1)
                opt.forEach(opt => {
                    options.push(opt.option)
                    if(opt.is_answer){
                        question.answer = opt.option
                    }
                });
                question.options = options
                questions.push(question)
            }
            test.questions = questions
            tests.push(test)
        }
        const subject = {
            subject_name: e.target.elements.subject_name.value,
            teacher: this.props.un,
            tests
        }
        this.props.createSubject(this.props.token, subject)
        this.setState({ is_Submitted: true })
    }

    // {errorMessage}
    render() {
        const testForms = []
        // const testQuestions = this.state.test_Questions
        const allTest = this.state.tests
        const is_Submitted = this.state.is_Submitted
        let testStatus = 'no test added'
        if(allTest!==undefined && allTest.length){
            if(allTest.length>1){
                testStatus = `${allTest.length} tests added`
            }else{
                testStatus = '1 test added'
            }
        }
        const testLength = this.state.testsCount
        let addMessage =<p className='pb-1'>Add a test</p>
        if(testLength>0){
            addMessage = null
        }
        for(let i=1; i<=testLength; i++){
            testForms.push(i)
        }
        let alert = null
        if(is_Submitted){
            if(!this.props.loading){
                if(this.props.error){
                    alert = <Alertbox message={'Invalid entry'} status={'error'} />
                }else{
                    alert = <Alertbox message={'Created new subject'} status={'success'} />
                }
            }
        }
        return (
            <main className="main-area pt-5 pb-5">
                {alert}
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
                                <p className='text-muted ml-2'>{testStatus}</p>
                                { 
                                    allTest!==undefined ? allTest.map(test =>
                                    (<div className="list-group mt-2"> 
                                            <a href="#t" className="list-group-item active">
                                                <h5 className="list-group-item-heading">{test.test_title}</h5>
                                            </a>
                                        </div>)): null
                                }
                            </div>

                            <div className="col-md-6">
                                <div className="form-area-inner pt-5">
                                {addMessage}    
                                    {testForms.map(i => <TestForm key={i} testOrder={i} handleDelete={this.handleDeleteTest} 
                                                            enterTitle={this.handleTestTitle} removeQuestion={this.removeQuestionField}
                                                            addQuestion={this.addQuestionField} inputQuestion={this.handleQuestionInput}
                                                            qCount={this.state.qCount} addOption={this.addOption} removeOption={this.removeOption}
                                                            makeAnswer={this.makeAnswer}/>)}
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
      token: state.auth.token,
      un: state.auth.username,
      loading: state.subjects.loading,
      error: state.subjects.error
    }
  }

const mapDispatchToProps = dispatch =>{
    return {
        createSubject: (token, subject) => dispatch(createSubject(token, subject))
    }
}

  
export default connect(mapStateToProps, mapDispatchToProps)(CreateSubjects);
