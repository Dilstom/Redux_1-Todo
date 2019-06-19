import React from 'react';
import { connect } from 'react-redux';

function TodoList(props) {
 console.log(props);
 return (
  <div>
   <ul>
    {props.todos.map((todo, i) => {
     return <li key={i}>{todo.todo}</li>;
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
export default connect(mapStateToProps)(TodoList);
