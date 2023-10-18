const express = require("express");
const cors = require("cors");
const auth = require("./routes/auth");
const hotels = require("./routes/hotels");
const rooms = require("./routes/rooms");
const bookings = require("./routes/bookings");

const app = express();

app.use(express.json());
app.use(cors());

app.use("/api/auth", auth);
app.use("/api/hotels", hotels);
app.use("/api/rooms", rooms);
app.use("/api/bookings", bookings);

module.exports = app;
