import { createStore,applyMiddleware } from "redux";
import { combineReducers } from "redux";
import { reducer } from "./reducer";

const rootReducer = combineReducers({
    flight:reducer
})


const middleware  = (store) => (next) => (action) =>{
    if(typeof action === "function"){
        return action(store.dispatch)
    }

    next(action)
}

export const store = createStore(rootReducer,applyMiddleware(middleware));
