const mongoose = require("mongoose")
const { toFloat } = require("validator")

const orderShema = new mongoose.Schema({
    userId:{type:String,required:true},
    items: [{
        item: { type: String, required: true },
        quantity: { type: Number, required: true },
        price: { type: Number, required: true }
      }],
    amount:{type:Number,required:true},  
    status:{type:String,required:true},
    date: { type: String, required: true }, 
    time: { type: String, required: true },
    address:[{
      firstname: { type: String, required: true },
      lastname: { type: String, required: true },
      address: { type: String, required: true},
      street: { type: String, required: true },
      city: { type: String, required: true },
      state: { type: String, required: true },
      zipcode: { type: String, required: true },
      country: { type: String, required: true },
      phone: { type: String, required: true }
    }]   
})

const Ordermodel = new mongoose.model("order",orderShema)
module.exports = Ordermodel