import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class TodoItem extends Component {
    getStyle = () =>{
        return{
            borderBottom: '1px #ccc dotted',
            padding: '10px',
            textDecoration: this.props.todo.completed ?
            'line-through': 'none'
        }
    }

    render() {
        const { id, title } = this.props.todo;
        return (
            <div className="todo-item"    >
                <div className="col-xs-11">
                    <p>
                        <input type="checkbox" onChange={this.props.markComplete.bind(this, id)} /> {' '}
                        { title }{'    '}
                    </p>
                </div>
                <div>
                    <button className="btn btn-md"
                        onClick={this.props.deleteTodo.bind(this, id)}><span className = "glyphicon glyphicon-trash"></span></button>
                </div>
            </div>
        )
    }
}

TodoItem.propTypes = {
    todo: PropTypes.object.isRequired
}



export default TodoItem
