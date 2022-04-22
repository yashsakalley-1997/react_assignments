import { ADD_ENTITY, FILTER_ENTITY, SORT_ENTITY } from "./action_types"

export const addEntity = (payload)=>{
    return {
        type:ADD_ENTITY,
        payload
    }
}

export const filterEntity = (payload)=>{
    return {
        type:FILTER_ENTITY,
        payload
    }
}

export const sortEntity = ()=>{
    return {
        type:SORT_ENTITY
    }
}