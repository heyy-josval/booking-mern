const mongoose = require("mongoose");

const authSchema = mongoose.Schema({
  firstNames: { type: String, required: true },
  lastNames: { type: String, required: true },
  username: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  role: { type: String, required: true },
}, { timestamps: true });

const Auth = mongoose.model("auth", authSchema);

module.exports = Auth;
