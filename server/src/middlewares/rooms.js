const express = require("express");

const app = express();
const methodsNotAllowed = ["POST", "PUT", "DELETE"];

app.use(function (req, res, next) {
   const { method, user } = req;
   console.log(user);
   // console.log(method);
   // console.log("Time:", Date.now());
   if (!methodsNotAllowed.includes(method)) {
      return next();
   }
   if (user.role != "admin") {
      return res.status(401).json({ message: "You dont have permission!" });
   }
   next();
});

module.exports = app;
