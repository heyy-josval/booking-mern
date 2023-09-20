const express = require("express");
const {
   getRooms,
   getRoom,
   createRoom,
   deleteRoom,
} = require("../controllers/rooms");
const tokenMiddleware = require("../middlewares/token");
const middleware = require("../middlewares/rooms");

const router = express.Router();

router.use(tokenMiddleware);
router.use(middleware);
router.get("/", getRooms);
router.get("/:id", getRoom);
router.post("/", createRoom);
router.delete("/:id", deleteRoom);

module.exports = router;
