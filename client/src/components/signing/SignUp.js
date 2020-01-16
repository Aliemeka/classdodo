import React, { Component } from 'react'
import{ Link } from 'react-router-dom'

class SignUp extends Component{
   handleSignUp = e =>{
      e.preventDefault()
      const firstname = e.target.elements.firstname.value
      const lastname = e.target.elements.lastname.value
      const email = e.target.elements.email.value
      const username = e.target.elements.username.value
      const password1 = e.target.elements.password1.value
      const password2 = e.target.elements.password2.value

      console.log(firstname, lastname, email, username, password1, password2)

      setTimeout(() => {
         this.props.history.push('/');
      }, 500);
   }
   render(){
      return(
          <main className="main-area pt-5 pb-5">
          <h1 className="text-center">Sign-Up</h1>
          <section className="form-area container bg-light">
              
              <div className="form-selector d-flex justify-content-center">
                 <div className="btn-group">
                    <a href="#teacher-sign-up" className="active"><button className="btn btn-sm menu-btn p-1" type="menu">Sign-Up as Teacher</button></a>
                    <a href="#student-sign-up"><button className="btn btn-sm menu-btn p-1" type="menu">Sign-Up as Student</button></a>
                 </div>
              </div>
              
              <form className="form-area-inner mt-4 pt-5" onSubmit={this.handleSignUp}>
                  
                  <div className="form-horizontal p-3"> 
                      
                      <div className="form-group row"> 
                          <label htmlFor="firstname" className="col-sm-2 control-label">First Name</label> 
                          <div className="col-sm-10"> 
                             <input type="text" className="form-control" name="firstname" placeholder="Enter First Name"/> 
                          </div> 
                      </div> 
                      
                      <div className="form-group row"> 
                         <label htmlFor="lastname" className="col-sm-2 control-label">Last Name</label> 
                         <div className="col-sm-10"> 
                            <input type="text" className="form-control" name="lastname"  
                               placeholder="Enter Last Name"/> 
                         </div> 
                      </div> 
                      
                      <div className="form-group row"> 
                         <label htmlFor="email" className="col-sm-2 control-label">Email*</label> 
                         <div className="col-sm-10"> 
                            <input type="email" className="form-control" name="email"  
                               placeholder="Enter a valid email" required/> 
                         </div> 
                      </div>
                       
                      <div className="form-group row"> 
                         <label htmlFor="username" className="col-sm-2 control-label">Username*</label> 
                         <div className="col-sm-10"> 
                            <input type="username" className="form-control" name="username"  
                               placeholder="Enter a valid username" required/>
                         </div> 
                      </div>
                      
                      <div className="form-group row"> 
                         <label htmlFor="password1" className="col-sm-2 control-label">Password*</label> 
                         <div className="col-sm-10"> 
                            <input type="password" className="form-control" name="password1"  
                               placeholder="Enter a strong password" required/> 
                         </div> 
                      </div> 
                      
                      <div className="form-group row"> 
                         <label htmlFor="password2" className="col-sm-2 control-label">Confirm Password*</label> 
                         <div className="col-sm-10"> 
                            <input type="password" className="form-control" name="password2"  
                               placeholder="Confirm Password"/> 
                         </div> 
                      </div> 
                      <div className="form-group row">   
                          <div className="checkbox"> 
                             <label> 
                                <input type="checkbox"/> Remember me 
                             </label> 
                          </div> 
                      </div> 
                      <div className="form-group"> 
                         <div className="col-sm-offset-2 col-sm-10"> 
                            <button type="submit" className="btn btn-dark">Sign up</button> 
                         </div> 
                      </div>
                      <p>Already have an account? <Link to="/log-in" className="link">Log in</Link></p>  
                 </div>  
              </form>
          </section>
        </main>
      )
   }
    
}

export default SignUp