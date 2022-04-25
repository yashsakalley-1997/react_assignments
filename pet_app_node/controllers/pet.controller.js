const express = require("express");
const Pet = require("../models/pet.model");
const router = express.Router();

router.post("",async(req,res)=>{
    try{
        const pet = await Pet.create(req.body);
        return res.status(201).send(pet)
    }
    catch(err){
        return res.status(500).send(err.message)
    }
})

// get for a particular id.
router.get("/:id",async(req,res)=>{
    try{
        const pet = await Pet.find({user_id:req.params.id});
        return res.status(201).send(pet);
    }
    catch(err){
        return res.status(500).send(err.message);
    }
})

router.get("",async(req,res)=>{
    console.log(req.params)
    try{
        const pet = await Pet.find();
        return res.status(201).send(pet)
    }
    catch(err){
        return res.status(500).send(err.message);
    }
})

module.exports = router;
