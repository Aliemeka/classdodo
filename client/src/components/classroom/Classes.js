import React, { Component } from 'react'
import axios from 'axios'
import { connect } from 'react-redux'

import Subjects from './Subjects'

class Classes extends Component{
    state = {
        subjects: []
    }
    componentDidMount(){
        axios.get('http://127.0.0.1:8000/classroom/').then(
            res =>{
                this.setState({ subjects : res.data })
            }
        )
    }
    render(){
        const { subjects } = this.state
        return (
            <main className="main-area pt-5 pb-2">
            <h1 className="text-center">Your Dashboard</h1>
            <section className="courses-area container full-width mt-4 mb-4">
                {
                    this.props.loading ?
                        <div className="d-flex justify-content-center p-4">
                            <div className="spinner-grow text-secondary">
                                <span className="sr-only">Loading...</span>
                            </div>
                            <div className="spinner-grow text-secondary">
                                <span className="sr-only">Loading...</span>
                            </div>
                            <div className="spinner-grow text-secondary">
                                <span className="sr-only">Loading...</span>
                            </div>
                        </div>
                    :
                        <Subjects subjects ={subjects}/>
                }
            </section>
        </main>
        )
    }
}

const mapStateToProps = state =>{
    return{
       loading: state.loading,
       error: state.error
    }
 }

 export default connect(mapStateToProps)(Classes)