const yup = require("yup");

const registerSchema =
yup.object({

 name: yup.string().required(),

 email: yup
 .string()
 .email()
 .required(),

 password: yup
 .string()
 .min(6)
 .required()
});

module.exports = {
 registerSchema
};