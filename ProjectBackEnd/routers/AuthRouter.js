const express=require('express')
const {AuthController}= require('../controllers')

const router=express.Router()


router.post("/userRegister", AuthController.userRegister);
router.post('/loginUser',AuthController.userLogin)

module.exports = router;
