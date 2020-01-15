import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom'

import Navbar from './containers/Navbar'
import Main from './routes/Main'
import TestRoutes from './routes/TestRoutes'
import Footer from './containers/Footer'



import './App.css'

class App extends Component{

  render(){
    //console.log(this.state.todos)
    return (
      <BrowserRouter>
        <Navbar />
        <Main />
        <TestRoutes />
        <Footer />
      </BrowserRouter>
    )
  }
}

export default App;
