const catRouter = require("express").Router();
const User = require("../models/User");
const Category = require("../models/Category");


//CREATE
catRouter.post("/", async(req,res)=>{
    const newCat = new Category(req.body)
    try{
     const saveCat = await newCat.save();
     res.status(200).json(saveCat)
    }catch(err){
        res.status(500).json(err)
    }
})


//GET ALL CATEGORIES
catRouter.get("/", async(req,res)=>{
   
    try{
     const cats = await Category.find();
     res.status(200).json(cats)
    }catch(err){
        res.status(500).json(err)
    }
})



module.exports = catRouter;