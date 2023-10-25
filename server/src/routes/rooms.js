const express = require("express");
const {
  getRooms,
  getRoom,
  createRoom,
  deleteRoom,
  updateRoom,
  getRoomByHotelId,
} = require("../controllers/rooms");
const middleware = require("../middlewares/rooms");
const token = require("../middlewares/token");

const router = express.Router();

router.use(token);
router.use(middleware);
router.get("/", getRooms);
router.get("/:id", getRoom);
router.get("/hotel/:hotelId", getRoomByHotelId);
router.post("/create", createRoom);
router.put("/:id", updateRoom);
router.delete("/:id", deleteRoom);

module.exports = router;
