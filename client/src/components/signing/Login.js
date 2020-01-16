import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Login extends Component{
   handleLogin = e =>{
      e.preventDefault()
      const email = e.target.elements.email.value
      const password = e.target.elements.password.value

      console.log(email, password)
      setTimeout(() => {
         this.props.history.push('/');
      }, 500);
   }
   render() {
      return(
          <main className="main-area pt-5 pb-5">
              <h1 className="text-center">Log-In</h1>
              <section className="form-area container bg-light">
                  <div className="form-selector pt-4"></div>
                  <form className="form-area-inner mt-4 pt-5" onSubmit={this.handleLogin}>
                      <div className="form-horizontal p-3"> 
                      
                          <div className="form-group row"> 
                             <label htmlFor="email" className="col-sm-2 control-label">Email*</label> 
                             <div className="col-sm-10"> 
                                <input type="email" className="form-control" name="email"  
                                   placeholder="Enter your email" required /> 
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

export default Login