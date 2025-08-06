const mongoose = require("mongoose")
const validator = require("validator")

const foodSchema = new mongoose.Schema({
    name:{type:String,required:true},
    description:{type:String,required:true},
    price:{type:Number,required:true},
    image:{type:String,required:true},
    category:{type:String,required:true},

})

const Foodmodel = new mongoose.model("food",foodSchema) 
module.exports = Foodmodel