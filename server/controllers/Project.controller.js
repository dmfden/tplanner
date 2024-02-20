const {User, Project, Task} = require('../models');
const NotFoundError = require('../errors/NotFoundError');

module.exports.createOne = async (req, res, next)=> {
    try {
        const {body} = req;
        if(!body.userId){
            throw new NotFoundError("Id was not provided");
        }

        const project = await Project.create(body);
        res.status(201).send({data: project});
        
    } catch (error) {
        next(error);
    }

}


module.exports.getOne = async (req, res, next) => {
    try {
        const {params: {projectId}} = req;
        const project = await Project.findByPk(projectId, {
            attributes: {
                exclude: ['createdAt', 'updatedAt']
            }
        });
        
        if(project) {
            res.status(200).send({data: project}); 
        }else{
            throw new NotFoundError('Project not founded');
        }
    } catch(error) {
        next(error);
    }
}


module.exports.getAllById = async (req, res, next) => {
    try {
        const {params: {userId}} = req;
        const projects = await Project.findAll({
            where: {
                userId: Number(userId),
            },
            attributes: {
                exclude: ['createdAt', 'updatedAt']
            }
        });
        
        if(projects) {
            res.status(200).send({data: projects}); 
        }else{
            throw new NotFoundError('Projects not founded');
        }
    } catch(error) {
        next(error);
    }
}