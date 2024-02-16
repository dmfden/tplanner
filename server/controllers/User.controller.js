const {User} = require('../models');
const NotFoundError = require('../errors/NotFoundError');

module.exports.createOne = async (req, res, next)=> {
    try {
        const {body} = req;
        const user = await User.create(body);
        res.status(201).send({data: user});
        
    } catch (error) {
        res.status(400).send(error);
    }
   

}

module.exports.getAll = async (req, res, next) => {
    try {
        const users = await User.findAll();
        res.status(200).send({data: users});
    } catch (error) {
        next(error);
    }
}

module.exports.getOne = async (req, res, next) => {
    try {
        const {params: {userId}} = req;
        const user = await User.findByPk(userId, {
            attributes: {
                exclude: ['password']
            }
        });
        
        if(user) {
            res.status(200).send({data: user}); 
        }else{
            throw new NotFoundError('User not found');
        }
    } catch(error) {
        next(error);
    }
}

module.exports.updateOne = async (req, res, next)=> {
    try {
        const {body, params: {userId}} = req;
        const user = await User.findByPk(userId);
        
        if(user) {
            user.update(body);
            res.status(200).send({data: user}); 
        }else{
            throw new NotFoundError('User not found');
        }
    } catch(error) {
        next(error);
    }
    
}

module.exports.deleteOne = async (req, res, next)=> {
    try {
        const {params: {userId}} = req;
           const foundUser = await User.findByPk(userId);
        
        if(foundUser) {
            const deleted = await foundUser.destroy();
            res.status(200).send({data: deleted});
        }else{
            throw new NotFoundError('User not found');
        }
    } catch(error) {
        next(error);
    }
}