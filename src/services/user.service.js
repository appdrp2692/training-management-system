const User =
require("../models/User");

const getUsers = () => {
  return User.find();
};

const getUserById = (id) => {
  return User.findById(id);
};

const deleteUser = (id) => {
  return User.findByIdAndDelete(id);
};

module.exports = {
  getUsers,
  getUserById,
  deleteUser
};