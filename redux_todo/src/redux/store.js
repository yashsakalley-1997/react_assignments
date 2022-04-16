import { createStore } from "redux";
import { reducer } from "./reducer";

// console.log(reducer)
export const store = createStore(reducer,
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()    
)