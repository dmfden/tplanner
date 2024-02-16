const express = require('express');
const userRouter = express.Router();
const userController = require('../controllers/User.controller');

userRouter.post('/', userController.createOne);
userRouter.get('/', userController.getAll);
userRouter.get('/:userId', userController.getOne);
userRouter.put('/:userId', userController.updateOne);
userRouter.delete('/:userId', userController.deleteOne);


module.exports = userRouter;