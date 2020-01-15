import React from 'react'
import Subject from './Subject'

const Subjects = ({ subjects }) =>{


    const subjectlist = subjects ? (
        <div className="row justify-content-center">
            { subjects.map( (subject, id) =>(
                <Subject key={id} subject={subject} />
            )) } 
        </div>
    )
    : (
        <div className="d-flex justify-content-center 
            text-muted align-items-center mt-2 mb-2">
            <h2><i className="icon-warning"></i></h2>
            <h3>No subject yet!</h3>
        </div>
    )

    return subjectlist
}

export default Subjects