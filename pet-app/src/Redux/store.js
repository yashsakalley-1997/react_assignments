import { createStore,applyMiddleware } from "redux";
import { reducer } from "./reducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
    entity: reducer
})
const middleWare = (store) => (next) => (action) =>{
    if(typeof action === "function"){
        return action(store.dispatch)
    }
    next(action)
}
export const store = createStore(rootReducer,applyMiddleware(middleWare));
