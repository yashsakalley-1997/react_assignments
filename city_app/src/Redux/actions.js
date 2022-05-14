import { GET_CITY,
    GET_COUNTRY,
    GET_CITY_ERROR,
    GET_CITY_LOADING, 
    DELETE_CITY_LOADING,
    DELETE_CITY_ERROR,
    COUNTRIES_LOADING,
    COUNTRIES_ERROR,
    PAGE_CITY
} from "./action_names";

import axios from "axios";

export const getCountry = (payload)=>{
    return {
        type:GET_COUNTRY,
        payload
    }
}


export const getCity = (payload)=>{
    return {
        type:GET_CITY,
        payload
    }
}

export const pageCity = (payload)=>{
    return {
        type:PAGE_CITY,
        payload
    }
}

export const cityLoading = ()=>{
    return {
        type:GET_CITY_LOADING
    }
}

export const cityError = ()=>{
    return {
        type:GET_CITY_ERROR
    }
}


export const deleteLoading = (payload)=>{
    return {
        type:DELETE_CITY_LOADING,
        payload
    }
}

export const deleteError = (payload)=>{
    return {
        type:DELETE_CITY_ERROR,
        payload
    }
}

export const countryLoading = ()=>{
    return {
        type:COUNTRIES_LOADING
    }
}

export const countryError = ()=>{
    return {
        type:COUNTRIES_ERROR
    }
}


// middlewares

export const getCountries = () =>async (dispatch) =>{
    try{
        dispatch(countryLoading())
        const { data } = await axios.get("https://city-population-app.herokuapp.com/api/countries")
        dispatch(getCountry(data))
    }
    catch(err){
        dispatch(countryError())
    }
}

export const addCountry = (payload) => async (dispatch) =>{
    try{
        await axios.post("https://city-population-app.herokuapp.com/api/countries",payload);
        dispatch(getCountries())
    }
    catch(err){
        console.log(err)
    }
}


export const getCities = () => async (dispatch) =>{
    try{
        dispatch(cityLoading())
        const { data } = await axios.get("https://city-population-app.herokuapp.com/api/cities");
        dispatch(getCity(data))
        dispatch(cityPagination())
    }
    catch(err){
        dispatch(cityError())
    }
}

export const cityPagination = (payload) => async (dispatch) =>{
    try{
        let data;
        if(payload)
        {
            data = await axios.get(`https://city-population-app.herokuapp.com/api/cities?_start=${payload['start']}&_end=${payload['end']}`)
        }
        else{
            data = await axios.get("https://city-population-app.herokuapp.com/api/cities?_start=0&_end=2")
        }
        dispatch(pageCity(data.data))
    }
    catch(err){
        console.log(err)
    }
}

export const addCity = (payload) => async (dispatch) =>{
    try{
        await axios.post("https://city-population-app.herokuapp.com/api/cities",payload);
        dispatch(getCities())
    }
    catch(err){
        console.log(err)
    }
}

export const filterCity = (payload) => async (dispatch) => {
    try{
        const { data } = await axios.get(`https://city-population-app.herokuapp.com/api/cities?country=${payload}`);
        dispatch(getCity(data))
        dispatch(pageCity(data))
    }
    catch(err){
        console.log(err)
    }
}


export const sortCities = (payload) => async (dispatch) => {
    try{
        const { data } = await axios.get("https://city-population-app.herokuapp.com/api/cities")
        if(payload === "ascending"){
            data.sort(function(a,b){
                return a['population'] - b['population']
            })
        }
        else{
            data.sort(function(a,b){
                return b['population'] - a['population']
            })
        }
        dispatch(getCity(data))
        dispatch(pageCity(data))
    }
    catch(err){
        console.log(err)
    }
}


export const deleteCity = (payload) => async (dispatch) =>{
    try{
        dispatch(deleteLoading(payload))
        await axios.delete(`https://city-population-app.herokuapp.com/api/cities/${payload}`);
        dispatch(getCities())
    }
    catch(err){
        dispatch(deleteError(payload))
    }
}

export const updateCity = (payload) => async (dispatch) =>{
    try{
        await axios.patch(`https://city-population-app.herokuapp.com/api/cities/${payload.id}`,payload);
        dispatch(getCities())
    }
    catch(err){
        console.log(err)
    }
}



