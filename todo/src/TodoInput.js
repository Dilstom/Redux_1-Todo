import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from './actions';

class TodoInput extends React.Component {
 state = {
  inputValue: '',
 };

 changeInputValue = e => {
  this.setState({ inputValue: e.target.value });
 };

 createNewTodo = e => {
  e.preventDefault();
  this.props.addTodo(this.state.inputValue);
  this.setState({ inputValue: '' });
 };

 render() {
  return (
   <form onSubmit={this.createNewTodo}>
    <input
     type="text"
     value={this.state.inputValue}
     onChange={this.changeInputValue}
    />
    <button type="submit">Add Todo</button>
   </form>
  );
 }
}

// adds props
function mapStateToProps(state) {
 return {};
}

export default connect(
 mapStateToProps,
 { addTodo: addTodo }
 //  mapDispatchToProps
)(TodoInput);
