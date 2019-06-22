export const ADD_TODO = 'ADD_TODO';
export const DELETE_TODO = 'DELETE_TODO';

// function changeTitle(text) {
//  return { type: 'CHANGE_TITLE', title: text };
// }

export function addTodo(newTodo) {
 return { type: ADD_TODO, payload: newTodo };
}

export function deleteTodo(id) {
 return { type: DELETE_TODO, payload: id };
}
