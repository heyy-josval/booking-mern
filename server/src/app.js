const express = require("express");
const auth = require("./routes/auth");
const rooms = require("./routes/rooms");
const bookings = require("./routes/bookings");

const app = express();

app.use(express.json());

app.use("/api/auth", auth);
app.use("/api/rooms", rooms);
app.use("/api/bookings", bookings);

module.exports = app;
