const express = require("express");

const app = express();

let userAllowedMethods = ["GET"];

app.use(function (req, res, next) {
  const { user, method } = req;
  // console.log(user);
  // console.log(method);

  // PARA USUARIO LOGUEADO
  if (user) {
    if (user.role == "admin") {
      return next();
    }
  }

  // PARA USUARIOS NO LOGUEADOS
  if (!user) {
    if (userAllowedMethods.includes(method)) {
      return next();
    }
    return res
      .status(500)
      .json({ message: "You dont have permission for this" });
  }

  return res.status(500).json({ message: "Only admins" });
});

module.exports = app;
