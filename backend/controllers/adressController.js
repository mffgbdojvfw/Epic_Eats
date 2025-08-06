// const Addressmodel = require("../models/addressmodel")
// const validator = require("validator")

// const addAddress = async(req,res) =>{
//    const {firstname,lastname,address,street,city,state,country,zipcode,phone} = req.body
//     try{
//     if(phone.length!=10){
//         res.json({success:false,message:"phoneno must be of 10 digits"})
//     }    
//     const addressData = new Addressmodel({
//         firstname:firstname,
//         lastname:lastname,
//         address:address,
//         street:street,
//         city:city,
//         state:state,
//         country:country,
//         zipcode:zipcode,
//         phone:phone, 
//     })
//     const newdata = await addressData.save()
//     res.json({success:true,message:"Data Added Succesfully",newdata})
//    }catch(err){
// console.log(err)
// res.json({success:false,message:"Error"})
//    }
// }

// module.exports = {addAddress}


const Addressmodel = require("../models/addressmodel");
const validator = require("validator");

const addAddress = async (req, res) => {
  const { firstname, lastname, address, street, city, state, country, zipcode, phone } = req.body;

  try {
    if (phone.length != 10) {
      return res.status(400).json({ success: false, message: "Phone number must be of 10 digits" });
    }
    if(zipcode.length != 6){
        return res.status(400).json({ success: false, message: "zipcode has only 6 digits" });
    }

    const addressData = new Addressmodel({
      firstname,
      lastname,
      address,
      street,
      city,
      state,
      country,
      zipcode,
      phone,
    });

    const newdata = await addressData.save();
    return res.status(201).json({ success: true, message: "Data added successfully", newdata });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ success: false, message: "Error" });
  }
};

module.exports = { addAddress };
