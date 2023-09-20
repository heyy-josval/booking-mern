const express = require("express");
const { signin, signup } = require("../controllers/auth");
const middleware = require("../middlewares/auth");

const router = express.Router();

router.use(middleware);
router.post("/", signin);
router.post("/register", signup);

module.exports = router;
