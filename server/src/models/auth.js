const mongoose = require("mongoose");

const authSchema = mongoose.Schema({
   names: { type: String, required: true },
   lastnames: { type: String, required: true },
   username: { type: String, required: true },
   password: { type: String, required: true },
   role: { type: String, required: true },
});

const Auth = mongoose.model("auth", authSchema);

module.exports = Auth;
