import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import Questions from './Questions'

import * as actions from '../../store/actions/subjects'
import { submitTest }  from '../../store/actions/records'

import Loader from '../../containers/Loader'

export class TestMain extends Component {

    state = {
        order: 1,
        isDone: false,
        selected: {}
    }

    componentDidMount(){
        let id = this.props.match.params.subject_id
        let testOrder = this.props.match.params.test_id
        if(this.props.token !== null && this.props.token !== undefined){
            this.props.getSubjectTests(this.props.token, id);
            this.props.getTest(this.props.token, id, testOrder)

        }
    }

    UNSAFE_componentWillUpdate(newProps){
        if(newProps.token !== this.props.token){
            if(newProps.token !== null && newProps.token !== undefined){
                newProps.getSubjectTests(newProps.token, this.props.match.params.subject_id)
                newProps.getTest(newProps.token, this.props.match.params.subject_id, this.props.match.params.test_id)
            } 
        }
    }

    handleCurrentQuestion = ( questions, order ) =>{
        return questions[order-1]
    }

    handleSelect = (e, qOrder) =>{
        const selected = this.state.selected
        selected[qOrder] = e.target.value
        this.setState({ selected: selected })
    }

    getPrevQuestion = () =>{
        let order = this.state.order
        if(order > 1){
            order -=1
            this.setState({ order: order })
        }
    }

    getNextQuestion = (questions) =>{
        let order = this.state.order
        if(order < questions.length){
            order +=1
            this.setState({ order: order })
        }
    }

    handleSubmit = e =>{
        e.preventDefault()
        this.setState({ isDone: true })
        const selectedOptions = this.state.selected
        const test = {
            username: this.props.username,
            subjectId: this.props.subject.id,
            testId: this.props.test.id,
            answers: selectedOptions
        }
        this.props.submitTest(this.props.token, test)
    }

    render() {
        let order = this.state.order
        let done = this.state.isDone
        const selected = this.state.selected
        return (
            <Fragment>
            {
                this.props.loading ? 
                <main className="main-area pt-3 pb-2">
                <section className="courses-area container d-flex justify-content-center full-width mt-4 mb-4">
                        <Loader />
                </section>
                </main>
                :
            <Fragment>
                {
                   this.props.test !== undefined ?
                    <Fragment>
                        <ol className="breadcrumb">
                            <li><Link to="/">Classroom</Link></li>
                            <li><Link to={`/${this.props.subject.id}`}>{this.props.subject.subject_name}</Link></li>
                            <li><span className="active">{this.props.test.test_title}</span></li>
                        </ol>
                        <main className="main-area pt-3 pb-2">
                        
                            <h1 className="text-center">{this.props.test.test_title}</h1>
                            <section className="courses-area container full-width mt-4 mb-4 pb-4">
                            <Fragment>
                            {  this.props.test.questions!==undefined && this.props.test.questions !== null ?
                                <div className="d-flex justify-content-center">

                                    <button className="round-nav" onClick={this.getPrevQuestion}><i className="icon-arrow-left"></i></button>
                                    <h3 className="pr-2 pl-2">Question {order} out of {this.props.test.questions.length}</h3>
                                    <button className="round-nav" onClick={()=>this.getNextQuestion(this.props.test.questions)}><i className="icon-arrow-right"></i></button>


                                </div>
                                : null}
                                </Fragment>

                                <div className="row justify-content-center">
                                    <div className="col-md-8 col-sm-10 p-1 mb-2">

                                     {  this.props.test.questions!==undefined ?
                                        this.props.test.questions.length > 0 ?
                                        <Questions key={order}  order={order} questions={this.props.test.questions} 
                                            handleCurrentQuestion={this.handleCurrentQuestion} done={done} 
                                            change={this.handleSelect} selected={selected} submitTest={this.handleSubmit}/>:
                                        <h4 className="text-center text-muted">Test is unavailable</h4>
                                        : <h4 className="text-center text-muted">Test is unavailable</h4> }

                                     </div>
                                </div>
                            </section>
                        </main>
                    </Fragment>
                    :
                    
                    <section className="courses-area container d-flex justify-content-center full-width mt-4 mb-4">
                        <Loader />
                    </section>
                }
            </Fragment>
            }
            </Fragment>

        )
    }
}

const mapStateToProps = state =>{
    return{
        token: state.auth.token,
        username: state.auth.username,
        loading: state.subjects.loading,
        subject: state.subjects.currentSubject,
        test: state.subjects.currentTest
    }
 }

 const mapDispatchToProps = dispatch =>{
    return{
        getSubjectTests: (token, id) => dispatch(actions.getSubjectTests(token, id)),
        getTest: (token, subjectId, testId) => dispatch(actions.getTestDetails(token, subjectId, testId)),
        submitTest: (token, test) => dispatch(submitTest(token, test)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TestMain)
