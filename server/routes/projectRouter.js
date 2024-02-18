const express = require('express');
const projectRouter = express.Router();
const projectController = require('../controllers/Project.controller');


projectRouter.post('/', projectController.createOne); // CREATE PROJECT
projectRouter.get('/:projectId', projectController.getOne);     // GET PROJECT BY PROJECT ID
// userRouter.get('/:userId', userController.getOne); // GET USER BY ID
// userRouter.put('/:userId', userController.updateOne);
// userRouter.delete('/:userId', userController.deleteOne); // DELETE USER BY ID


module.exports = projectRouter;