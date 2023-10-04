const mongoose = require("mongoose");

const roomSchema = mongoose.Schema({
   // urlImg: { type: String, required: true },
   title: String,
   // titleHeader: { type: String, required: true },
   description: String,
   // header: { type: String, required: true },
   // subHeader: { type: String, required: true },
   // view: { type: String, required: true },
   size: String,
   adults: Number,
   children: Number,
   bed: String,
   // amenities: { type: [String], required: true },
   // subImage: { type: String, required: true },
   rooms: Number,
   price: Number,
});

const Rooms = mongoose.model("room", roomSchema);

module.exports = Rooms;
