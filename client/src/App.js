import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom'

import Navbar from './containers/Navbar'
import Main from './routes/Main'
import Footer from './containers/Footer'



import './App.css'

class App extends Component{

  render(){
    //console.log(this.state.todos)
    return (
      <BrowserRouter>
        <Navbar />
        <Main />
        <Footer />
      </BrowserRouter>
    )
  }
}

export default App;
