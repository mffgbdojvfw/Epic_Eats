const {addAddress} = require("../controllers/adressController")
const express = require("express")
const addressrouter = express.Router()


addressrouter.post("/add",addAddress)

module.exports = addressrouter