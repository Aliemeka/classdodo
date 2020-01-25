import React, { Component } from 'react'
import axios from 'axios'
import { connect } from 'react-redux'

import RecordList from './RecordList'
import * as actions from '../../store/actions/records'
import * as userActions from '../../store/actions/users'

import Loader from '../../containers/Loader'


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
        token: state.auth.token,
        loading: state.records.loading,
        records: state.records.records,
        teachers: state.users.teachers
    }
 }

 const mapDispatchToProps = dispatch =>{
    return{
        getRecords: token => dispatch(actions.getRecords(token)),
        getStudents: token => dispatch(userActions.getTeachers(token))
    }
  }
 export default connect(mapStateToProps, mapDispatchToProps)(Records)