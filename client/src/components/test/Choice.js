import React, { Component, Fragment } from 'react'

class Choice extends Component {
    render() {
        return (
            <Fragment>
                <div className="form-container mb-2">
                    <div className="radio"> 
                        <label> 
                            <input type="radio" name="optionsRadios" id="optionsRadios1" value="option1" /> Option 1 </label> 
                    </div> 
                    <div className="radio"> 
                    <label> 
                        <input type="radio" name="optionsRadios" id="optionsRadios2"  
                            value="option2" /> 
                            Option 2
                    </label> 
                    </div>
                    <div className="radio"> 
                    <label> 
                        <input type="radio" name="optionsRadios" id="optionsRadios2"  
                            value="option2" /> 
                            Option 3
                    </label> 
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default Choice
