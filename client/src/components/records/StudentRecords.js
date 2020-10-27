import React, { PureComponent, Fragment } from 'react'
import { connect } from 'react-redux'

import Record from './Record'
import * as actions from '../../store/actions/records'
import * as userActions from '../../store/actions/users'

import Loader from '../../containers/Loader'


class StudentRecords extends PureComponent {
    componentDidMount(){
        if(this.props.token !== null && this.props.token !== undefined){
            this.props.getRecords(this.props.token)
            this.props.getStudents(this.props.token)
        }
    }
    
    UNSAFE_componentWillUpdate(newProps){
        if(newProps.token !== this.props.token){
            if(newProps.token !== null && newProps.token !== undefined){
                this.props.getRecords(newProps.token) 
                this.props.getStudents(newProps.token) 
            } 
        }
    }

    render() {
        return (
        <main className="main-area pt-5 pb-5">
            <h1 className="text-center">All Records</h1>
            {
                this.props.loading ?
                <Loader />
                :
                <section className="records-section container mt-4 mb-4 bg-light pt-4 pb-4">
                    <div className="row justify-content-center p-2 pr-3 pl-3">
                     { this.props.records.length ?
                        <Fragment>
                            {this.props.records.map((record, id) =><Record key={id} record={record} />) }
                         </Fragment> : <h3 className='text-muted'>No records yet</h3>
                     }
                    </div>
                </section>
            }
        </main>
        )
    }
}

const mapStateToProps = state =>{
    return{
        token: state.auth.token,
        loading: state.records.loading,
        records: state.records.records,
        isStudent: state.auth.is_student,
        students: state.users.students
    }
 }

 const mapDispatchToProps = dispatch =>{
    return{
        getRecords: token => dispatch(actions.getRecords(token)),
        getStudents: token => dispatch(userActions.getStudents(token))
    }
  }

 export default connect(mapStateToProps, mapDispatchToProps)(StudentRecords)