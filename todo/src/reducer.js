import { ADD_TODO } from './actions';
// import { CHANGE_TITLE } from './actions';

let defaultState = {
 title: 'Welcome to Redux! And more',
 todos: [
  {
   todo: 'Does it work?',
  },
 ],
};

// action is an object = {type: , payload}
// state = defaultState -> if state doesn't exist then state equals 'defaltState', if state does exist it is just a state.
export default function reducer(state = defaultState, action) {
 switch (action.type) {
  case ADD_TODO:
   let newTodos = [...state.todos, action.payload];
   return Object.assign({}, state, { todos: newTodos });
  //   case CHANGE_TITLE:
  //    // old way
  //    //  it is going to create a new object - `{}`, it's gonna transfer state over that new object - `state`, and `{title: action.title}` will overwrite whatever was on state.title before
  //    //    return Object.assign({}, state, { title: action.title });
  //    // new way:
  //    return { ...state, title: action.title };
  default:
   return state;
 }
}
