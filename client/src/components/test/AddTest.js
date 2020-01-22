import React, { Component } from 'react'
import { connect } from 'react-redux'

import TestForm from './TestForm'

import * as actions from '../../store/actions/subjects'

export class AddTest extends Component {
    state ={
        tests: []
    }

    componentDidMount(){
        let id = this.props.match.params.subject_id
        if(this.props.token !== null && this.props.token !== undefined){
            this.props.getSubjectTests(this.props.token, id);

        }
    }

    componentWillUpdate(newProps){
        if(newProps.token !== this.props.token){
            if(newProps.token !== null && newProps.token !== undefined){
                newProps.getSubjectTests(newProps.token, this.props.match.params.subject_id)
            } 
        }
    }

    handleAddTest = () =>{
        //adds new test
    }
    render() {
        return (
            <main className="main-area pt-5 pb-5">
                <h2 className="text-center">Add Test</h2>
                <section className="form-area container bg-light pb-4">
                    <form className="mt-4 pt-5 pb-2 test-form" onSubmit={null}>
                        <TestForm />
                        <button type="submit" className="btn btn-sm btn-dark">Save</button>
                    </form>
                </section>
            </main>
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

export default connect(mapStateToProps, mapDispatchToProps)(AddTest)
// export default AddTest