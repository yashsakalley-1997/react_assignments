import { GET_CITY,GET_COUNTRY,GET_CITY_ERROR,GET_CITY_LOADING } from "./action_names";
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

// middlewares

export const getCountries = () =>async (dispatch) =>{
    try{
        const { data } = await axios.get("http://localhost:8080/countries")
        dispatch(getCountry(data))
    }
    catch(err){
        console.log(err.message)
    }
}

export const addCountry = (payload) => async (dispatch) =>{
    try{
        await axios.post("http://localhost:8080/countries",payload);
        dispatch(getCountries())
    }
    catch(err){
        console.log(err)
    }
}


export const getCities = () => async (dispatch) =>{
    try{
        const { data } = await axios.get("http://localhost:8080/cities");
        dispatch(getCity(data))
    }
    catch(err){
        console.log(err)
    }
}

export const addCity = (payload) => async (dispatch) =>{
    try{
        await axios.post("http://localhost:8080/cities",payload);
        dispatch(getCities())
    }
    catch(err){
        console.log(err)
    }
}

export const filterCity = (payload) => async (dispatch) => {
    try{
        const { data } = await axios.get(`http://localhost:8080/cities?country=${payload}`);
        dispatch(getCity(data))
    }
    catch(err){
        console.log(err)
    }
}


export const sortCities = (payload) => async (dispatch) => {
    try{
        const { data } = await axios.get("http://localhost:8080/cities")
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
    }
    catch(err){
        console.log(err)
    }
}


export const deleteCity = (payload) => async (dispatch) =>{
    try{
        await axios.delete(`http://localhost:8080/cities/${payload}`);
        dispatch(getCities())
    }
    catch(err){
        console.log(err)
    }
}

export const updateCity = (payload) => async (dispatch) =>{
    try{
        await axios.patch(`http://localhost:8080/cities/${payload.id}`,payload);
        dispatch(getCities())
    }
    catch(err){
        console.log(err)
    }
}

