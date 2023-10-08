const express = require("express");

const app = express();

app.use(function (req, res, next) {
  const { user } = req;
  // console.log(user);
  // console.log(method);
  // console.log("Time:", Date.now());
  //
  if (user.role != "user") {
    return res.status(401).json({ message: "You dont have permission!" });
  }
  next();
});

module.exports = app;
