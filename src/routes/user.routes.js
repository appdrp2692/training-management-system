const router =
require("express").Router();

const userController = require("../controllers/user.controller");

const auth = require("../middlewares/auth.middleware");

router.get("/",auth,userController.getUsers);

router.get("/:id",auth,userController.getUserById);

router.delete("/:id",auth,userController.deleteUser);

module.exports = router;