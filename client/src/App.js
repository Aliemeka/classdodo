import React, { Component, Fragment } from 'react';
import Todos from './components/Todos';

import './App.css';
import Header from './components/Header';
import AddTodo from './components/AddTodo';

class App extends Component{
  state ={
    todos: [
      {
        id: 1,
        title: 'Read cloud documentation',
        completed: false
      },

      {
        id: 2,
        title: 'Create Ahuike UI design',
        completed: false
      },

      {
        id: 3,
        title: 'Call Idy Udoh',
        completed: false
      },
      {
        id: 4,
        title: 'Finish reading book',
        completed: false
      }
    ]
  };

  markComplete=(id)=>{
    this.setState( { todos: this.state.todos.map(todo=>{
      if (todo.id === id){
        todo.completed = !todo.completed
      }
      return todo;
    }) } );
  }

  lastlength = this.state.todos.length
  anotherlength = this.lastlength + 1

  createNewTodoItem = (todo) =>{
    //doSomething
    todo.id = Math.random()
    const todos = [...this.state.todos, todo]
    this.setState({
      todos: todos
    })

  }

  deleteTodo = (id) =>{
    //deletes selected todo
    const todos = this.state.todos.filter(t => t.id !== id);
    this.setState({ todos })
  }

  render(){
    //console.log(this.state.todos)
    return (
      <Fragment>
        <Header/>
        <div className="todo-list">
          <Todos todos= {this.state.todos} markComplete={this.markComplete}
          deleteTodo={this.deleteTodo}/>
          <AddTodo createNewTodoItem={this.createNewTodoItem}/>
        </div>
      </Fragment>
    )
  }
}

export default App;
