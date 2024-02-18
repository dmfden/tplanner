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