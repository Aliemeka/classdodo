import React, { PureComponent } from 'react'
// import * as actions from '../../store/actions/records'

export class Results extends PureComponent {
    render() {
        return (
            <main className="main-area pt-5 pb-5">
                <h1 className="text-center">Steph's Results</h1>
                <section className="records-section container bg-light pt-4 pb-4">
                    <div className="row justify-content-center p-2">
                        <div className="col-sm-6 col-md-4 col-lg-3 mb-2">
                            <div className="card result-card d-flex justify-content-center align-items-center p-3">
                                <h3 className="mt-2 mb-3">Mathematics</h3>
                                <p className="text-bold mb-1">Aggregate:</p>
                                <h1 className="result-heading text-success">91%</h1>
                                <p className="mt-1">Success Rate: <span className="text-bold">98</span></p>
                                <button className="btn btn-md btn-dark mb-1"><i className="icon-view"></i>View Tests</button>
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3 mb-2">
                            <div className="card result-card d-flex justify-content-center align-items-center p-3">
                                <h3 className="mt-2 mb-3">English </h3>
                                <p className="text-bold mb-1">Aggregate:</p>
                                <h1 className="result-heading text-success">91%</h1>
                                <p className="mt-1">Success Rate: <span className="text-bold">98</span></p>
                                <button className="btn btn-md btn-dark mb-1"><i className="icon-view"></i>View Tests</button>
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3 mb-2">
                            <div className="card result-card d-flex justify-content-center align-items-center p-3">
                                <h3 className="mt-2 mb-3">Chemistry </h3>
                                <p className="text-bold mb-1">Aggregate:</p>
                                <h1 className="result-heading text-success">91%</h1>
                                <p className="mt-1">Success Rate: <span className="text-bold">98</span></p>
                                <button className="btn btn-md btn-dark mb-1"><i className="icon-view"></i>View Tests</button>
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3 mb-2">
                            <div className="card result-card d-flex justify-content-center align-items-center p-3">
                                <h3 className="mt-2 mb-3">French </h3>
                                <p className="text-bold mb-1">Aggregate:</p>
                                <h1 className="result-heading text-danger">49%</h1>
                                <p className="mt-1">Success Rate: <span className="text-bold">98</span></p>
                                <button className="btn btn-md btn-dark mb-1"><i className="icon-view"></i>View Tests</button>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        )
    }
}

export default Results
