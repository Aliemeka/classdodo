import React, { Component, Fragment } from 'react'

export class TestMain extends Component {
    render() {
        return (
        <Fragment>
            <ol className="breadcrumb">
                <li><a href="index.html">Classroom</a></li>
                <li><a href="tests.html">Mathematics</a></li>
                <li><a href="single-test.html" className="active">Shapes test</a></li>
            </ol>
            <main className="main-area pt-3 pb-2">
                <h1 className="text-center">Shapes</h1>
                <section className="courses-area container full-width mt-4 mb-4">
                    <div className="d-flex justify-content-center">
                        <a href="/" className="round-nav"><i className="icon-arrow-left"></i></a>
                        <h2 className="pr-2 pl-2">Question 1 out of 5</h2>
                        <a href="/" className="round-nav"><i className="icon-arrow-right"></i></a>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-md-8 col-sm-10 p-1 mb-2">  
                            <div className="card d-flex pb-2">
                                <div className="bam pt-4"></div>
                                <h3 className="text-center mt-4">How many sides does a dacagon have?</h3>
                                <hr/>
                                <div className="form-container mb-2">
                                    <div className="radio"> 
                                        <label> 
                                            <input type="radio" name="optionsRadios" id="optionsRadios1" value="option1" /> Option 1 </label> 
                                    </div> 
                                    <div className="radio"> 
                                       <label> 
                                          <input type="radio" name="optionsRadios" id="optionsRadios2"  
                                             value="option2" /> 
                                             Option 2
                                       </label> 
                                    </div>
                                    <div className="radio"> 
                                       <label> 
                                          <input type="radio" name="optionsRadios" id="optionsRadios2"  
                                             value="option2" /> 
                                             Option 3
                                       </label> 
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </Fragment>

        )
    }
}

export default TestMain
