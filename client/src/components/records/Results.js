import React, { PureComponent, Fragment, Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import BreadCrombs from '../../containers/BreadCrombs'

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
        if(recordId !== null && this.props.record !== undefined){
            if(this.props.students !== null && this.props.students !== undefined){
                if(this.props.students.length>0){
                    const students = this.props.students.filter(student => student.record === parseInt(recordId))
                    const student = students[0].first_name + ' ' + students[0].last_name
                    return student
                }
            }
        }
        return '...'
    }

    render() {
        const recordId = this.props.match.params.record_id
        let textColor =''
        if(!this.props.loading){
            if(this.props.results !== null && this.props.results.length > 0){
                this.props.results.forEach(result => {
                    if(result.average_score > 75){
                        textColor = 'text-success'
                    }
                    else if(result.average_score > 59){
                        textColor = 'text-primary'
                    }
                    else if(result.average_score > 49){
                        textColor = 'text-warning'
                    }
                    else{
                        textColor = 'text-danger'
                    }
                });
            }
        }

        
        const student = this.getExactStudent();

        return (
            <main className="main-area pt-5 pb-5">

                { recordId ? (
                    <Fragment>
                        <BreadCrombs recordId={recordId} isStudent={this.props.isStudent}/>
                        {
                            this.props.loading ?
                            <Loader /> 
                            :
                            <Fragment>
                                <h1 className="text-center mt-3">{student}</h1>
                                <section className="records-section container bg-light pt-4 pb-4">
                                    <div className="row justify-content-center p-2">
                                    {
                                        this.props.results !== undefined && this.props.results.length ?
                                        <Fragment>
                                        {
                                            this.props.results.map(result =>(
                                                <Result 
                                                  id={result.id} 
                                                  subject={result.subject} 
                                                  averageScore={result.average_score}
                                                  successRate={result.success_rate}
                                                  record={result.record}
                                                  textColor={textColor}
                                                />
                                            ))
                                        }
                                        </Fragment>
                                        : <h3 className="text-muted text-center">No results yet</h3>
                                    }
                                    </div>
                                </section>
                            </Fragment>
                        }
                    </Fragment>
                ): (
                    <h1 className="text-center text-bold mt-5">No records</h1>
                )}
                
                
            </main>
        )
    }
}

class Result extends Component {
    render(){
        return(
            <div className="col-sm-6 col-md-4 col-lg-3 mb-2" key={this.props.id}>
                <div className="card result-card d-flex justify-content-center align-items-center p-3">
                    <h3 className="mt-2 mb-3 text-center">{this.props.subject}</h3>
                    <p className="text-bold mb-1">Aggregate:</p>
                    <h1 className={`result-heading ${this.props.textColor}`}>{parseInt(this.props.averageScore)}%</h1>
                    <p className="mt-1">Success Rate: <span className="text-bold">{this.props.successRate}</span></p>
                    <Link to={`/profile/${this.props.record}/results/${this.props.id}`}><button className="btn btn-md btn-dark mb-1"><i className="icon-view"></i>View Tests</button></Link>
                </div>
            </div>
        )
    }
} 

const mapStateToProps = state =>{
    return{
        token: state.auth.token,
        isStudent: state.auth.is_student,
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
