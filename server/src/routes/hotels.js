const express = require("express");
const {
  getHotels,
  getHotel,
  createHotel,
  deleteHotel,
  updateHotel,
} = require("../controllers/hotels");
const middleware = require("../middlewares/hotels");
const token = require("../middlewares/token");

const router = express.Router();

router.use(token);
router.use(middleware);
router.get("/", getHotels);
router.get("/:id", getHotel);
router.post("/create", createHotel);
router.put("/:id", updateHotel);
router.delete("/:id", deleteHotel);

module.exports = router;
