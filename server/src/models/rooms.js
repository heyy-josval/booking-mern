const mongoose = require("mongoose");

const roomSchema = mongoose.Schema({
   // urlImg: { type: String, required: true },
   title: { type: String, required: true },
   // titleHeader: { type: String, required: true },
   description: { type: String, required: true },
   // header: { type: String, required: true },
   // subHeader: { type: String, required: true },
   // view: { type: String, required: true },
   size: { type: String, required: true },
   adults: { type: Number, required: true },
   children: { type: Number, required: true },
   bed: { type: String, required: true },
   // amenities: { type: [String], required: true },
   // subImage: { type: String, required: true },
   rooms: { type: Number, required: true },
   price: { type: Number, required: true },
});

const Rooms = mongoose.model("room", roomSchema);

module.exports = Rooms;
