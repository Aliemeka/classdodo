import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import TestForm from '../test/TestForm'


// import * as actions from '../../store/actions/subjects'

class CreateSubjects extends Component {
    state ={
        testsCount: 0
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

    handleAddTest= () =>{
        const testsCount = this.state.testsCount
        this.setState({ testsCount: testsCount + 1})
    }

    handleDeleteTest = () =>{
        const testsCount = this.state.testsCount
        this.setState({ testsCount: testsCount - 1})
    }

    handleSubmit = e =>{
        e.preventDefault();
        const subject = {
            subject_name: e.target.elements.subject_name.value,
            teacher: this.props.teacher
        }
        console.log(subject)
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
                                    {testForms.map(i => <TestForm key={i} testOrder={i} handleDelete={this.handleDeleteTest}/>)}
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
