import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import Icon from '../../images/icon.png'

export class Record extends Component {
    
    render() {
        const { record } = this.props
        return (
            <div className="col-sm-4 col-lg-3">
                <div className="card p-3 mb-1 mt-2">
                    <div className="card-image-container">
                        <img src={Icon} alt="" className="img-fluid"/>
                    </div>
                    <h3 className="card-title text-center">{record.student}'s Record</h3>
                    <Link to={`profile/${record.id}/results`} className="text-center"><button className="btn btn-sm btn-dark">View Results</button></Link>
                </div>
            </div>
        )
    }
}

export default Record
