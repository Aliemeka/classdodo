import React, { Fragment } from 'react'


const HandleClose = close =>{
    close = true
}

const Alertbox = ({ message, status })=>{
    let close = false
    const alertClass = status !== null && status !==undefined ? status==='success'? `alert-success`: status==='error'? 'alert-danger' : null : null
    return(
        <Fragment>{ close ?
                    <div className={`alert alert-dismissable ${alertClass}`}> 
                        <button type="button" className="close" onClick={HandleClose}>
                        &times; 
                        </button> 
                        {message} 
                    </div>: null}
        </Fragment>
    )
}

export default Alertbox