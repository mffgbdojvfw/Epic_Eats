const express = require("express")
const userrouter = express.Router()
const {loginUser,registerUser} = require("../controllers/userController")



userrouter.post("/register",registerUser)
userrouter.post("/login",loginUser)



module.exports = userrouter

