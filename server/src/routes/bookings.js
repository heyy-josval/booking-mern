const express = require("express");
const {
  getBookings,
  getBooking,
  createBooking,
  updateBooking,
  deleteBooking,
} = require("../controllers/bookings");
const tokenMiddleware = require("../middlewares/token");
const middleware = require("../middlewares/bookings");

const router = express.Router();

router.use(tokenMiddleware);
router.use(middleware);
router.get("/", getBookings);
router.get("/:id", getBooking);
router.post("/", createBooking);
router.put("/:id", updateBooking);
router.delete("/:id", deleteBooking);

module.exports = router;
