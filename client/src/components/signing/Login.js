import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import * as actions from '../../store/actions/auth'

class Login extends Component{
   handleLogin = e =>{
      e.preventDefault()
      const username = e.target.elements.username.value
      const password = e.target.elements.password.value

      if(username!==" " || password !== " "){
         this.props.onAuth(username, password)
         
      }setTimeout(() => {
            this.props.history.push('/');
         }, 500);
   }

   render() {
      let errorMessage = null;
      if(this.props.error){
         errorMessage =(
            <p className="pt-1 pb-1 pl-4 pr-2 bg-danger text-light">{this.props.error.message}</p>
         )
      }
      return(
          <main className="main-area pt-5 pb-5">
               { errorMessage }
              <h1 className="text-center">Log-In</h1>
              <section className="form-area container bg-light">
                  <div className="form-selector pt-4"/>
                  <form className="form-area-inner mt-4 pt-5" onSubmit={this.handleLogin}>
                      <div className="form-horizontal p-3"> 
                          <div className="form-group row"> 
                             <label htmlFor="username" className="col-sm-2 control-label">Username*</label> 
                             <div className="col-sm-10"> 
                                <input type="username" className="form-control" name="username"  
                                   placeholder="Enter your username" required /> 
                             </div> 
                          </div>
                          <div className="form-group row"> 
                             <label htmlFor="password1" className="col-sm-2 control-label">Password*</label> 
                             <div className="col-sm-10"> 
                                <input type="password" className="form-control" name="password"  
                                   placeholder="Enter your password" required/> 
                             </div> 
                          </div> 
                          <div className="form-group row"> 
                              <div className="checkbox"> 
                                 <label> 
                                    <input type="checkbox"/> Remember me 
                                 </label> 
                              </div> 
                          </div> 
                          <p><Link to="/about" className="link">Forgot password?</Link></p>
                          <div className="form-group"> 
                             <div className="col-sm-offset-2 col-sm-10"> 
                                <button type="submit" className="btn btn-dark">Sign In</button> 
                             </div> 
                          </div>
                          <p>Don't have an account? <Link to="/sign-up" className="link">Sign up</Link></p> 
                      </div>  
                  </form>
              </section>
          </main>
      )
   }
}

const mapStateToProps = state =>{
   return{
      loading: state.auth.loading,
      error: state.auth.error
   }
}

const mapDispatchToProps = dispatch =>{
   return {
      onAuth: (username, password) => dispatch(actions.authLogin(username, password))
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)