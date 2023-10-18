const express = require("express");
const {
  getRooms,
  getRoom,
  createRoom,
  deleteRoom,
  updateRoom,
} = require("../controllers/rooms");
const middleware = require("../middlewares/rooms");

const router = express.Router();

router.use(middleware);
router.get("/", getRooms);
router.get("/:id", getRoom);
router.post("/create", createRoom);
router.put("/:id", updateRoom);
router.delete("/:id", deleteRoom);

module.exports = router;
