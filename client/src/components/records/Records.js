import React, { Component } from 'react'
import axios from 'axios'
import { connect } from 'react-redux'

import RecordList from './RecordList'

class Records extends Component {
    state = {
        records: []
    }
    componentDidMount(){
        axios.get('http://127.0.0.1:8000/records/').then(
            res =>{
                this.setState({ records : res.data })
            }
        )
    }
    render() {
        return (
            <main className="main-area pt-5 pb-5">
            <h1 className="text-center">All Records</h1>
            <section className="records-section container bg-light pt-4 pb-4">
                <div className="row justify-content-center p-2 pr-3 pl-3">
                    <RecordList records={this.state.records} />
                </div>
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

 export default connect(mapStateToProps)(Records)