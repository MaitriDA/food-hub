const router = require("express").Router();
const Restraunt = require("../model/Restraunt.js");
const Item=require("../model/Item.js");
const bcrypt = require("bcrypt");
const User = require("../model/User.js");


//Add Item
router.post("/:id",async(req,res)=>{
    try{
        const newItem=await new Item(req.body);
        const item=await newItem.save();
        console.log("Success")
        const restraunt=await Restraunt.findByIdAndUpdate(req.params.id,{
            $push:{items:item._id}
        })
        res.status(200).json({message:"Item Added",item})
        return;
    }catch(err){
        console.log(err);
        res.status(500).json(err);
    }
})

//Delete Item
router.delete("/:id",async(req,res)=>{
    try{
        const res=await Item.findByIdAndDelete(req.params.id);
        res.status(200).json({message:"Item Deleted"})
    }catch(err){
        res.status(500).json({message:"Error"})
    }
})

//Get Items by Restraunt
router.get("/:id",async(req,res)=>{
    try{
        const items=await Item.find({restraunt:req.params.id});
        res.status(200).json(items)
        
    }catch(err){
        console.log(err);
        res.status(500).json(err);
    }
})

//Get Item by Id
router.get("/:id/item",async(req,res)=>{
    try{
        const item=await Item.findById(req.params.id);
        res.status(200).json(item);
        
    }catch(err){
        console.log(err);
        res.status(500).json(err);
    }
})


module.exports = router;