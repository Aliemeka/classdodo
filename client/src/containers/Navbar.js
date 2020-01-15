import React from 'react'
import { NavLink } from 'react-router-dom'


const Navbar = () =>{
    return (
        <nav class="navbar container-fluid bg-dark">
            <ul class="nav-links-center">
                <li class="navlink"><NavLink to="/">Classroom</NavLink></li>  
                <li class="navlink"><NavLink to="/records">Record</NavLink></li>  
                <li class="navlink"><NavLink to="/about">About</NavLink></li>  
            </ul>
            <ul class="nav-links-right">
                <li><NavLink to="/sign-up">Sign-Up</NavLink></li>
                <li><NavLink to="/log-in">Log-In</NavLink></li>
            </ul>
        </nav>
    )
}

export default Navbar