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
        return (
            <nav className="navbar container-fluid bg-dark">
                <ul className="nav-links-center">
                    <li className="navlink"><NavLink to="/">Classroom</NavLink></li>
                    {
                        this.props.isAuthenticated ? 
                        <Fragment>
                            <li className="navlink"><NavLink to="/records">Record</NavLink></li>
                            <Fragment>
                                {
                                    this.props.is_teacher ?
                                    <li className="navlink"><NavLink to="/records"><i className="icon-plus"></i> Add Subject</NavLink></li> : null
                                }
                            </Fragment>
                        </Fragment>
                            :
                            <li className="navlink"><NavLink to="/about">About</NavLink></li> 
                    }    
                </ul>
                <ul className="nav-links-right">
                {
                    this.props.isAuthenticated ? (
                        <Fragment>
                            <li><span className="inner-nav-link">{`Welcome ${this.props.first_name} ${this.props.last_name}`}</span></li>
                            <li><span className="inner-nav-link" onClick={this.handleLogOut}>Log out</span></li>
                        </Fragment>
                    )
                    : (
                        <Fragment>
                            <li><NavLink to="/sign-up">Sign-Up</NavLink></li>
                            <li><NavLink to="/log-in">Log-In</NavLink></li>
                        </Fragment>
                    )
                }
                    
                </ul>
            </nav>
        )
    }
}

 
 const mapDispatchToProps = dispatch =>{
    return {
       logout: () => dispatch(actions.logout())
    }
 }
 
 export default withRouter(connect(null, mapDispatchToProps)(Navbar))