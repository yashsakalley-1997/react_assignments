const mongoose = require("mongoose");
const entitySchema = new mongoose.Schema({
    address:{type:String,required:true},
    area_size:{type:Number,required:true},
    buffer_place:{type:String,required:true},
    city:{type:String,required:true},
    cost_per_day:{type:Number,required:true},
    emergency_transport:{type:String,required:true},
    house_type:{type:String,required:true},
    name:{type:String,required:true},
    pet:{type:String,required:true},
    pet_numbers:{type:Number,required:true},
    poo_breaks:{type:Number,required:true},
    rating:{type:Number,required:true},
    sleeping_place:{type:String,required:true},
    status:{type:String,required:true},
    supervision_level:{type:String,required:true},
    walks_per_day:{type:Number,required:true},
    weight:{type:String,required:true}
})


const Entity = mongoose.model("entity",entitySchema);
module.exports = Entity;


