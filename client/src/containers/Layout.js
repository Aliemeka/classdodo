import React, { Fragment } from 'react'

import Navbar from './Navbar'
import Main from '../routes/Main'
import Footer from './Footer'


const Layout = ({ isAuthenticated }) =>{
    return (
        <Fragment>
          <Navbar isAuthenticated={isAuthenticated}/>
          <Main />
          <Footer />
        </Fragment>
    )
}



export default Layout