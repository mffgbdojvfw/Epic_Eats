const mongoose = require("mongoose")
const validator = require("validator")

const userSchema = new mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String,required:true,unique:true},
    password:{type:String,required:true},
    cartdata:{type:Object,
        default:[]
    }
},{minimize:false})

const Usermodel = new mongoose.model("user",userSchema)

module.exports  = Usermodel