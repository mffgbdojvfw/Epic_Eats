const express = require("express")
const {addToCart,removeFromCart,getCart} = require("../controllers/cartController")
const { get } = require("mongoose")
const authMiddleware = require("../middleware/auth")
const cartrouter = express.Router()

cartrouter.post("/add",authMiddleware,addToCart)
cartrouter.post("/remove",authMiddleware,removeFromCart)
cartrouter.get("/get",authMiddleware,getCart)

module.exports = cartrouter