const jwt = require("jsonwebtoken")

const authMiddleware = async(req,res,next) =>{
const {registertoken} = req.headers;
if(!registertoken){
    return res.json({success:false,message:"Not Authorized Login Again"})
}
try{
    const token_decode = jwt.verify(registertoken,process.env.JWT_SECRET)
    req.body.userId = token_decode.id
    next();
}catch(err){
    console.log(err)
    res.json({success:false,message:"Error"})
}

}

module.exports = authMiddleware



// const jwt = require("jsonwebtoken");

// const authMiddleware = async (req, res, next) => {
//   const { registertoken } = req.headers;
//   if (!registertoken) {
//     return res.json({ success: false, message: "Not Authorized Login Again" });
//   }
//   try {
//     const token_decode = jwt.verify(registertoken, process.env.JWT_SECRET);
//     req.body.userid = token_decode.id;
//     next();
//   } catch (err) {
//     console.log("JWT Verification Error: ", err);
//     res.json({ success: false, message: "Error" });
//   }
// };

// module.exports = authMiddleware;


// const jwt = require("jsonwebtoken");
// const Usermodel = require("../models/userModel");

// const authMiddleware = async (req, res, next) => {
//   const token = req.headers["authorization"];
//   if (!token) {
//     return res.status(401).json({ success: false, message: "No token provided" });
//   }

//   try {
//     const decoded = jwt.verify(token, process.env.JWT_SECRET);
//     req.userId = decoded.id;
//     next();
//   } catch (err) {
//     return res.status(401).json({ success: false, message: "Unauthorized" });
//   }
// };

// module.exports = authMiddleware;





