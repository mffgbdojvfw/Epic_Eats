// const addFood = require("../controllers/foodController")
// const listFood = require("../controllers/foodController")
// const multer = require("multer")
// const express = require("express")
// const removeFood = require("../controllers/foodController")
// const router = new express.Router()

// // IMAGE STORAGE ENGINE


// const storage = multer.diskStorage({
//     destination:"uploads",
//     filename:(req,file,cb)=>{
//         return cb(null, `${Date.now()}${file.originalname}`)
//     }
// }) 

// const upload = multer({storage:storage})



// router.post("/add",upload.single("image"),addFood)

// router.get("/list",listFood)
// router.post("/remove",removeFood)


// module.exports = router


// const express = require("express");
// const multer = require("multer");
// const addFood = require("../controllers/foodController");
// const router = new express.Router();

// // IMAGE STORAGE ENGINE
// const storage = multer.diskStorage({
//     destination: "uploads",
//     filename: (req, file, cb) => {
//         return cb(null, `${Date.now()}${file.originalname}`);
//     },
// });

// const upload = multer({ storage: storage });

// router.post("/add", upload.single("image"), addFood);

// module.exports = router;

// routes/foodRoutes.js
const express = require('express');
const multer = require('multer');
const { addFood, removeFood, listFood } = require('../controllers/foodController');
const foodrouter = express.Router();

// IMAGE STORAGE ENGINE
const storage = multer.diskStorage({
  destination: "uploads",
  filename: (req, file, cb) => {
    return cb(null, `${Date.now()}${file.originalname}`);
  }
});

const upload = multer({ storage: storage });

foodrouter.post("/add", upload.single("image"), addFood);
foodrouter.get("/list", listFood);
foodrouter.post("/remove", express.json(), removeFood); // Ensure express.json() middleware is used

module.exports = foodrouter;
