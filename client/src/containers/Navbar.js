import React, { Component, Fragment } from 'react'
import { NavLink, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

import * as actions from '../store/actions/auth'

class Navbar extends Component{
    handleLogOut = ()=>{
        this.props.logout()
        setTimeout(() => {
            this.props.history.push('/');
         }, 300);
    }
    render(){
        const icon = <i className='icon-face'></i>
        const record = this.props.record
        return (
            <nav className="navbar container-fluid bg-dark">
                <ul className="nav-links-center">
                    <li className="navlink"><NavLink to="/"><i className="icon-dashboard"></i> Classroom</NavLink></li>
                    {
                        this.props.isAuthenticated ? 
                        <Fragment>
                            {
                                this.props.is_teacher ?
                                <Fragment>
                                <li className="navlink"><NavLink to="/records"><i className="icon-group"></i>Records</NavLink></li>
                                <li className="navlink"><NavLink to="/add-subject"><i className="icon-plus"></i> Add Subject</NavLink></li> 
                                </Fragment>
                                : this.props.is_student ?
                                <li className="navlink"><NavLink to={`/profile/${record}/results`}><i className="icon-person"></i> Profile</NavLink></li>
                                : null
                            }
                        </Fragment>
                            :
                            <li className="navlink"><NavLink to="/about">About</NavLink></li> 
                    }    
                </ul>
                <ul className="nav-links-right">
                {
                    this.props.isAuthenticated ? (
                        <Fragment>
                            <li><span className="inner-nav-link">{icon} {`Welcome ${this.props.first_name} ${this.props.last_name}`}</span></li>
                            <li><span className="inner-nav-link" onClick={this.handleLogOut}>Log out <i className='icon-sign-out'></i></span></li>
                        </Fragment>
                    )
                    : (
                        <Fragment>
                            <li><NavLink to="/sign-up">Sign-Up</NavLink></li>
                            <li><NavLink to="/log-in">Log-In <i className='icon-sign-in'></i></NavLink></li>
                        </Fragment>
                    )
                }
                    
                </ul>
            </nav>
        )
    }
}


const mapStateToProps = state =>{
  return{
    is_student: state.auth.is_student,
    record: state.auth.record
  }
}
  
 
 const mapDispatchToProps = dispatch =>{
    return {
       logout: () => dispatch(actions.logout())
    }
 }
 
 export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Navbar))