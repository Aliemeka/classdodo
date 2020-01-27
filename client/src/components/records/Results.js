import React, { PureComponent, Fragment } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import * as actions from '../../store/actions/records'
import * as userActions from '../../store/actions/users'

import Loader from '../../containers/Loader'

export class Results extends PureComponent {
    componentDidMount(){
        const recordId = this.props.match.params.record_id
        if(this.props.token !== null && this.props.token !== undefined){
            this.props.getResults(this.props.token, recordId)
            this.props.getRecords(this.props.token)
            this.props.getStudents(this.props.token)
        }
    }
    
    UNSAFE_componentWillUpdate(newProps){
        const recordId = this.props.match.params.record_id
        if(newProps.token !== this.props.token){
            if(newProps.token !== null && newProps.token !== undefined){
                this.props.getRecords(newProps.token) 
                this.props.getStudents(newProps.token) 
                this.props.getResults(newProps.token, recordId) 
            } 
        }
    }

    getExactStudent = () =>{
        const recordId = this.props.match.params.record_id
        if(this.props.students !== null && this.props.students !== undefined){
            if(this.props.students.length>0){
                const students = this.props.students.filter(student => student.record === parseInt(recordId))
                const student = students[0].first_name + ' ' + students[0].last_name
                return student
            }
        }
        return '...'
    }

    render() {
        const student = this.getExactStudent()
        return (
            <main className="main-area pt-5 pb-5">
                {
                    this.props.loading ?
                    <Loader /> 
                    :
                    <Fragment>
                        <h1 className="text-center">{student}</h1>
                        <section className="records-section container bg-light pt-4 pb-4">
                            <div className="row justify-content-center p-2">
                            {
                                this.props.results !== undefined && this.props.results.length ?
                                <Fragment>
                                {
                                    this.props.results.map(result =>(
                                        <div className="col-sm-6 col-md-4 col-lg-3 mb-2" key={result.id}>
                                            <div className="card result-card d-flex justify-content-center align-items-center p-3">
                                                <h3 className="mt-2 mb-3 text-center">{result.subject}</h3>
                                                <p className="text-bold mb-1">Aggregate:</p>
                                                <h1 className="result-heading text-success">{result.average_score}%</h1>
                                                <p className="mt-1">Success Rate: <span className="text-bold">{result.success_rate}</span></p>
                                                <Link to={`/profile/${result.record}/results/${result.id}`}><button className="btn btn-md btn-dark mb-1"><i className="icon-view"></i>View Tests</button></Link>
                                            </div>
                                        </div>
                                    ))
                                }
                                </Fragment>
                                : <h3 className="text-muted text-center">No results yet</h3>
                            }
                            </div>
                        </section>
                    </Fragment>
                }
            </main>
        )
    }
}

const mapStateToProps = state =>{
    return{
        token: state.auth.token,
        results: state.records.results,
        records: state.records.records,
        loading: state.records.loading,
        students: state.users.students
    }
 }

 const mapDispatchToProps = dispatch =>{
    return{
        getRecords: token => dispatch(actions.getRecords(token)),
        getResults: (token, recordId) => dispatch(actions.getResults(token, recordId)),  
        getStudents: token => dispatch(userActions.getStudents(token))
    }
  }

 export default connect(mapStateToProps, mapDispatchToProps)(Results)
