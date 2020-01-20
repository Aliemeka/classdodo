import React, { Component, Fragment } from 'react'
// import axios from 'axios'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import * as actions from '../../store/actions/subjects'

import Subjects from './Subjects'

class Classes extends Component{
    // componentWillReceiveProps(newProps){
    //     if(newProps.token){
    //         axios.default.headers = {
    //             'Content-Type': 'application/json',
    //             Authorization: newProps.token 
    //         }
    //         axios.get('http://127.0.0.1:8000/classroom/').then(
    //             res =>{
    //                 this.setState({ subjects : res.data })
    //             }
    //         )
    //     }
    // }

    componentDidMount(){
        if(this.props.token !== null && this.props.token !== undefined){
            this.props.getSubjects(this.props.token)
        }
    }

    componentWillUpdate(newProps){
        if(newProps.token !== this.props.token){
            if(newProps.token !== null && newProps.token !== undefined){
                this.props.getSubjects(newProps.token)
            } 
        }
    }

    render(){
        
        return (
            <main className="main-area pt-5 pb-2">
            
                {  this.props.isAuthenticated ?
                    <Fragment>
                    <h1 className="text-center">Your Dashboard</h1>
                    <section className="courses-area container full-width mt-4 mb-4">
                    {this.props.loading ?
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
                    :
                        <Subjects subjects ={this.props.subjects}/>
                    }
                    </section>
                    </Fragment>
                    :   
                        <Fragment>
                        <h1 className="text-center">Welcome to Class Dodo</h1>
                        <section className="courses-area container full-width mt-4 mb-4 bg-light p-5">
                            <div className="d-flex justify-content-center 
                                text-muted align-items-center mt-5 mb-5">
                                <h2><i className="icon-warning"></i></h2>
                                <h3><Link to="/sign-up">Sign up </Link> or <Link to="/log-in">Login </Link> 
                                         to get started <i className="icon-login"></i></h3>
                            </div>
                        </section>
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
        isAuthenticated: state.auth.token
    }
 }

 const mapDispatchToProps = dispatch =>{
    return{
        getSubjects: token => dispatch(actions.getSubjects(token))
    }
  }

 export default connect(mapStateToProps, mapDispatchToProps)(Classes)