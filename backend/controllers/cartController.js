const Usermodel = require("../models/userModel")


// const addToCart = async(req,res) =>{

// try{
  
//   const userdata = await Usermodel.findById(req.body.userId)
// //   const itemId = req.body.itemId
//     cartdata = await userdata.cartdata
//    if(!cartdata[req.body.itemId]){
//     cartdata[req.body.itemId] = 1

//    }
//    else{
//     cartdata[req.body.itemId] += 1
    
//    }

// await Usermodel.findByIdAndUpdate(req.body.userId,{cartdata})
// // userdata.cartdata = cartdata // Update the cartdata in the user document
// await userdata.save(); 
// // await cartdata.push({
// //   dataitem:cartdata[req.body.itemId]
// // })
//    res.json({success:true,message:"Added To Cart"})
// }catch(err){
// console.log(err)
// res.josn({success:false,message:"Error"})
// }
// }

const addToCart = async (req, res) => {
   try {
     const { userId, itemId } = req.body;
     
     if (!userId || !itemId) {
       console.log("Missing userId or itemId:", { userId, itemId }); // Log missing values
       return res.json({ success: false, message: "User ID and Item ID are required" });
     }
 
     const userdata = await UserModel.findById(userId);
     if (!userdata) {
       return res.json({ success: false, message: "User not found" });
     }
 
     const cartdata = userdata.cartdata || {};
     console.log("Current cart data:", cartdata);
 
     if (!cartdata[itemId]) {
       cartdata[itemId] = 1;
     } else {
       cartdata[itemId] += 1;
     }
 
     userdata.cartdata = cartdata;
     await userdata.save();
 
     res.json({ success: true, message: "Added To Cart" });
   } catch (err) {
     console.log("Error in Adding to Cart:", err);
     res.json({ success: false, message: "Error in Adding to Cart" });
   }
 };
 
 

// const addToCart = async (req, res) => {
//     try {
//         const userdata = await Usermodel.findById(req.body.userid);
//         if (!userdata) {
//             return res.json({ success: false, message: "User not found" });
//         }

//         console.log('User Data Before Update:', userdata);

//         // Ensure cartdata is a Map
//         let cartdata = userdata.cartdata instanceof Map ? userdata.cartdata : new Map(Object.entries(userdata.cartdata));

//         // Update cartdata
//         if (!cartdata.has(req.body.itemid)) {
//             cartdata.set(req.body.itemid, 1);
//         } else {
//             cartdata.set(req.body.itemid, cartdata.get(req.body.itemid) + 1);
//         }

//         // Convert Map to plain object before saving
//         userdata.cartdata = Object.fromEntries(cartdata);
//         await userdata.save(); // Save the updated user document

//         const updatedUserdata = await Usermodel.findById(req.body.userid); // Fetch updated user data
//         console.log('User Data After Update:', updatedUserdata);

//         res.json({ success: true, message: "Added To Cart" });
//     } catch (err) {
//         console.log(err);
//         res.json({ success: false, message: "Error" });
//     }
// };

// 
  

const removeFromCart = async(req,res) =>{
   try{  const userdata = await Usermodel.findById(req.body.userid)
      const cartdata = await userdata.cartdata
     
      if(cartdata[req.body.itemid]>0){
       cartdata[req.body.itemid] -= 1
      }
   
      await Usermodel.findByIdAndUpdate(req.body.userid,{cartdata})
      res.json({success:true,message:"Removed From Cart"})
   }catch(err){
   console.log(err)
   res.josn({success:false,message:"Error"})
   }
   }



const getCart = async(req,res) =>{
try{
   const userdata = await Usermodel.findById(req.body.userid)
   const cartdata = userdata.cartdata
   res.json({success:true,message:cartdata})
}catch(err){
    console.log(err)
    res.json({success:false,message:"Error"})
}
}

module.exports = {addToCart,removeFromCart,getCart}




// const addToCart = async (req, res) => {
  //     try {
  //       const userdata = await Usermodel.findById(req.userId);
  //       if (!userdata) {
  //         return res.json({ success: false, message: "User not found" });
  //       }
    
  //       console.log('User Data Before Update:', userdata);
    
  //       let cartdata = userdata.cartdata instanceof Map ? userdata.cartdata : new Map(Object.entries(userdata.cartdata));
    
  //       if (!cartdata.has(req.body.itemid)) {
  //         cartdata.set(req.body.itemid, 1);
  //       } else {
  //         cartdata.set(req.body.itemid, cartdata.get(req.body.itemid) + 1);
  //       }
    
  //       userdata.cartdata = Object.fromEntries(cartdata);
  //       await userdata.save();
    
  //       const updatedUserdata = await Usermodel.findById(req.userId);
  //       console.log('User Data After Update:', updatedUserdata);
    
  //       res.json({ success: true, message: "Added To Cart" });
  //     } catch (err) {
  //       console.log(err);
  //       res.json({ success: false, message: "Error" });
  //     }
  //   };