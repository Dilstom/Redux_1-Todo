export const ADD_TODO = 'ADD_TODO';

// function changeTitle(text) {
//  return { type: 'CHANGE_TITLE', title: text };
// }

export function addTodo(text) {
 let newTodo = {
  todo: text,
  complete: false,
 };

 return { type: ADD_TODO, payload: newTodo };
}
