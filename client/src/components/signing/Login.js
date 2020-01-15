import React from 'react'
import { Link } from 'react-router-dom'

const Login = () =>{
    return(
        <main class="main-area pt-5 pb-5">
            <h1 class="text-center">Log-In</h1>
            <section class="form-area container bg-light">
                <div class="form-selector pt-4"></div>
                <form class="form-area-inner mt-4 pt-5">
                    <div class="form-horizontal p-3"> 
                    
                        <div class="form-group row"> 
                           <label for="email" class="col-sm-2 control-label">Email*</label> 
                           <div class="col-sm-10"> 
                              <input type="email" class="form-control" id="lastname"  
                                 placeholder="Enter your email" required /> 
                           </div> 
                        </div>
                        <div class="form-group row"> 
                           <label for="password1" class="col-sm-2 control-label">Password*</label> 
                           <div class="col-sm-10"> 
                              <input type="password" class="form-control" id="password"  
                                 placeholder="Enter your password" required/> 
                           </div> 
                        </div> 
                        <div class="form-group row"> 
                            <div class="checkbox"> 
                               <label> 
                                  <input type="checkbox"/> Remember me 
                               </label> 
                            </div> 
                        </div> 
                        <p><Link to="/about" class="link">Forgot password?</Link></p>
                        <div class="form-group"> 
                           <div class="col-sm-offset-2 col-sm-10"> 
                              <button type="submit" class="btn btn-dark">Sign In</button> 
                           </div> 
                        </div>
                        <p>Don't have an account? <Link to="/sign-up" class="link">Sign up</Link></p> 
                    </div>  
                </form>
            </section>
        </main>
    )
}

export default Login