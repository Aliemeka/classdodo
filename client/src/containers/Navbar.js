import React, { Fragment } from 'react'
import { NavLink } from 'react-router-dom'


const Navbar = (props) =>{
    return (
        <nav className="navbar container-fluid bg-dark">
            <ul className="nav-links-center">
                <li className="navlink"><NavLink to="/">Classroom</NavLink></li>
                {
                    props.isAuthenticated ? 
                        <li className="navlink"><NavLink to="/records">Record</NavLink></li> 
                        :
                        <li className="navlink"><NavLink to="/about">About</NavLink></li> 
                }    
            </ul>
            <ul className="nav-links-right">
            {
                props.isAuthenticated ? 
                    <li><NavLink to="/log-out">Log out</NavLink></li>
                    :
                    <Fragment>
                        <li><NavLink to="/sign-up">Sign-Up</NavLink></li>
                        <li><NavLink to="/log-in">Log-In</NavLink></li>
                    </Fragment>
            }
                
            </ul>
        </nav>
    )
}

export default Navbar