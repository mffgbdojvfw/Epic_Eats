// const Ordermodel = require("../models/orderModel")
// const Usermodel = require("../models/userModel")
// const Stripe = require("stripe")

// const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)
// const placeorder = async(req,res)=>{
//     const frontend_url = "http://localhost:3000"
// try{
// const neworder  = new Ordermodel({
//     userid : req.body.userid,
//     items : req.body.items,
//     amount:req.body.amount,
//     address :req.body.address 
// })
// await neworder.save();
// await Usermodel.findByIdAndUpdate(req.body.userid,{cartData:{}})

// const line_items = req.body.map((item)=>({
//     price_data:{
//         currency:"inr",
//         product_data:{
//             name:item.name
//         },
//         unit_amount:item.price*100*80
//     },
//     qunatity:item.qunatity 
// }))
// line_items.push({
//     price_data:{
//         currency:"inr",
//         product_data:{
//             name:"Delivery Charges"
//         },
//         unit_amount:2*100*80
//     },
//     qunatity:1
// })
// const session = await stripe.checkout.sessions.create({
//     line_items:line_items,
//     mode:'payment',
//     success_url:`${frontend_url}/verify?success=true&orderid=${neworder._id}`,
//     cancel_url:`${frontend_url}/verify?success=false&orderid=${neworder._id}`,
// })
// res.json({success:true,session_url:session_url})
// }catch(err){
// console.log(err)
// res.json({success:false,message:"Error"})
// }
// }

// module.exports = placeorder



const Ordermodel = require("../models/orderModel")

const placeOrder = async(req,res) =>{
const {userId,items,amount,date,time,address,status} = req.body

if (!items || items.length === 0 || !amount) {
    return res.status(400).json({ success: false, message: "Invalid order data" });
}

try{
    const newOrder = Ordermodel({
        userId:userId,
        items:items,
        amount:parseFloat(amount).toFixed(2),
        status:status,
        address:address,
        date:date,
        time:time
      
    })
    const order = await newOrder.save()
    res.json({success:true,order})
}catch(err){
    console.log(err)
    res.json({success:false,message:true})
}
}

// const userOrder = async(req,res) =>{
//     try{
//     const orders = await Ordermodel.find({userId:req.body.userId})
//         res.json({success:true,data:orders})
//     }catch(err){
//         console.log(err)
//         res.json({success:false,message:"Error"})
//     }

// }

const userOrder = async (req, res) => {
    try {
      const { userId } = req.body;
      if (!userId) {
        return res.status(400).json({ success: false, message: 'User ID is required' });
      }
  
      const orders = await Ordermodel.find({ userId });
      res.json({ success: true, data: orders });
    } catch (err) {
      console.log(err);
      res.status(500).json({ success: false, message: 'Error fetching orders' });
    }
  };
  
const allOrders = async(req,res) =>{
    try{
        const orders = await Ordermodel.find({})
        res.json({success:true,data:orders})
    }catch(err){
        console.log(err)
        res.json({success:false,message:"Error"})
    }
}

const updateStatus = async(req,res) =>{
    try{
await Ordermodel.findByIdAndUpdate(req.body.orderId,{status:req.body.status})
res.json({success:true,message:"Status Updated"})
}catch(err){
console.log(err)
res.json({success:false,message:"Error"})
}
}

module.exports = {placeOrder,userOrder,allOrders,updateStatus}