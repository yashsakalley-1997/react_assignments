import { FLIGHTS_LOADING, FLIGHTS_ERROR, GET_FLIGHTS } from "./action_types"

import axios from "axios";

export const getFlight = (payload) =>{
    return {
        type:GET_FLIGHTS,
        payload
    }
}

export const flightLoading = () =>{
    return {
        type:FLIGHTS_LOADING
    }
}

export const flightError = () => {
    return {
        type: FLIGHTS_ERROR
    }
}

export const getFlights = () => async (dispatch) => {
    try{
        dispatch(flightLoading())
        const { data } = await axios.get("http://localhost:8080/flights");
        dispatch(getFlight(data))
    }
    catch(err){
        dispatch(flightError())
    }
}



