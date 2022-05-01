import {
    GET_CITY,
    GET_CITY_LOADING,
    GET_COUNTRY,
    GET_CITY_ERROR
}
from "./action_names";

const initState = {
    countries:[],
    cities:[],
    loading:false,
    error:false
}

export const reducer = (state=initState,{type,payload})=>{
    switch(type){
        case GET_CITY:
            return {
                ...state,
                cities:payload,
                loading:false
            }
        
        case GET_COUNTRY:
            return {
                ...state,
                countries:payload,
            }

        case GET_CITY_LOADING:
            return {
                ...state,
                loading:true
            }
        
        case GET_CITY_ERROR:
            return {
                ...state,
                error:true
            }
        
        default:
            return state
    }
}