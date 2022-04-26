import { FILTER_ENTITY, 
    SORT_ENTITY,
    GET_ENTITY, 
    GET_ENTITY_LOADING, 
    GET_ENTITY_ERROR, 
    SET_USER,
    GET_PETS} from "./action_types"

import axios from "axios"
export const getEntity = (payload)=>{
    return {
        type:GET_ENTITY,
        payload
    }
}

export const getPet = (payload)=>{
    return {
        type: GET_PETS,
        payload
    }
}
export const filterEntity = (payload)=>{
    return {
        type:FILTER_ENTITY,
        payload
    }
}

export const setUser = (payload)=>{
    return {
        type:SET_USER,
        payload
    }
}

export const sortEntity = ()=>{
    return {
        type:SORT_ENTITY
    }
}

export const entityLoading = ()=>{
    return {
        type:GET_ENTITY_LOADING
    }
}

export const entityError = ()=>{
    return {
        type:GET_ENTITY_ERROR
    }
}

export const getEntities = () => async (dispatch) => {
    try{
        dispatch(entityLoading())
        const { data } = await axios.get("http://localhost:8080/entity");
        dispatch(getEntity(data))
    }
    catch(err){
        console.log("error is",err)
        dispatch(entityError())
    }
}

export const getPets = (id) => async (dispatch) => {
    try{
        dispatch(entityLoading())
        const { data } = await axios.get(`http://localhost:8080/pet/${id}`);
        dispatch(getPet(data))
    }
    catch(err){
        dispatch(entityError())
    }
}

export const createEntity = (payload) => async (dispatch) => {
    try{
        const { res } = await axios.post("http://localhost:8080/entity",payload);
        dispatch(getEntities())
    }
    catch(err){
        console.log(err)
    }
}

export const createPet = (payload) => async (dispatch) => {
    console.log(payload)
    try{
        const { res } = await axios.post("http://localhost:8080/pet",payload)
        dispatch(getPets())
    }
    catch(err){
        console.log(err)
    }
}


export const userLogin = (payload) => async (dispatch) =>{
    try{
        const { data }  = await axios.post("http://localhost:8080/login",payload);
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




