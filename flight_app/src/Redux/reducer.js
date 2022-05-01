import { GET_FLIGHTS,FLIGHTS_LOADING, FLIGHTS_ERROR } from "./action_types"


const initState = {
    flights:[],
    loading:false,
    error:false
}


export const reducer = (state = initState,{type,payload})=>{
    switch(type){
        case GET_FLIGHTS:
            return {
                ...state,
                flights:payload,
                loading:false
            }
        case FLIGHTS_LOADING:
            return {
                ...state,
                loading:true
            }
        case FLIGHTS_ERROR:
            return {
                ...state,
                error:true
            }
        default:
            return state
    }
}