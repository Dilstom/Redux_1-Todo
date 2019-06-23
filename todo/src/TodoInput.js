import React from 'react';
import { connect } from 'react-redux';
import { addTodo, deleteComplete } from './actions';

class TodoInput extends React.Component {
 state = {
  inputValue: '',
 };

 changeInputValue = e => {
  this.setState({ inputValue: e.target.value });
 };

 createNewTodo = e => {
  e.preventDefault();
  const newObj = {
   id: this.props.todos.length + 1,
   completed: false,
   title: this.state.inputValue,
  };
  this.props.addTodo(newObj);
  this.setState({ inputValue: '' });
 };

 render() {
  return (
   <div className="inputField">
    <form onSubmit={this.createNewTodo}>
     <input
      type="text"
      value={this.state.inputValue}
      onChange={this.changeInputValue}
     />
     <button type="submit">Add Todo</button>
    </form>
    <button onClick={this.props.deleteComplete} className="deleteAllComplete">
     Delete Completed Todos
    </button>
   </div>
  );
 }
}

// adds props
function mapStateToProps(state) {
 return {
  todos: state.todos,
 };
}

export default connect(
 mapStateToProps,
 { addTodo: addTodo, deleteComplete }
 //  mapDispatchToProps
)(TodoInput);
