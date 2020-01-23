import React, { Component, Fragment } from 'react'
// import axios from 'axios'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import * as actions from '../../store/actions/subjects'
import * as tActions from '../../store/actions/users'


import Subjects from './Subjects'

import Loader from '../../containers/Loader'

class Classes extends Component{

    componentDidMount(){
        if(this.props.token !== null && this.props.token !== undefined){
            this.props.getSubjects(this.props.token)
            this.props.getTeachers(this.props.token)
        }
    }

    componentWillUpdate(newProps){
        if(newProps.token !== this.props.token){
            if(newProps.token !== null && newProps.token !== undefined){
                this.props.getSubjects(newProps.token) 
                this.props.getTeachers(newProps.token) 
            } 
        }
    }

    // handleTeacher = subjectTeacher =>{
    //     const teacherArray = this.props.teachers.filter(teacher => teacher.id === subjectTeacher)
    //     return `${teacherArray[0].first_name} ${teacherArray[0].last_name}`
    // }

    render(){
        
        return (
            <main className="main-area pt-5 pb-2">
            
                {  this.props.isAuthenticated ?
                    <Fragment>
                    <h1 className="text-center">Your Dashboard</h1>
                    <section className="courses-area container full-width mt-4 mb-4">
                    {this.props.loading ?
                        <Loader />
                    :
                        <Subjects subjects ={this.props.subjects}/>
                    }
                    </section>
                    </Fragment>
                    :   

                    <Fragment>
                        { this.props.signing ?
                            <Fragment>
                                <h4 className="text-center">Signing in...</h4>
                                <Loader />
                            </Fragment>
                        :
                        <Fragment>
                        <h1 className="text-center">Welcome to Class Dodo</h1>
                        <section className="courses-area container full-width mt-4 mb-4 bg-light p-5">
                            <div className="d-flex justify-content-center 
                                text-muted align-items-center mt-5 mb-5">
                                <h2><i className="icon-warning"></i></h2>
                                <h3 className="pl-2"><Link to="/sign-up">Sign up </Link> or <Link to="/log-in">Login </Link> 
                                         to get started <i className="icon-login"></i></h3>
                            </div>
                        </section>
                        </Fragment>
                        }
                    </Fragment>
                }
        </main>
        )
    }
}

const mapStateToProps = state =>{
    return{
        token: state.auth.token,
        loading: state.subjects.loading,
        subjects: state.subjects.subjects,
        isAuthenticated: state.auth.token,
        signing: state.auth.loading,
        teachers: state.users.teachers
    }
 }

 const mapDispatchToProps = dispatch =>{
    return{
        getSubjects: token => dispatch(actions.getSubjects(token)),
        getTeachers: token => dispatch(tActions.getTeachers(token))
    }
  }

 export default connect(mapStateToProps, mapDispatchToProps)(Classes)