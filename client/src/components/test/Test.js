import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom'

export class Test extends Component {
    render() {
        const { test, subId } = this.props
        return (
            <Fragment>
                <div className="col-sm-6 col-md-4 col-lg-3 p-1 mb-2">  
                    <div className="card text-center d-flex">
                        <div className="bam pt-4"></div>
                        <h2>{test.test_title}</h2>
                        <Link to={`/${subId}/test/${test.order}`}><button className="btn btn-md btn-dark">Attempt</button></Link>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default Test
