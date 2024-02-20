const express = require('express');
const projectRouter = express.Router();
const projectController = require('../controllers/Project.controller');
const  {validateProjectsBody} = require('../middlewares');


projectRouter.post('/',validateProjectsBody, projectController.createOne); // CREATE PROJECT
projectRouter.get('/:projectId', projectController.getOne);     // GET PROJECT BY PROJECT ID
projectRouter.get('/user/:userId', projectController.getAllById);     // GET ALL PROJECTS BY USERID
// userRouter.get('/:userId', userController.getOne); // GET USER BY ID
// userRouter.put('/:userId', userController.updateOne);
// userRouter.delete('/:userId', userController.deleteOne); // DELETE USER BY ID


module.exports = projectRouter;