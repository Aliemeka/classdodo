import React, { Component, Fragment } from 'react'
import { NavLink, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

import * as actions from '../store/actions/auth'

class Navbar extends Component{
    render(){
        return (
            <nav className="navbar container-fluid bg-dark">
                <ul className="nav-links-center">
                    <li className="navlink"><NavLink to="/">Classroom</NavLink></li>
                    {
                        this.props.isAuthenticated ? 
                            <li className="navlink"><NavLink to="/records">Record</NavLink></li> 
                            :
                            <li className="navlink"><NavLink to="/about">About</NavLink></li> 
                    }    
                </ul>
                <ul className="nav-links-right">
                {
                    this.props.isAuthenticated ? (
                        <li><span className="inner-nav-link" onClick={this.props.logout}>Log out</span>"</li>
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