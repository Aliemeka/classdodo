import React, { Component, Fragment } from 'react';
import Navbar from './containers/Navbar'

import './App.css'

class App extends Component{

  render(){
    //console.log(this.state.todos)
    return (
      <Fragment>
        <Navbar />
      </Fragment>
    )
  }
}

export default App;
