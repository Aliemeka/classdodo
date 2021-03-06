import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

export class Subject extends Component {

    render() {
        const { subject} = this.props
        return (
            <Fragment>
                <div className="col-sm-6 col-md-4 col-lg-3 p-1 mb-2">  
                    <div className="card text-center d-flex">
                        <h2>{ subject.subject_name }</h2>
                        <p>
                            <Link to={`/${subject.id}`}>
                                <button className="btn btn-md btn-dark">Start</button>
                            </Link>
                        </p>
                        <div className="d-flex subject-foot align-items-center">
                            <p className="text-muted">By { 
                                this.props.loading ?
                                    <Fragment>...</Fragment> :
                             <Fragment>{subject.teacher}</Fragment>}</p>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}

const mapStateToProps = state =>{
    return{
        loading: state.users.loading
    }
 }

export default connect(mapStateToProps)(Subject)
