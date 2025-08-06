const Usermodel  = require("../models/userModel")
const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")
const validator = require("validator")

//login user

const loginUser = async(req,res) =>{
const {email,password} = req.body

try{

const user = await Usermodel.findOne({email})
if(!user){
  return res.json({success:false,message:"Invalid login details"})
}

const ismatch = await bcrypt.compare(password,user.password)
if(!ismatch){
  return res.json({success:false,message:"Wrong password"})
}


const registertoken =  createToken(user._id)
res.json({success:true,registertoken,userId:user._id})

}catch(err){
  console.log(err)
  res.json({success:false,message:"Error"})
}
}


const createToken = (id)=>{
return jwt.sign({id},process.env.JWT_SECRET,{ expiresIn: '1h' })

}

//register user
const registerUser = async(req,res)=>{
  const {name,password,email} = req.body
try{
  const useremail = await Usermodel.findOne({email:email})
  if(useremail){
return res.json({success:false,message:"User already exists"})
  }
  
  if(!validator.isEmail(email)){
    return res.json({success:false,message:"Please enter a valid email"})
  }

  if(password.length<8){
    return res.json({success:false,message:"Please enter a strong password "})
  }

  const salt = await bcrypt.genSalt(10)
  const hashpassword = await bcrypt.hash(password,salt)
  
  const newUser = new Usermodel({
    name:name,
    email:email,
    password:hashpassword,
  })

  const user = await newUser.save()
  const registertoken =  createToken(user._id)
  res.json({success:true,registertoken,userId:user._id})

  }catch(err){
    console.log(err)
    res.json({success:false,message:"Error"})
}
}

module.exports = {loginUser,registerUser}


