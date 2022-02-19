const mongoose=require("mongoose");

const OrderSchema=new mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        require:"User",
    },
    restraunt:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Restraunt",
    },
    item:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Item"
    },
    quantity:{
        type:Number
    },
    status:{
        type:Number,
        default:0
    },
    price:{
        type:Number
    },
    paymentMode:{
        type:Number
    },
    paymentStatus:{
        type:Boolean,
        default:true
    },
    paymentId:{
        type:String
    }
},{timestamps:true});

module.exports=mongoose.model("Order",OrderSchema);