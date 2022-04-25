const mongoose = require('mongoose');


const petSchema = new mongoose.Schema({
    pet_type:{type:String,required:true},
    pet_name:{type:String,required:true},
    weight:{type:String,required:true},
    food_type:{type:String,required:true},
    user_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'user',
        required:true
    }
})
module.exports = mongoose.model("pet",petSchema);