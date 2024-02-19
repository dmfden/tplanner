const yup = require('yup');

module.exports.userCreateSchema = yup.object({
    firstName: yup.string().required('firstName is Required').typeError("firstName must be a string"),
    lastName: yup.string().required('lastName is Required').typeError("lastName must be a string"),
    email: yup.string().email("Invalid email").required().typeError("Invalid email must be a string"),
    password: yup.string().required().typeError("Invalid password must be a string"),
    birthday: yup.date('invalid date').required()
}).noUnknown();