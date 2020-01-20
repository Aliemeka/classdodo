import React, { Fragment } from 'react'
import Subject from './Subject'

const Subjects = ({ subjects, handleTeacher }) =>{

    const subjectlist = subjects.length ? (
        <Fragment>
        <div className="row justify-content-center">
            { subjects.map( (subject, id) =>(
                <Subject key={id} subject={subject} handleTeacher={handleTeacher}/>
            )) } 
        </div>
        </Fragment>
    )
    : ( 
        <Fragment>
        <div className="d-flex justify-content-center 
            text-muted align-items-center mt-2 mb-2">
            <h2><i className="icon-warning"></i></h2>
            <h3>No subject yet!</h3>
        </div>
        </Fragment>
    )

    return <Fragment>{subjectlist}</Fragment>
}

export default Subjects