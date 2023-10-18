const mongoose = require("mongoose");

const roomSchema = mongoose.Schema(
  {
    hotel: { type: mongoose.Schema.Types.ObjectId, ref: "hotels" },
    title: String,
    description: String,
    size: String,
    price: mongoose.Schema.Types.Decimal128,
    rooms: Number,
    adults: Number,
    children: Number,
    beds: [String],
  },
  { timestamps: true }
);

const Rooms = mongoose.model("room", roomSchema);

module.exports = Rooms;
