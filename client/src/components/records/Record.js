import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class Record extends Component {
    
    render() {
        const { record } = this.props
        return (
            <div class="col-sm-4 col-lg-3">
                <div class="card p-3 mb-1 mt-2">
                    <div class="card-image-container">
                        <img src="images/icon.png" alt="" class="img-fluid"/>
                    </div>
                    <h3 class="card-title text-center">{record.student}'s Record</h3>
                    <Link to={`records/${record.id}`} class="text-center"><button class="btn btn-sm btn-dark">View Results</button></Link>
                </div>
            </div>
        )
    }
}

export default Record
