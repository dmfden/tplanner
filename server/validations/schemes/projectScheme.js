const yup = require('yup');

module.exports.projectScheme = yup.object().shape({
    userId: yup.string().required('heroId is required').typeError("heroId must be a string"),
    title: yup.string().required('title is required').typeError("title must be a string"),
    color: yup
    .string()
    .nullable()
    .notRequired()
    .when('color', {
        is: (value) => value?.length,
        then: (rule) => rule.min(3),
    }),
},    [
    // Add Cyclic deps here because when require itself
    ['color', 'color'],
]).noUnknown();