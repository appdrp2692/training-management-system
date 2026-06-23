const userService = require("../services/user.service");

const { successResponse } = require("../utils/response");

exports.getUsers = async (req, res) => {
  const users = await userService.getUsers();

  successResponse(res, "Users fetched", users);
};

exports.getUserById = async (req, res) => {
  const user = await userService.getUserById(req.params.id);

  successResponse(res, "User fetched", user);
};

exports.deleteUser = async (req, res) => {
  await userService.deleteUser(req.params.id);

  successResponse(res, "User deleted");
};
