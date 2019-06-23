export const ADD_TODO = 'ADD_TODO';
export const DELETE_TODO = 'DELETE_TODO';
export const TOGGLE_COMPLETE = 'TOGGLE_COMPLETE';
export const DELETE_COMPLETE = 'DELETE_COMPLETE';

// function changeTitle(text) {
//  return { type: 'CHANGE_TITLE', title: text };
// }

export function addTodo(newTodo) {
 return { type: ADD_TODO, payload: newTodo };
}

export function deleteTodo(id) {
 return { type: DELETE_TODO, payload: id };
}

export function toggleComplete(id) {
 return { type: TOGGLE_COMPLETE, payload: id };
}
export function deleteComplete() {
 return { type: DELETE_COMPLETE };
}
