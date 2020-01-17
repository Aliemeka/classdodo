import React, { Fragment } from 'react'

import Record from './Record'

const RecordList = ({ records }) =>{

    const recordList = records ? 
        records.map((record, id) =><Record key={id} record={record} />)
        : (
            <div className="d-flex justify-content-center 
            text-muted align-items-center mt-2 mb-2">
                <h2><i className="icon-warning"></i></h2>
                <h3>No records yet!</h3>
            </div>
    )
    return <Fragment>{recordList}</Fragment>
}

export default RecordList