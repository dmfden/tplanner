const express = require('express');
const userRouter = require('./userRouter');
const projectRouter = require('./projectRouter');
// const taskRouter = require('./taskRouter');
// const groupRouter = require('./groupRouter');

const rootRouter = express.Router();


rootRouter.use('/users', userRouter);
rootRouter.use('/projects', projectRouter);
// rootRouter.use('/tasks', taskRouter);
// rootRouter.use('/groups', groupRouter);

module.exports = rootRouter;