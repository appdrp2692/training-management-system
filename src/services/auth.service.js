const User = require("../models/User");

const createUser = async(data)=>{
 return User.create(data);
};

const findByEmail = async(email)=>{
 return User.findOne({email});
};

module.exports = {
 createUser,
 findByEmail
};