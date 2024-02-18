const express = require('express');
const userRouter = express.Router();
const userController = require('../controllers/User.controller');

userRouter.post('/', userController.createOne); // CREATE USER
userRouter.get('/', userController.getAll);     // GET ALL USERS
userRouter.get('/:userId', userController.getOne); // GET USER BY ID
userRouter.put('/:userId', userController.updateOne);
userRouter.delete('/:userId', userController.deleteOne); // DELETE USER BY ID


module.exports = userRouter;