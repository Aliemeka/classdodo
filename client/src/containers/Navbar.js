import React from 'react'


const Navbar = () =>{
    return (
        <nav class="navbar container-fluid bg-dark">
            <ul class="nav-links-center">
                <li class="navlink"><a href="index.html">Classroom</a></li>  
                <li class="navlink"><a href="record.html">Record</a></li>  
                <li class="navlink"><a href="about.html">About</a></li>  
            </ul>
            <ul class="nav-links-right">
                <li><a href="sign-up.html">Sign-Up</a></li>
                <li><a href="log-in.html">Log-In</a></li>
            </ul>
        </nav>
    )
}

export default Navbar