import React from 'react';
import { connect } from 'react-redux';
import './App.css';
import TodoList from './TodoList';
import TodoInput from './TodoInput';

class App extends React.Component {
 constructor(props) {
  super(props);
  this.state = {
   todos: [],
  };
 }

 addTodo = text => {
  let newTodo = {
   todo: text,
   complete: false,
  };
  this.setState(prev => {
   // instead of creating a copy of a state and pushing newTodo
   return { todos: [...prev.todos, newTodo] };
  });
 };

 render() {
  return (
   <div className="App">
    <header className="App-header">
     <p>
      Edit <code>src/App.js</code> and save to reload.
     </p>
     <h1>{this.props.titleOne}</h1>
    </header>
    <TodoInput />
    <TodoList />
   </div>
  );
 }
}

function mapStateToProps(state) {
 console.log(state);
 return { titleOne: state.title };
}

export default connect(mapStateToProps)(App);
// connect( mapStateToProps, mapDispatchToProps)
