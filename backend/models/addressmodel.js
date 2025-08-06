const mongoose = require("mongoose")
const validator = require("validator")

const addressSchema = new mongoose.Schema({
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    address: { type: String, required: true},
    street: { type: String, required: true },
    city: { type: String, required: true },
    state: { type: String, required: true },
    zipcode: { type: String, required: true },
    country: { type: String, required: true },
    phone: { type: String, required: true }
}, { minimize: false });

const Addressmodel = new mongoose.model("address",addressSchema)

module.exports = Addressmodel