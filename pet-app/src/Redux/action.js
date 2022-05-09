import { 
    GET_ENTITY, 
    GET_ENTITY_LOADING, 
    GET_ENTITY_ERROR, 
    SET_USER,
    GET_PETS,
    GET_BOOKINGS} from "./action_types"

import axios from "axios"
export const getEntity = (payload)=>{
    return {
        type:GET_ENTITY,
        payload
    }
}

export const getBooking = (payload)=>{
    return {
        type:GET_BOOKINGS,
        payload
    }
}

export const getPet = (payload)=>{
    return {
        type: GET_PETS,
        payload
    }
}

export const setUser = (payload)=>{
    return {
        type:SET_USER,
        payload
    }
}


export const entityLoading = ()=>{
    return {
        type:GET_ENTITY_LOADING
    }
}

export const entityError = (payload)=>{
    return {
        type:GET_ENTITY_ERROR,
        payload
    }
}


export const getEntities = () => async (dispatch) => {
    try{
        dispatch(entityLoading())
        const { data } = await axios.get("https://pet-bos-app.herokuapp.com/entity");
        dispatch(getEntity(data))
    }
    catch(err){
        console.log("error",err)
        dispatch(entityError())
    }
}

export const getPets = (id) => async (dispatch) => {
    try{
        dispatch(entityLoading())
        const { data } = await axios.get(`https://pet-bos-app.herokuapp.com/pet/${id}`);
        dispatch(getPet(data))
    }
    catch(err){
        console.log(err)
    }
}

export const getBookings = (payload) => async (dispatch) =>{
    try{
        const { data } = await axios.get("https://pet-bos-app.herokuapp.com/booking",payload);
        dispatch(getBooking(data))
    }
    catch(err){
        console.log(err)        
    }
}

export const createEntity = (payload) => async (dispatch) => {
    try{
        await axios.post("https://pet-bos-app.herokuapp.com/entity",payload);
        dispatch(getEntities())
    }
    catch(err){
        console.log(err)
    }
}

export const createPet = (payload) => async (dispatch) => {
    try{
        await axios.post(`https://pet-bos-app.herokuapp.com/pet`,payload)
        dispatch(getPets(payload['user_id']))
    }
    catch(err){
        console.log(err.message)
    }
}

export const createBooking = (payload) => async (dispatch) => {
    try{
        await axios.post("https://pet-bos-app.herokuapp.com/booking",payload)
        dispatch(getBookings())
    }
    catch(err){
        console.log(err.message)
    }   
}

export const filterEntity = (payload) => async (dispatch) =>{
    try{
        let { data } = await axios.get(`https://pet-bos-app.herokuapp.com/entity?${payload['by']}=${payload['value']}`)
        dispatch(getEntity(data))
    }
    catch(err){
        console.log(err)
    }
}

export const sortEntities = (payload) => async (dispatch) =>{
    try{
        const { data } = await axios.get(`https://pet-bos-app.herokuapp.com/entity/?sort=${payload[0]}&by=${payload[1]}`);
        dispatch(getEntity(data))
    }
    catch(err){
        console.log(err)
    }
}
export const userLogin = (payload) => async (dispatch) =>{
    try{
        const { data }  = await axios.post("https://pet-bos-app.herokuapp.com/login",payload);
        let obj = data.user;
        (obj.email.split("@")[1].includes("admin"))?
        obj['user_type'] = "admin":obj['user_type'] = "user"

        dispatch(setUser(obj))
    }
    catch(err){
        console.log(err)
    }
}

// export const userBooking




