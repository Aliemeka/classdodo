import React from 'react'


const Loader = () =>{
    return (
        <div className="d-flex justify-content-center p-4">
            <div className="spinner-grow text-secondary">
                <span className="sr-only">Loading...</span>
            </div>
            <div className="spinner-grow text-secondary">
                <span className="sr-only">Loading...</span>
            </div>
            <div className="spinner-grow text-secondary">
                <span className="sr-only">Loading...</span>
            </div>
        </div>
    )
}

export default Loader