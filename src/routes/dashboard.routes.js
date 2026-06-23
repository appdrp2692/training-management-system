const router =
require("express").Router();

const controller = require("../controllers/dashboard.controller");

const auth = require("../middlewares/auth.middleware");

router.get("/stats",auth,controller.stats);

module.exports = router;