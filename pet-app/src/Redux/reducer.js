import {GET_ENTITY,
    GET_ENTITY_LOADING,
    GET_ENTITY_ERROR, 
    SET_USER,
    GET_PETS,
    GET_BOOKINGS } from "./action_types"
    
const initState = {
    entities:[],
    loading:false,
    error:false,
    loggedIn_user:{},
    pets:[],
    bookings:[]
}

export const reducer = (state = initState,{type,payload})=>{
    switch(type){
        case GET_ENTITY:
            return {
                ...state,
                entities: payload,
                loading:false
            }
        
        case GET_PETS:
            return {
                ...state,
                pets : payload,
                loading:false
            }

        case GET_ENTITY_LOADING:
            return {
                ...state,
                loading:true
            }

        case GET_ENTITY_ERROR:
            return {
                ...state,
                error:true
            }

        case SET_USER:
            return {
                ...state,
                loggedIn_user:payload
            }

        case GET_BOOKINGS:
            return {
                ...state,
                bookings:payload
            }
            
        default:
            return state;
    }
}