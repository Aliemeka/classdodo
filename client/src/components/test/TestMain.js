import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import Questions from './Questions'

import * as actions from '../../store/actions/subjects'

export class TestMain extends Component {
    componentDidMount(){
        let id = this.props.match.params.subject_id
        let testId = this.props.match.params.test_id
        if(this.props.token !== null && this.props.token !== undefined){
            this.props.getSubjectTests(this.props.token, id);
            this.props.getTest(this.props.token, id, testId)

        }
    }

    componentWillUpdate(newProps){
        if(newProps.token !== this.props.token){
            if(newProps.token !== null && newProps.token !== undefined){
                newProps.getSubjectTests(newProps.token, this.props.match.params.subject_id)
                newProps.getTest(newProps.token, this.props.match.params.subject_id, this.props.match.params.test_id)
            } 
        }
    }

    render() {
        // const testId = this.props.match.params.test_id
        // console.log(testId)
        // const { tests } = this.props.subject
        // const { test } = this.props.subject
        return (
            <Fragment>
            {
                this.props.loading ? 
                <main className="main-area pt-3 pb-2">
                <section className="courses-area container d-flex justify-content-center full-width mt-4 mb-4">
                        <div className="d-flex justify-content-center p-4">
                            <div className="spinner-grow text-secondary">
                                <span className="sr-only">Loading...</span>
                            </div>
                            <div className="spinner-grow text-secondary">
                                <span className="sr-only">Loading...</span>
                            </div>
                            <div className="spinner-grow text-secondary">
                                <span className="sr-only">Loading...</span>
                            </div>
                        </div>
                </section>
                </main>
                :
            <Fragment>
                <ol className="breadcrumb">
                    <li><Link to="/">Classroom</Link></li>
                    <li><Link to={`/${this.props.subject.id}`}>{this.props.subject.subject_name}</Link></li>
                    <li><span className="active">Shapes test</span></li>
                </ol>
                <main className="main-area pt-3 pb-2">
                    <h1 className="text-center">Shapes</h1>
                    <section className="courses-area container full-width mt-4 mb-4">
                        <div className="d-flex justify-content-center">
                            <a href="/" className="round-nav"><i className="icon-arrow-left"></i></a>
                            <h2 className="pr-2 pl-2">Question 1 out of 5</h2>
                            <a href="/" className="round-nav"><i className="icon-arrow-right"></i></a>
                        </div>
                        <div className="row justify-content-center">
                            <div className="col-md-8 col-sm-10 p-1 mb-2">

                                <Questions/>

                            </div>
                        </div>
                    </section>
                </main>
            </Fragment>
            }
            </Fragment>

        )
    }
}

const mapStateToProps = state =>{
    return{
        token: state.auth.token,
        loading: state.subjects.loading,
        subject: state.subjects.currentSubject,
        test: state.subjects.currentTest
    }
 }

 const mapDispatchToProps = dispatch =>{
    return{
        getSubjectTests: (token, id) => dispatch(actions.getSubjectTests(token, id)),
        getTest: (token, subjectId, testId) => dispatch(actions.getTestDetails(token, subjectId, testId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TestMain)
