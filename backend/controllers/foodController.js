// const Foodmodel = require("../models/food_model")
// const fs = require("fs")


// const addFood = async(req,res) => {

//     let image_filename = req.file.filename

//     const food  = new Foodmodel({
//         name : req.body.name,
//         description : req.body.description,
//         price : req.body.price,
//         image :image_filename,
//         category : req.body.category,

//     })
//     try{
//         await food.save()
//         res.json({sucess:true , message:"Food Added"})
//     }
//     catch(err){
//         console.log(err)
//         res.json({sucess:false , message:"Error"})
//     }
// }

// module.exports = addFood()


// const Foodmodel = require("../models/food_model")
// const fs = require("fs")

// const addFood = async (req, res) => {
//     if (!req.file) {
//         return res.status(400).json({ success: false, message: "No file uploaded" });
//     }

//     let image_filename = req.file.filename;

//     const food = new Foodmodel({
//         name: req.body.name,
//         description: req.body.description,
//         price: req.body.price,
//         image: image_filename,
//         category: req.body.category,
//     });

//     try {
//         await food.save();
//         res.json({ success: true, message: "Food Added" });
//     } catch (err) {
//         console.log(err);
//         res.json({ success: false, message: "Error" });
//     }
// };




// const listFood = async(req,res) =>{
// try{
//     const foods = await Foodmodel.find()
//     res.json({success:true , data:foods})
// }catch(err){
//     console.log(err)
//     res.json({success:false, message:"Error"})
// }
// } 



// const removeFood = async (req, res) => {
//     try {
//       const food = await Foodmodel.findById(req.body.id);
  
//       if (!food) {
//         return res.status(404).json({ success: false, message: "Food not found" });
//       }
  
//       if (food.image) {
//         fs.unlink(`uploads/${food.image}`, (err) => {
//           if (err) {
//             console.error("Error deleting image:", err);
//           }
//         });
//       }
  
//       await Foodmodel.findByIdAndDelete(req.body.id);
//       res.json({ success: true, message: "Food Deleted Successfully" });
//     } catch (err) {
//       console.log(err);
//       res.json({ success: false, message: "Error" });
//     }
//   };

// module.exports = addFood;
// module.exports = listFood;
// module.exports = removeFood;


const Foodmodel = require("../models/food_model");
const fs = require("fs");

const addFood = async (req, res) => {
  if (!req.file) {
    console.log("No file uploaded"); // Debugging log
    return res.status(400).json({ success: false, message: "No file uploaded" });
  }

  let image_filename = req.file.filename;

  const food = new Foodmodel({
    name: req.body.name,
    description: req.body.description,
    price: req.body.price,
    image: image_filename,
    category: req.body.category,
  });

  try {
    await food.save();
    res.json({ success: true, message: "Food Added" });
  } catch (err) {
    console.log("Error saving food:", err); // Debugging log
    res.json({ success: false, message: "Error" });
  }
};

const listFood = async (req, res) => {
  try {
    const foods = await Foodmodel.find();
    res.json({ success: true, data: foods });
  } catch (err) {
    console.log("Error listing foods:", err); // Debugging log
    res.json({ success: false, message: "Error" });
  }
};

const removeFood = async (req, res) => {
  try {
    const foodId = req.body.id;
    console.log("Received ID:", foodId); // Debugging log

    const food = await Foodmodel.findById(foodId);

    if (!food) {
      return res.status(404).json({ success: false, message: "Food not found" });
    }

    if (food.image) {
      fs.unlink(`uploads/${food.image}`, (err) => {
        if (err) {
          console.error("Error deleting image:", err);
        }
      });
    }

    await Foodmodel.findByIdAndDelete(foodId);
    res.json({ success: true, message: "Food Deleted Successfully" });
  } catch (err) {
    console.log("Error removing food:", err); // Debugging log
    res.json({ success: false, message: "Error" });
  }
};

module.exports = {
  addFood,
  listFood,
  removeFood,
};
