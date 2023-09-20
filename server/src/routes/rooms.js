const express = require("express");
const { getRooms, getRoom, createRoom } = require("../controllers/rooms");
const tokenMiddleware = require("../middlewares/token");
const middleware = require("../middlewares/rooms");

const router = express.Router();

router.use(tokenMiddleware);
router.use(middleware);
router.get("/", getRooms);
router.get("/:id", getRoom);
router.post("/", createRoom);

module.exports = router;
