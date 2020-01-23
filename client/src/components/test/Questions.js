import React, { Component, Fragment } from 'react'
import Choice from './Choice'

export class Questions extends Component {
    render() {
        const { order, questions, handleCurrentQuestion, done, change, selected, submitTest } = this.props
        let currentQuestion = handleCurrentQuestion(questions, order)
        let options = currentQuestion.options
        return (
            <div className="card d-flex pb-2">
                <div className="bam pt-4"></div>
                <Fragment>
                    {
                        done ? <div className='m-4'><h3 className='text-bold text-center'>Thanks for completing the test</h3></div> :
                        <Fragment>
                            <h4 className="text-center mt-4 pt-2 ml-1 mr-1" >{currentQuestion.question}</h4>
                            <hr/>
                            <form className="form-container mb-2" onSubmit={submitTest}>
                                {options.map((option, id)=> <Choice option={option} key={id} qId={currentQuestion.order}
                                                                    change={change} 
                                                                    value={selected[currentQuestion.order] !== undefined 
                                                                        && selected[currentQuestion.order] !== null ?
                                                                        selected[currentQuestion.order] : null}/>)}
                                { 
                                    order === questions.length ?
                                    <button className='btn btn-md btn-dark mt-2' type="submit">Submit</button> : null
                                }
                            </form>
                        </Fragment>
                    }
                </Fragment>
            </div>
        )
    }
}

export default Questions
