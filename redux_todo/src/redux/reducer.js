import { ADD_TODO } from "./action";
import { DELETE_TODO } from "./action";
import { UPDATE_TODO } from "./action";


const initState = {
    todo:[]
}
export const reducer = (store = initState,{type,payload})=>{
    switch(type){
        case ADD_TODO:
            return {...store,todo:[...store.todo,payload]}
        case DELETE_TODO:
            return {...store,todo:[...store.todo.filter((el)=>el!=payload)]}
        case UPDATE_TODO:
            store.todo.splice(payload['i'],1,payload['e'])
            return {...store,todo:[...store.todo]}
        default:
            return store
    }
}