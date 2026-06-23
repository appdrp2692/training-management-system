const router = require("express").Router();

const authController = require("../controllers/auth.controller");

const validate = require("../middlewares/validate.middleware");

const { registerSchema } = require("../validators/auth.validator");

router.post("/register",validate(registerSchema),authController.register);

router.post("/login",authController.login);

module.exports = router;