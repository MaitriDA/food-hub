const router = require("express").Router();
const Restraunt = require("../model/Restraunt.js");
const Item = require("../model/Item.js");
const User = require("../model/User.js");
const Cart = require("../model/Cart.js");

//Add Item
router.post("/:id", async (req, res) => {
    try {
        const newCart = await new Cart(req.body);
        const cart = await newCart.save();
        console.log("Success")
        res.status(200).json({ message: "Item Added", cart })
        return;
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
})

//Increase Descrese Quantity
router.put("/:id", async (req, res) => {
    try {
        cartItem = await Cart.findOneAndUpdate({ "user": req.params.id, "item": req.body.item }, {
            $set: { quantity: req.body.quantity}
        });
        res.status(200).json({ message: "Quantity Changed" })
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: "Error" })
    }
})

//Get Cart Item
router.get("/:id", async (req, res) => {
    try{
        const cart = await Cart.find({ "user": "620a1ead22ae4a0483f34c94" });
        var l=cart.length;
        var itemArray=[];
        for(i=0;i<l;i++){
            try{
                const item=await Item.findById(cart[i].item);
                const itemObj={
                    name:item.name,
                    price:item.price,
                    quantity:cart[i].quantity,
                    veg:item.veg,
                    id:cart[i].item,
                    image:item.image,
                    restraunt:item.restraunt
                }
                itemArray.push(itemObj);
                
            }catch(err){
                console.log(err);
                res.status(500).json(err);
            }
        }
        res.status(200).json(itemArray);
    }catch(err){
        console.log(err);
        res.status(500).json({message:"Error"});
    }
})

//Check if item is in cart
router.get("/:user/:id",async(req,res)=>{
    const cart = await Cart.find({ "user": req.params.user,"item":req.params.id });
    if(cart.length){
        res.status(200).json(cart[0].quantity);
    }
    else{
        res.status(200).json(false);
    }
})
module.exports = router;