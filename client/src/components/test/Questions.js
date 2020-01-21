import React, { Component } from 'react'
import Choice from './Choice'

export class Questions extends Component {
    render() {
        return (
            <div className="card d-flex pb-2">
                <div className="bam pt-4"></div>
                <h3 className="text-center mt-4">How many sides does a dacagon have?</h3>
                <hr/>
                <Choice />    
            </div>
        )
    }
}

export default Questions
