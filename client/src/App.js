import React, { Component, Fragment } from 'react';
import { BrowserRouter } from 'react-router-dom'
import { connect } from 'react-redux'

import Navbar from './containers/Navbar'
import Main from './routes/Main'
import Footer from './containers/Footer'



import './App.css'

class App extends Component{

  render(){
    //console.log(this.state.todos)
    return (
      <BrowserRouter>
        <Fragment {...this.props}>
          <Navbar />
          <Main />
          <Footer />
        </Fragment>
      </BrowserRouter>
    )
  }

}


const mapStateToProps = state =>{
  return{
    isAuthenticated: state.token !== null
  }
}

export default connect(mapStateToProps)(App);
