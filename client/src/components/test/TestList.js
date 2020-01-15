import React, { Component, Fragment } from 'react'
import { NavLink } from 'react-router-dom'

export class TestList extends Component {
    render() {
        return (
            <Fragment>
                <ol class="breadcrumb">
                    <li><NavLink to="/">Classroom</NavLink></li>
                    <li><NavLink to="/test" class="active">Mathematics</NavLink></li>
                </ol>
                <main class="main-area pt-3 pb-2">
                    <h1 class="text-center">Mathematics test</h1>
                    <section class="courses-area container full-width mt-4 mb-4">
                        <div class="row justify-content-center">

                            <div class="col-sm-6 col-md-4 col-lg-3 p-1 mb-2">  
                                <div class="card text-center d-flex">
                                    <div class="bam pt-4"></div>
                                    <h2>Shapes</h2>
                                    <p><button class="btn btn-md btn-dark">Attempt</button></p>
                                </div>
                            </div>
                            
                        </div>
                    </section>
                </main>
            </Fragment>
        )
    }
}

export default TestList
