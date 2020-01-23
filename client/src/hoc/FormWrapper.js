import React, { Fragment } from 'react'
import question from './questionStructure'


const options = []
const questions = []

const translateProps = (props) =>{
    let _question = question
    if(props.question){
        _question.question = props.question
    }
    if(props.order){
        _question.order = props.order
    }
    if(props.option){
        _question.options = [...options, props.options] 
    }
    if(props.answer){
        _question.answer = props.answer
    }
    let _questions = [...questions]
    _questions = [...questions, _questions]
    const newProps = {...props, questions:_questions}
    return newProps
}

export default (WrappedForm) =>{
    return function WrappedRender(args){
        return new WrappedForm(translateProps(args))
    }
}