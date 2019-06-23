import React from 'react';
import { connect } from 'react-redux';
import { deleteTodo, toggleComplete } from './actions';

const decor = { textDecoration: 'line-through' };

function TodoList(props) {
 console.log('checking todos', props.todos);
 return (
  <div>
   <ul>
    {props.todos.map((todo, i) => {
     return (
      <li style={todo.completed ? decor : null} key={i}>
       <div onClick={() => props.toggleComplete(todo.id)}>{todo.title}</div>
       <button
        onClick={() => {
         props.deleteTodo(todo.id);
        }}
       >
        X
       </button>
      </li>
     );
    })}
   </ul>
  </div>
 );
}

function mapStateToProps(state) {
 console.log('state in todolist ', state);
 return {
  // we can add any props we want f/e
  // anotherTitle: 'Something that doesn't exist in our store'
  todos: state.todos,
 };
}
export default connect(
 mapStateToProps,
 { deleteTodo, toggleComplete }
)(TodoList);
