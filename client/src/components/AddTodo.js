//Component adds a new todo item to the application.

import React, { Component } from 'react'

export class AddTodo extends Component {
    state = {
        title: null,
        completed: false
    }

    handleChange = (e) =>{
        this.setState({
            [e.target.id] : e.target.value
        })
    }


    handleSubmit = (e) =>{
        e.preventDefault(); //Prevents my page from reloading
        if (this.state.title){
            this.props.createNewTodoItem(this.state) //passes the state into the create new todo item function 
        }

    }

    render() {
        return (
            <form className="todo-form" onSubmit={this.handleSubmit}>
                <div className="todo-item">

                        <input type="text" id="title" onChange={this.handleChange}/>
                        <button className="btn btn-lg newbutton"
                            onClick={console.log('Just got clicked')}>
                        <span className="glyphicon glyphicon-plus"></span>
                        </button>

                </div>
            </form>
        )
    }
}

export default AddTodo
