const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
    "start_date":{type:Date,required:true},
    "end_date":{type:Date,required:true},
    "status":{type:String},
    "user_id":{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user",
        required:true
    },
    "pet_id":{
        type:mongoose.Schema.Types.ObjectId,
        ref:"pet",
        required:true
    }
    ,
    "pet_home_id":{
        type:mongoose.Schema.Types.ObjectId,
        ref:"entity",
        required:true
    }
})

const Booking = mongoose.model("booking",bookingSchema);
module.exports = Booking;



