const authService = require("../services/auth.service");

const {
  generateToken
} = require("../utils/jwt");

const {
  successResponse,
  errorResponse
} = require("../utils/response");

const register = async (req, res) => {
  try {
    const existingUser =
      await authService.findByEmail(
        req.body.email
      );

    if (existingUser) {
      return errorResponse(
        res,
        "Email already exists",
        400
      );
    }

    const user =
      await authService.createUser(
        req.body
      );

    successResponse(
      res,
      "User registered successfully",
      {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role
      },
      201
    );

  } catch (error) {
    return errorResponse(
      res,
      error.message,
      500
    );
  }
};

const login = async (req, res) => {
  try {

    const { email, password } =
      req.body;

    const user =
      await authService.findByEmail(
        email
      );

    if (!user) {
      return errorResponse(
        res,
        "Invalid credentials",
        401
      );
    }

    const isMatch =
      await user.comparePassword(
        password
      );

    if (!isMatch) {
      return errorResponse(
        res,
        "Invalid credentials",
        401
      );
    }

    const token =
      generateToken({
        id: user._id,
        role: user.role
      });

    successResponse(
      res,
      "Login successful",
      {
        token,
        user: {
          id: user._id,
          name: user.name,
          email: user.email,
          role: user.role
        }
      }
    );

  } catch (error) {
    return errorResponse(
      res,
      error.message,
      500
    );
  }
};

module.exports = {
  register,
  login
};