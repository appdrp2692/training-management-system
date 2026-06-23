const router =
require("express").Router();

const controller = require("../controllers/course.controller");

const auth = require("../middlewares/auth.middleware");

router.post("/",auth,controller.createCourse);

router.get("/",auth,controller.getCourses);

module.exports = router;