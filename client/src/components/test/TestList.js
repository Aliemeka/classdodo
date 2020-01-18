import React, { Component, Fragment } from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'

import axios from 'axios'

export class TestList extends Component {
    state = {
        subject: {}
    }
    componentWillReceiveProps(newProps){
        if(newProps){
            let id = newProps.match.params.subject_id
            axios.default.headers = {
                'Content-Type': 'application/json',
                Authorization: newProps.token 
            }
            axios.get(`http://127.0.0.1:8000/classroom/${id}/`).then(res=>{
                    console.log(res)
                    this.setState({ subject: res.data })
                }
            )
        }
    }

    render() {
        const  subject = this.state.subject ? (
            <Fragment>
                <ol className="breadcrumb">
                    <li><NavLink to="/">Dashboard</NavLink></li>
                    <li><NavLink to={`${this.state.subject.id}`} className="active">{this.state.subject.subject_name}</NavLink></li>
                </ol>
                <main className="main-area pt-3 pb-2">
                    <h1 className="text-center">{this.state.subject.subject_name}</h1>
                    <section className="courses-area container full-width mt-4 mb-4">
                        <div className="row justify-content-center">

                            <div className="col-sm-6 col-md-4 col-lg-3 p-1 mb-2">  
                                <div className="card text-center d-flex">
                                    <div className="bam pt-4"></div>
                                    <h2>Shapes</h2>
                                    <p><button className="btn btn-md btn-dark">Attempt</button></p>
                                </div>
                            </div>
                            
                        </div>
                    </section>
                </main>
            </Fragment>
            ) : (
                <Fragment>
                    <ol className="breadcrumb">
                        <li><NavLink to="/"><i className="icon-arrow-left"></i>Go back to Dashboard</NavLink></li>
                    </ol>
                    <main className="main-area pt-3 pb-2">
                        <section className="courses-area container full-width mt-4 mb-4">
                            <h1>No such subject</h1>
                        </section>
                    </main>  
                </Fragment>
            )
        return <Fragment>{subject}</Fragment>
    }
}

const mapStateToProps = state =>{
    return{
        token: state.token,
        loading: state.loading,
        error: state.error
    }
 }

 export default connect(mapStateToProps)(TestList)
