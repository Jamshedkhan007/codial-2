const express=require('express');

const router=express.Router();
const homeController=require('../controllers/home_controller');

console.log("router Loaded")

router.get('/',homeController.home);
router.use('/user',require('./user'));
router.use('/box',require('./box'));

module.exports=router;