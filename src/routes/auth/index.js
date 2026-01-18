const express=require('express');
const { signupController,getUsersController,getUserByIdController,updateUserController,deleteUserController } = require('../../controllers/auth');

const router=express.Router();

router.post('/signup',signupController)
router.get('/',getUsersController)
router.get('/:id',getUserByIdController)
router.put('/:id',updateUserController)
router.delete('/:id',deleteUserController)

module.exports=router;