const mongoose = require("mongoose");

const MONGO_URI = process.env.MONGO_URI;

const connectDB = async () => {
   await mongoose
      .connect(MONGO_URI)
      .then(() => {
         console.log("MongoDB connected!");
      })
      .catch((e) => {
         console.log("Error", e);
      });
};

module.exports = { connectDB };
