const mongoose = require("mongoose");
const newOrderSchema = new mongoose.Schema(
    {
    user:{
        type:mongoose.Schema.Types.ObjectId, ref:"User"
    },
    deliverDate : {
        type: Date,
        required: true,
        default: Date.now
    },
    // ordersType : {
    //     type: String,
    //     required: true,
    //     category: ['Gronsaker', 'Mejeri','Fryst','Torr']
    // },
    itemToOrder: {
        type:String,
        required: true,
        trim: true
    },
    // remainInStock: {
    //     type:Number,
    //     required: true
    // },
    // unitRemain:{
    //     type: String,
    //     required: true,
    //     unit:['Styck','FPK','Kilo','Pase','Liter']
    // },
    toOrder: {
        type:Number,
        required: true,
    },
    unitToOrder:{
        type: String,
        required: true,
        unit:['Styck','FPK','Kilo','Pase','Liter']
    },
    comment:{
        type: String,
        trim: true
      }
})
const newOrder = new mongoose.model("newOrderModel",newOrderSchema)

module.exports = newOrder;