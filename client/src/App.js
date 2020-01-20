import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom'
import { connect } from 'react-redux'

import * as actions from './store/actions/auth'

import Layout from './containers/Layout'

import './App.css'

class App extends Component{
  componentDidMount(){
    this.props.onTryAutoSignup()
  }

  render(){
    //console.log(this.state.todos)
    return (
      <BrowserRouter>
        <Layout {...this.props}/>
      </BrowserRouter>
    )
  }

}


const mapStateToProps = state =>{
  return{
    isAuthenticated: state.auth.token !== null,
    first_name: state.auth.first_name,
    last_name: state.auth.last_name,
  }
}


const mapDispatchToProps = dispatch =>{
  return{
    onTryAutoSignup: () => dispatch(actions.authCheckState())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
