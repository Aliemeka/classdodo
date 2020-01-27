import React, { Component } from 'react'

export class ResultDetails extends Component {
    render() {
        return (
            <main className="main-area pt-5 pb-5">
                <h1 className="text-center">Steph's Results</h1>
                <section className="records-section container bg-light pt-4 pb-4">
                    <div className="row justify-content-center p-2">
                        <div className="col-sm-6">
                            <div className="card result-card d-flex justify-content-center align-items-center p-3">
                                <h3 className="mt-2 mb-3">Mathematics</h3>
                                <p className="text-bold mb-1">Aggregate:</p>
                                <h1 className="result-heading text-success">91%</h1>
                                <p className="mt-1">Success Rate: <span className="text-bold">98</span></p>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className='panel container-fluid pt-2 pb-2'>
                            <table class="table">
                                <thead class="thead-dark">
                                    <tr>
                                    <th scope="col">Test</th>
                                    <th scope="col">Score</th>
                                    <th scope="col">Grade</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">Shapes</th>
                                        <td>5</td>
                                        <td>100%</td>
                                    </tr>
                                    <tr>
                                    <th scope="row">Word Problems</th>
                                    <td>3</td>
                                    <td>60%</td>
                                    </tr>
                                    <tr>
                                    <th scope="row">Bearing</th>
                                    <td>4</td>
                                    <td>80%</td>
                                    </tr>
                                </tbody>
                            </table>
                            </div>
                        </div>
                        
                    </div>
                </section>
            </main>
        )
    }
}

export default ResultDetails
