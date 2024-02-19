const {userCreateSchema} = require('../validations/schemes/usersSchema');

module.exports.validateUserBody = async (req, res, next) => {
    try {
        const {body} = req;
        const validBody = await userCreateSchema.validate(body);
        req.body = validBody;
        next();
    } catch (error) {
        next(error);
    }
}