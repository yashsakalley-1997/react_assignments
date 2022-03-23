export const ADD_TODO = "ADD_TODO";
export const DELETE_TODO = "DELETE_TODO";
export const UPDATE_TODO = "UPDATE_TODO";

// action creator

export const addTodo = (todo)=>({type:ADD_TODO,payload:todo});
export const delTodo = (id)=>({type:DELETE_TODO,payload:id});
export const updateTodo = (id)=>({type:UPDATE_TODO,payload:id});