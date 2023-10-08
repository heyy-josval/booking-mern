const mongoose = require("mongoose");

const bookingSchema = mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "auths" },
  room: { type: mongoose.Schema.Types.ObjectId, ref: "rooms" },
  phone: String,
  adults: Number,
  children: Number,
  startDate: Date,
  endDate: Date,
  cardType: String,
  cardNum: String,
});

const Bookings = mongoose.model("booking", bookingSchema);

module.exports = Bookings;
