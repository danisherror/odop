const express=require("express");
const router=express.Router();
const {addproduct,viewproduct} =require("../controllers/productController");


router.route("/addproduct/:token").post(addproduct)
router.route("/viewproduct/:token").get(viewproduct)
// router.route("/recordview/:token").get(recordview)

module.exports=router