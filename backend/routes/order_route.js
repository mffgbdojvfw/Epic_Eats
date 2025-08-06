const {placeOrder,userOrder,allOrders,updateStatus} = require("../controllers/orderController")
const express = require("express")
// const Authmiddleware = require("../middleware/auth")
const orderrouter = express.Router()

orderrouter.post("/place", placeOrder)
orderrouter.post("/myorders", userOrder)
orderrouter.get("/list",allOrders)
orderrouter.post("/status",updateStatus)

module.exports = orderrouter