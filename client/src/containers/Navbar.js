import React from 'react'
import { NavLink } from 'react-router-dom'


const Navbar = () =>{
    return (
        <nav className="navbar container-fluid bg-dark">
            <ul className="nav-links-center">
                <li className="navlink"><NavLink to="/">Classroom</NavLink></li>  
                <li className="navlink"><NavLink to="/records">Record</NavLink></li>  
                <li className="navlink"><NavLink to="/about">About</NavLink></li>  
            </ul>
            <ul className="nav-links-right">
                <li><NavLink to="/sign-up">Sign-Up</NavLink></li>
                <li><NavLink to="/log-in">Log-In</NavLink></li>
            </ul>
        </nav>
    )
}

export default Navbar