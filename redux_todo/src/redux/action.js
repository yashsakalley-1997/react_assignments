import axios from "axios";

export const GET_TODO = "GET_TODO";
export const GET_TODO_LOADING = "GET_TODO_LOADING";
export const GET_TODO_ERROR = "GET_TODO_ERROR";

export const DELETE_TODO = "DELETE_TODO";
export const UPDATE_TODO = "UPDATE_TODO";

// action creators

export const getTodo = (todo)=>({type:GET_TODO,payload:todo});
export const getTodoLoading = () => ({type:GET_TODO_LOADING});
export const getTodoError = () => ({type:GET_TODO_ERROR});
 
export const delTodo = (id)=>({type:DELETE_TODO,payload:id});
export const updateTodo = (id)=>({type:UPDATE_TODO,payload:id});


// export const getTodos = () => ()=>{
//     dispatch("loading")
//     axios.get("http://localhost:3001/todos").then(({data})=>{
//         dispatch(addTodo(data))
//     })
//     .catch(()=>{
//         dispatch("error")
//     })
// }