const express=require('express');
const router=express.Router();
const imageControllerController=require('../controllers/imageController');
router.get("/", imageControllerController.displayImage);
module.exports=router;