import React, { Component } from 'react'

export class Option extends Component {
    render() {
        const { option, deleteOption, id, selectOption, answer } = this.props
        const optionClass = answer === option ? 'answer' : null
        const isAnswer = answer === option ? <i className='text-muted icon-check'></i> : null
        return (
            <div className={`d-flex p-1 option ${optionClass}`}>
                <div className="col-10">
                    <p>{option} {isAnswer}</p>
                </div>
                <div className="col-1 pl-1">
                    {
                        answer === option ? <input type="radio" value={option} id={id} onChange={selectOption} checked/> :
                        <input type="radio" value={option} id={id} onChange={selectOption}/>
                    }
                </div>
                <div className="col-1 pl-1">
                    <button type="button" className='btn btn-sm btn-danger' onClick={deleteOption.bind(this, id)}><i className='icon-trash'></i></button>
                </div>
            </div>
        )
    }
}

export default Option
