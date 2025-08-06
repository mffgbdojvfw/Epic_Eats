const express = require("express")
const cors  = require("cors")
const connect = require("./config/db");
const foodrouter = require("./routes/food_route")
const userrouter = require("./routes/user_route")
const cartrouter = require("./routes/cart_route")
const orderrouter = require("./routes/order_route")
// const bodyParser = require("body-parser")
const addressrouter = require("./routes/address_route")
require("dotenv").config()

// app config
const app = express()
const port = process.env.PORT||4300

//middleware
app.use(express.json())
app.use(cors())
// app.use(bodyParser.json());


//db connection
connect();

//api endpoints
app.use("/api/food",foodrouter)
app.use('/images', express.static('uploads'));
app.use("/api/user",userrouter)
app.use("/api/cart",cartrouter)
app.use("/api/order",orderrouter)
app.use("/api/address",addressrouter)

app.get("/",(req,res)=>{
    res.send("Hello!, Welcome to my website")
})

app.listen(port,()=>{
    console.log(`data is listening on ${port}`)
})




