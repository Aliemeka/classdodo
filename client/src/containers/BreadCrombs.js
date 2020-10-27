import React, {Fragment} from 'react'
import { NavLink } from 'react-router-dom'

const BreadCrombs = ({ recordId, isStudent }) => {
    return (
        <ol className="breadcrumb sp">
            {
                isStudent ?
                <li><NavLink to={`/profile/${recordId}/results`}>Profile</NavLink></li>
                :
                <Fragment>
                    <li><NavLink to={`/records`}>Records</NavLink></li>
                    <li><NavLink to={`/profile/${recordId}/results`}>Results</NavLink></li>
                </Fragment>
            }
        </ol>
    )
}

export default BreadCrombs
