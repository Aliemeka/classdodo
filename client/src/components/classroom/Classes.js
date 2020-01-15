import React, { Component } from 'react'
import axios from 'axios'

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
                <Subjects subjects ={subjects}/>
            </section>
        </main>
        )
    }
}

export default Classes