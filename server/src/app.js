const express = require("express");
const auth = require("./routes/auth");
const rooms = require("./routes/rooms");

const app = express();

app.use(express.json());

app.use("/auth", auth);
app.use("/rooms", rooms);

module.exports = app;
