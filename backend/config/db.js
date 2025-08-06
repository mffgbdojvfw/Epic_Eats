// const connect = async()=>{
//     const mongoose = require("mongoose")
//     try{
//   await mongoose.connect("mongodb+srv://patelmaan3104:rVlf05xq2UuMT34S@cluster0.vvvvgmo.mongodb.net/food-del")
//   console.log("connected sucessfuly!")
//  }catch(err){
// console.log(err)
//  }
// }

// module.exports = connect() 


const mongoose = require("mongoose");
require("dotenv").config();

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB connected successfully!");
  } catch (err) {
    console.error("MongoDB connection error:", err);
  }
};

module.exports = connect;
