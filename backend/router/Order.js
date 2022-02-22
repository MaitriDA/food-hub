const router = require("express").Router();
const Restraunt = require("../model/Restraunt.js");
const Item = require("../model/Item.js");
const User = require("../model/User.js");
const Cart = require("../model/Cart.js");
const Order = require("../model/Orders.js");

//Add Order
router.post("/:id/order", async (req, res) => {
    try {
        const cart = await Cart.find({ "user": req.params.id });
        var l = cart.length;
        var itemArray = [];
        for (i = 0; i < l; i++) {
            try {
                const itemObj = {
                    user: req.params.id,
                    item: cart[i].item,
                    restraunt: cart[i].restraunt,
                    quantity: cart[i].quantity,
                    status: 0,
                    price: cart[i].price,
                    paymentMode: req.body.paymentMode,
                    paymentStatus: req.body.paymentStatus
                }
                const cartRemove=await Cart.findOneAndDelete({ "user": req.params.id, "item": cart[i].item });
                const newOrder = await new Order(itemObj);
                const order = await newOrder.save();
                const user=await User.findByIdAndUpdate(req.params.id,{
                    $push:{orders:order._id}
                })
                const restraunt=await Restraunt.findByIdAndUpdate(cart[i].restraunt,{
                    $push:{orders:order._id}
                })
            } catch (err) {
                console.log("Error");
                res.status(500).json(err);
            }
        }
        res.status(200).json(itemArray);
    } catch (err) {
        console.log("Error Outside");
        res.status(500).json({ message: "Error" });
    }
})

//Get Orders
router.get("/:id",async(req,res)=>{
    try{
        const orders=await Order.find({"user":req.params.id});
        var itemArray=[];
        var l=orders.length;
        for(i=0;i<l;i++){
            try{
                const item=await Item.findById(orders[i].item);
                const restraunt=await Restraunt.findById(orders[i].restraunt);
                const itemObj={
                    _id:orders[i]._id,
                    name:item.name,
                    price:item.price,
                    quantity:orders[i].quantity,
                    veg:item.veg,
                    id:orders[i].item,
                    image:item.image,
                    restraunt:restraunt.name,
                    paymentMode:orders[i].paymentMode,
                    paymentStatus:orders[i].paymentStatus,
                    status:orders[i].status,
                    createdAt:orders[i].createdAt
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
module.exports = router;