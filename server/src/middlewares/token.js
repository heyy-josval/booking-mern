const express = require("express");
const jwt = require("jsonwebtoken");
const Auth = require("../models/auth");
const JWT_KEY = process.env.JWT_KEY;

const app = express();

const allowedRoutes = ["GET"];

app.use(function (req, res, next) {
  const { authorization } = req.headers;
  const { method } = req;

  try {
    if (allowedRoutes.includes(method)) {
      return next();
    }
    if (!authorization) {
      return next();
    }

    const token = authorization.split(" ")[1];
    if (token) {
      jwt.verify(token, JWT_KEY, async (err, decoded) => {
        if (err) {
          return res.json({
            message: "Failed to authenticate token.",
          });
        }
        const userDB = await Auth.findById(decoded.id);
        req.user = {
          ...userDB._doc,
          password: "",
        };
        next();
      });
    }
  } catch (error) {
    return res.status(500).json({ message: error });
  }
});

module.exports = app;
