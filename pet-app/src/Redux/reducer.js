import { ADD_ENTITY, FILTER_ENTITY } from "./action_types"


const initState = {
    entities:[
    {
        "address": "abcd villa",
        "area_size": "123",
        "buffer_place": "love",
        "city": "Indore",
        "cost_per_day": "234",
        "emergency_transport": "Ye",
        "house_type": "villa",
        "name": "Doggo Zone",
        "pet": "Dogs",
        "pet_numbers": "10",
        "poo_breaks": "4",
        "rating": "3",
        "sleeping_place": "lap",
        "status": "Verified",
        "supervision_level": "love",
        "walks_per_day": "4",
        "weight": "20-40 kg"
    },
    {
        "address": "abcd villa",
        "area_size": "123",
        "buffer_place": "love",
        "city": "Bhopal",
        "cost_per_day": "234",
        "emergency_transport": "Ye",
        "house_type": "villa",
        "name": "Doggo Zone",
        "pet": "Dogs",
        "pet_numbers": "10",
        "poo_breaks": "4",
        "rating": "3",
        "sleeping_place": "lap",
        "status": "Verified",
        "supervision_level": "love",
        "walks_per_day": "4",
        "weight": "20-40 kg"
    }]
}

export const reducer = (state = initState,{type,payload})=>{
    console.log(type,payload)
    switch(type){
        case ADD_ENTITY:
            return {
                ...state,
                entities: [...state.entities,payload]
            }
        case FILTER_ENTITY:
            return {
                ...state,
                entities:[...state.entities.filter((elem)=>{
                    return elem['city'] === payload
                })]
            }
        default:
            return state;
    }
}