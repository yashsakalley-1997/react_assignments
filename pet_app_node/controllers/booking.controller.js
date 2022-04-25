const express = require("express");
const Booking = require("../models/booking.model");
const router = express.Router();


// Creating a booking.
router.post("",async(req,res)=>{
    try{
        const booking = await Booking.create(req.body);
        return res.status(201).send(booking)
    }
    catch(err){
        return res.status(500).send(err.message);
    }
})
router.get("",async(req,res)=>{
    try{
        const booking = await Booking.find();
        return res.status(201).send(booking);
    }
    catch(err){
        return res.status(500).send(err.message)
    }
})


// Accepting a booking for admin.
router.put("",async(req,res)=>{
    try{
        const filter = {"_id":req.query.booking_id}
        const update = {"status":"confirmed"};
        const booking = await Booking.findOneAndUpdate(filter,update);
        return res.status(500).send(booking);
    }
    catch(err){
        return res.status(500).send(err.message)
    }
})

module.exports = router;