import {
    GET_CITY,
    GET_CITY_LOADING,
    GET_COUNTRY,
    GET_CITY_ERROR,
    PAGE_CITY,
    DELETE_CITY_ERROR,
    DELETE_CITY_LOADING,
    COUNTRIES_LOADING,
    COUNTRIES_ERROR
}
from "./action_names";

const initState = {
    countries:[],
    cities:[],
    pageCities:[],
    loading:false,
    error:false,
    deleteLoading:{
        loading:false,
        id:""
    },
    deleteError:{
        error:false,
        id:""
    }
    ,
    countryLoading:false,
    countryError:false
}

export const reducer = (state=initState,{type,payload})=>{
    switch(type){
        case GET_CITY:
            return {
                ...state,
                cities:payload,
                loading:false,
                error:false,
                deleteLoading:{
                    loading:false,
                    id:""
                }
            }
        case PAGE_CITY:
            return {
                ...state,
                pageCities:payload,
            }
        case GET_COUNTRY:
            return {
                ...state,
                countries:payload,
                countryLoading:false
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
        
        case DELETE_CITY_LOADING:
            return {
                ...state,
                deleteLoading:{
                    loading:true,
                    id:payload
                }
            }

        case DELETE_CITY_ERROR:
            return {
                ...state,
                deleteError:{
                    error:true,
                    id:payload
                }
            }

        case COUNTRIES_LOADING:
            return {
                ...state,
                countryLoading:true
            }

        case COUNTRIES_ERROR:
            return {
                ...state,
                countryError:true
            }

        default:
            return state
    }
} 