const yup = require("yup");

const createUserSchema =
yup.object({
  name: yup.string().required(),
  email: yup.string().email().required(),
  role: yup.string().required()
});

module.exports = {
  createUserSchema
};