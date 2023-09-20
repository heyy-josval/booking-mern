const express = require("express");
const jwt = require("jsonwebtoken");
const JWT_KEY = process.env.JWT_KEY;

const app = express();

app.use(function (req, res, next) {
   const { authorization } = req.headers;

   try {
      if (!authorization) {
         return res
            .status(400)
            .json({ message: "Authorization header dont provided" });
      }

      const token = authorization.split(" ")[1];
      if (!token) {
         return res.status(400).json({
            mesagge: "Token dont provided, please use 'Bearer {token}'",
         });
      }

      jwt.verify(token, JWT_KEY, (err, decoded) => {
         if (err) {
            return res.json({
               message: "Failed to authenticate token.",
            });
         }
         req.user = decoded;
         next();
      });
   } catch (error) {
      return res.status(500).json({ message: error });
   }
});

module.exports = app;
