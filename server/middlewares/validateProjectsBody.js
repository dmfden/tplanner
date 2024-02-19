const {projectScheme} = require('../validations/schemes/projectScheme');

module.exports.validateProjectsBody = async (req, res, next) => {
    try {
        const {body} = req;
        const validBody = await projectScheme.validate(body);
        req.body = validBody;
        next();
    } catch (error) {
        next(error);
    }
}