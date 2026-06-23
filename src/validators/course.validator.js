const yup = require("yup");

const createCourseSchema =
yup.object({

  title: yup
    .string()
    .required(),

  description: yup
    .string()
    .required(),

  trainer: yup
    .string()
    .required()
});

module.exports = {
  createCourseSchema
};