const express=require('express');
const router=express.Router();

const boxController=require('../controllers/box_controller');

router.get('/box',boxController.box);

module.exports=router;