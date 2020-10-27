import React, { PureComponent, Fragment } from 'react'
import { connect } from 'react-redux'
import BreadCrombs from '../../containers/BreadCrombs'


import * as actions from '../../store/actions/records'
import * as userActions from '../../store/actions/users'

import Loader from '../../containers/Loader'


export class ResultDetails extends PureComponent {
    componentDidMount(){
        const recordId = this.props.match.params.record_id
        const resultId = this.props.match.params.result_id
        if(this.props.token !== null && this.props.token !== undefined){
            this.props.getRecords(this.props.token, recordId)
            this.props.getResultDetails(this.props.token, recordId, resultId) 
            this.props.getTestScores(this.props.token, recordId, resultId)
            this.props.getStudents(this.props.token)
        }
    }
    
    UNSAFE_componentWillUpdate(newProps){
        const recordId = this.props.match.params.record_id
        const resultId = this.props.match.params.result_id
        if(newProps.token !== this.props.token){
            if(newProps.token !== null && newProps.token !== undefined){
                this.props.getRecords(newProps.token) 
                this.props.getStudents(newProps.token) 
                this.props.getResultDetails(newProps.token, recordId, resultId) 
                this.props.getTestScores(newProps.token, recordId, resultId)
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

    getGrade = (score) =>{
        switch (score) {
            case 5:
                return "A"
                
            case 4:
                return "B"
                
            case 3:
                return "C"
                
            case 2:
                return "D"
                
            case 1:
                return "F"
            
            case 0:
                return "F"
                
        
            default:
                return '-'
        }
    }

    render() {
        const student = this.getExactStudent()
        const recordId = this.props.match.params.record_id
        // const resultId = this.props.match.params.result_id
        // const subject = this.props.loading ? '....' : this.props.resultDetails.subject !== undefined ?  this.props.resultDetails.subject : '...'
        let textColor = ' '
        if(!this.props.loading){
            if(this.props.resultDetails.average_score !== null && this.props.resultDetails.average_score !== undefined){
                if(this.props.resultDetails.average_score > 75){
                    textColor = 'text-success'
                }
                else if(this.props.resultDetails.average_score > 59){
                    textColor = 'text-primary'
                }
                else if(this.props.resultDetails.average_score > 49){
                    textColor = 'text-warning'
                }
                else{
                    textColor = 'text-danger'
                }
            }
        }
        return (
            <main className="main-area pt-5 pb-5">
            <BreadCrombs recordId={recordId} isStudent={this.props.isStudent}/>
            {
                this.props.loading && this.props.resultDetails.id === undefined ?
                <Loader /> :
                <Fragment>
                    <h1 className="text-center mt-3">{student}'s details</h1>
                    <section className="records-section container bg-light pt-4 pb-4">
                        <div className="row justify-content-center p-2">
                            <div className="col-sm-6 pb-3">
                                <div className="card result-card d-flex justify-content-center align-items-center p-3">
                                {
                                   this.props.resultDetails.id !== null && this.props.resultDetails.id !==undefined ?
                                   <Fragment>
                                       <h3 className="mt-2 mb-3 text-center">{this.props.resultDetails.subject}</h3>
                                       <p className="text-bold mb-1">Aggregate:</p>
                                       <h1 className={`result-heading ${textColor}`}>{parseInt(this.props.resultDetails.average_score)}%</h1>
                                       <p className="mt-1">Success Rate: <span className="text-bold">{this.props.resultDetails.success_rate}</span></p>
                                   </Fragment> :
                                   <Fragment>
                                       <p className="text-bold mb-1">Oops</p>
                                       <h1 className="result-heading text-muted"><i className="icon-warning"></i></h1>
                                       <p className="mt-1">No results</p>
                                   </Fragment>
                                }
                                </div>
                            </div>

                            <div className="col-sm-6">
                                <div className='panel container-fluid pt-2 pb-2'>
                                <table className="table">
                                    <thead className="thead-dark">
                                        <tr>
                                        <th scope="col">Test</th>
                                        <th scope="col">Score</th>
                                        <th scope="col">Grade</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            this.props.testScores !== undefined && this.props.testScores ?
                                            <Fragment>
                                                {this.props.testScores.map(ts =>(<tr key={ts.id}>
                                                                        <th scope="row">{ts.test}</th>
                                                                        <td>{ts.score}</td>
                                                                        <td>{this.getGrade(ts.score)}</td>
                                                                    </tr>))}
                                            </Fragment>:
                                            <tr>
                                                <th scope="row">---</th>
                                                <td>---</td>
                                                <td>---</td>
                                            </tr>
                                        }
                                    </tbody>
                                </table>
                                </div>
                            </div>
                            
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
        isStudent: state.auth.is_student,
        loading: state.result.loading,
        resultDetails: state.result.resultDetails,
        testScores: state.result.testScores,
        records: state.records.records,
        students: state.users.students
    }
 }

 const mapDispatchToProps = dispatch =>{
    return{
        getRecords: token => dispatch(actions.getRecords(token)),
        getResultDetails: (token, recordId, resultId) => dispatch(actions.getResultDetails(token, recordId, resultId)),  
        getTestScores: (token, recordId, resultId) => dispatch(actions.getTestScores(token, recordId, resultId)),  
        getStudents: token => dispatch(userActions.getStudents(token))
    }
  }

 export default connect(mapStateToProps, mapDispatchToProps)(ResultDetails)
