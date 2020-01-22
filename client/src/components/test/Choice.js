import React, { Component, Fragment } from 'react'

class Choice extends Component {
    render() {
        const { option, qId, change, value } = this.props
        return (
            <Fragment>
                <div className="radio" > 
                    <label>{
                        value===option ?
                        <input type="radio" name='options' 
                            value={value} 
                            onChange={(e, q=qId)=>change(e, q)} checked/> :
                        <input type="radio" name='options'
                            value={option}
                            onChange={(e, q=qId)=>change(e, q)}/>
                    } 
                    {'  '}{option}</label>
                </div> 
            </Fragment>
        )
    }
}

export default Choice
