import React from 'react';
import { connect } from 'react-redux';
import { deleteTodo } from './actions';

function TodoList(props) {
 //  handleDelete = e => {
 //   props.deleteTodo(todo.id);
 //  };
 console.log('checking todos', props.todos);
 return (
  <div>
   <ul>
    {props.todos.map((todo, i) => {
     return (
      <li key={i}>
       {todo.title}
       <button
        onClick={() => {
         props.deleteTodo(todo.id);
        }}
       >
        <div>Delete</div>
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
  //   id: state.id,
 };
}
export default connect(
 mapStateToProps,
 { deleteTodo }
)(TodoList);
