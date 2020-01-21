import React, { Component, Fragment } from 'react'

class Choice extends Component {
    render() {
        const { option } = this.props
        return (
            <Fragment>
                <div className="radio"> 
                    <label> 
                        <input type="radio" name="optionsRadios" id="optionsRadios1" value="option1" />  {option}</label> 
                </div> 
            </Fragment>
        )
    }
}

export default Choice
