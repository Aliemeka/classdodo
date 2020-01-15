import React from 'react'

const SignUp = () =>{
    return(
        <main class="main-area pt-5 pb-5">
        <h1 class="text-center">Sign-Up</h1>
        <section class="form-area container bg-light">
            
            <div class="form-selector d-flex justify-content-center">
               <div class="btn-group">
                  <a href="#teacher-sign-up" class="active"><button class="btn btn-sm menu-btn p-1" type="menu">Sign-Up as Teacher</button></a>
                  <a href="#student-sign-up"><button class="btn btn-sm menu-btn p-1" type="menu">Sign-Up as Student</button></a>
               </div>
            </div>
            
            <form class="form-area-inner mt-4 pt-5">
                
                <div class="form-horizontal p-3"> 
                    
                    <div class="form-group row"> 
                        <label for="firstname" class="col-sm-2 control-label">First Name</label> 
                        <div class="col-sm-10"> 
                           <input type="text" class="form-control" id="firstname" placeholder="Enter First Name"/> 
                        </div> 
                    </div> 
                    
                    <div class="form-group row"> 
                       <label for="lastname" class="col-sm-2 control-label">Last Name</label> 
                       <div class="col-sm-10"> 
                          <input type="text" class="form-control" id="lastname"  
                             placeholder="Enter Last Name"/> 
                       </div> 
                    </div> 
                    
                    <div class="form-group row"> 
                       <label for="email" class="col-sm-2 control-label">Email*</label> 
                       <div class="col-sm-10"> 
                          <input type="email" class="form-control" id="lastname"  
                             placeholder="Enter a valid email" required/> 
                       </div> 
                    </div>
                     
                    <div class="form-group row"> 
                       <label for="email" class="col-sm-2 control-label">Email*</label> 
                       <div class="col-sm-10"> 
                          <input type="email" class="form-control" id="lastname"  
                             placeholder="Enter a valid email" required/>
                       </div> 
                    </div>
                    
                    <div class="form-group row"> 
                       <label for="password1" class="col-sm-2 control-label">Password*</label> 
                       <div class="col-sm-10"> 
                          <input type="password" class="form-control" id="password1"  
                             placeholder="Enter a strong password" required/> 
                       </div> 
                    </div> 
                    
                    <div class="form-group row"> 
                       <label for="password2" class="col-sm-2 control-label">Confirm Password*</label> 
                       <div class="col-sm-10"> 
                          <input type="password" class="form-control" id="password2"  
                             placeholder="Confirm Password"/> 
                       </div> 
                    </div> 
                    <div class="form-group row">   
                        <div class="checkbox"> 
                           <label> 
                              <input type="checkbox"/> Remember me 
                           </label> 
                        </div> 
                    </div> 
                    <div class="form-group"> 
                       <div class="col-sm-offset-2 col-sm-10"> 
                          <button type="submit" class="btn btn-dark">Sign up</button> 
                       </div> 
                    </div> 
               </div>  
            </form>
        </section>
    </main>
    )
    
}

export default SignUp