import React, { Component, Fragment } from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import * as actions from '../../store/actions/subjects'
import Test from './Test'

import Loader from '../../containers/Loader'


export class TestList extends Component {

    componentDidMount(){
        let id = this.props.match.params.subject_id
        if(this.props.token !== null && this.props.token !== undefined){
            this.props.getSubjectTests(this.props.token, id)
        }
    }

    UNSAFE_componentWillUpdate(newProps){
        if(newProps.token !== this.props.token){
            if(newProps.token !== null && newProps.token !== undefined){
                newProps.getSubjectTests(newProps.token, this.props.match.params.subject_id) 
            } 
        }
    }
    
    render() {

        return(
            <Fragment>{ this.props.loading ?
            <Fragment> 
                <ol className="breadcrumb">
                    <li><NavLink to="/">Dashboard</NavLink></li>
                    <li>...</li>
                </ol>

                <main className="main-area pt-3 pb-2">
                    <section className="courses-area container d-flex justify-content-center full-width mt-4 mb-4">
                        <Loader />
                    </section>
                </main>
            </Fragment>
            : ( <Fragment>
                {
                    Object.keys(this.props.subject).length > 0 ?
                <Fragment>
                    <ol className="breadcrumb">
                        <li><NavLink to="/"><i className="icon-arrow-left"></i>Go back to Dashboard</NavLink></li>
                        <li><NavLink to={`/${this.props.subject.id}`}>{this.props.subject.subject_name}</NavLink></li>
                    </ol>
                    <main className="main-area pt-3 pb-2">
                        <h1 className="text-center">{this.props.subject.subject_name}</h1>
                        <section className="courses-area container full-width mt-4 mb-4">
                            <div className="row justify-content-center">

                            {
                               this.props.subject.tests.length ?
                                <Fragment>{this.props.subject.tests.map((test, id) => <Test key={id} test={test} subId={this.props.subject.id}/>) }</Fragment> 
                                : <h4 className='text-muted text-center'>No tests yet</h4>
                            }
                                
                            </div>
                        </section>
                    </main> 
                </Fragment>
                :
                null
                }
                </Fragment>
            )
            }</Fragment>
        )
    }
}

const mapStateToProps = state =>{
    return{
        token: state.auth.token,
        loading: state.subjects.loading,
        subject: state.subjects.currentSubject
    }
 }

 const mapDispatchToProps = dispatch =>{
    return{
        getSubjectTests: (token, id) => dispatch(actions.getSubjectTests(token, id)),
    }
  }

 export default connect(mapStateToProps, mapDispatchToProps)(TestList)
