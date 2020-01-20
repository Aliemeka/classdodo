import React, { Component } from 'react'
import{ Link } from 'react-router-dom'
import { connect } from 'react-redux'

import * as actions from '../../store/actions/auth'

class SignUp extends Component{
   state ={
      isStudent: false,
   }

   handleIsTeacher = () =>{
      this.setState({ isStudent : false });
   }

   handleIsStudent = () =>{
      this.setState({ isStudent : true });
   }

   handleSignUp = e =>{
      e.preventDefault()
      const firstname = e.target.elements.firstname.value
      const lastname = e.target.elements.lastname.value
      const email = e.target.elements.email.value
      const username = e.target.elements.username.value
      const password1 = e.target.elements.password1.value
      const password2 = e.target.elements.password2.value
      const is_student = this.state.isStudent
      const is_teacher = !is_student

      this.props.onAuth(firstname, lastname, username, email, password1, password2, is_student, is_teacher)
      console.log(is_student, is_teacher)

      setTimeout(() => {
         this.props.history.push('/');
      }, 500);
   }
   render(){
      let toggleStudentButtonClass = '', toggleTeacherButttonClass = ''
      let topHeading = 'Sign up as either a teacher or student'
      if(this.state.isStudent){
         toggleStudentButtonClass = 'active'
         topHeading = 'Set up student account'
      }else{
         toggleTeacherButttonClass = 'active'
         topHeading = 'Set up teacher account'
      }
      let errorMessage = null;
      if(this.props.error){
         errorMessage =(
            <p className="pt-1 pb-1 pl-4 pr-2 bg-danger text-light">{this.props.error.message}</p>
         )
      }
      return(
          <main className="main-area pt-5 pb-5">
          {errorMessage}
          <h1 className="text-center">Sign-Up</h1>
          <section className="form-area container bg-light">
              
              <div className="form-selector d-flex justify-content-center">
                 <div className="btn-group">
                    <button className={`btn btn-sm menu-btn p-2 ${toggleTeacherButttonClass}`} 
                           type="menu" onClick={this.handleIsTeacher}>Sign-Up as Teacher</button>
                    <button className={`btn btn-sm menu-btn p-2 ${toggleStudentButtonClass}`} 
                           type="menu" onClick={this.handleIsStudent}>Sign-Up as Student</button>
                 </div>
              </div>
              
              <form className="form-area-inner mt-4 pt-5" onSubmit={this.handleSignUp}>
                  <h4 className="text-center">{topHeading}</h4>
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
                               placeholder="Confirm your password"/> 
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

const mapStateToProps = state =>{
   return{
      error: state.auth.error
   }
}

const mapDispatchToProps = dispatch =>{
   return {
      onAuth: (firstname, lastname, username, email, password1, password2, is_student, is_teacher) => dispatch(actions.authSignUp(firstname, lastname, username, email, password1, password2, is_student, is_teacher))
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp)