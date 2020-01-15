import React from 'react'
import { Link } from 'react-router-dom'

const Login = () =>{
    return(
        <main className="main-area pt-5 pb-5">
            <h1 className="text-center">Log-In</h1>
            <section className="form-area container bg-light">
                <div className="form-selector pt-4"></div>
                <form className="form-area-inner mt-4 pt-5">
                    <div className="form-horizontal p-3"> 
                    
                        <div className="form-group row"> 
                           <label htmlFor="email" className="col-sm-2 control-label">Email*</label> 
                           <div className="col-sm-10"> 
                              <input type="email" className="form-control" id="lastname"  
                                 placeholder="Enter your email" required /> 
                           </div> 
                        </div>
                        <div className="form-group row"> 
                           <label htmlFor="password1" className="col-sm-2 control-label">Password*</label> 
                           <div className="col-sm-10"> 
                              <input type="password" className="form-control" id="password"  
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

export default Login