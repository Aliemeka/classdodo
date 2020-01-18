import React, { Fragment } from 'react'

import Navbar from './Navbar'
import Main from '../routes/Main'
import Footer from './Footer'


const Layout = ({ isAuthenticated, first_name, last_name }) =>{
    return (
        <Fragment>
          <Navbar isAuthenticated={isAuthenticated}
                first_name={first_name} last_name={last_name} />
          <Main />
          <Footer />
        </Fragment>
    )
}



export default Layout