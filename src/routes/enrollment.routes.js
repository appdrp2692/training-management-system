const router =
require("express").Router();

const controller = require("../controllers/enrollment.controller");

const auth = require("../middlewares/auth.middleware");

router.post("/",auth,controller.enroll);

router.get("/",auth,controller.getEnrollments);

module.exports = router;