const mongoose = require("mongoose");

const hotelSchema = mongoose.Schema(
  {
    title: String,
    description: String,
    stars: Number,
    country: String,
    district: String,
  },
  { timestamps: true }
);

const Hotel = mongoose.model("hotel", hotelSchema);

module.exports = Hotel;
