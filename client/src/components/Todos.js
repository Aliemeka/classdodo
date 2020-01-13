import React from 'react';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';

const Todos = ({todos, markComplete, deleteTodo}) =>{

  if (todos.length > 0){
    return todos.map( todo => (
      <TodoItem key={todo.id} todo ={todo} markComplete=
        {markComplete}
        deleteTodo={deleteTodo}/>
    ))
  }
  else{
    return <p className="message text-center text-muted">There is no item in the list</p>
  }
}

Todos.propTypes = {
  todos: PropTypes.array.isRequired
}

export default Todos;
