const express = require("express");
const res = require("express/lib/response");
const Entity = require("../models/entity.model");

const router = express.Router();


router.post("", async(req,res)=>{
    try{
        const entity = await Entity.create(req.body);
        return res.status(201).send(entity);
    }
    catch(err){
        return res.status(500).send(err.message);
    }
})


router.get("",async(req,res)=>{
    let query_obj= {};
    if(req.query.city){
        query_obj = {city:req.query.city};
    }
    try{
        const entity = await Entity.find(query_obj);
        return res.status(201).send(entity)
    }
    catch(err){
        return res.status(500).send(err.message);

    }
})


router.get("/:id",async(req,res)=>{
    try{
        const entity = await Entity.findById(req.params.id);
        return res.status(201).send(entity);
    }
    catch(err){
        return res.status(500).send(err.message);
    }
})

module.exports = router;

