const Auth = require("../models/auth");
const Cryptr = require("cryptr");
const cryptr = new Cryptr(process.env.SECRET_KEY);
const jwt = require("jsonwebtoken");

const signin = async (req, res) => {
   const { username, password } = req.body;

   if (!(username && password)) {
      return res.status(400).json({
         message: "All data is required",
      });
   }

   try {
      const existingUser = await Auth.findOne({ username });

      if (!existingUser) {
         return res.status(404).json({ message: "User does not exist." });
      }

      const decryptedPassword = cryptr.decrypt(existingUser.password);
      const isPasswordCorrect = password == decryptedPassword;

      if (!isPasswordCorrect) {
         return res.status(400).json({ message: "Invalid credentials." });
      }
      const token = jwt.sign(
         {
            username: existingUser.username,
            email: existingUser.email,
            id: existingUser._id,
            role: existingUser.role,
         },
         process.env.JWT_KEY,
         { expiresIn: "1d" }
      );

      res.status(200).json({ result: existingUser, token });
   } catch (error) {
      res.status(500).json({ message: "Something went wrong." });
   }
};

const signup = async (req, res) => {
   const { firstNames, lastNames, username, email, password } = req.body;

   if (!(firstNames && lastNames && username && email && password)) {
      return res.status(400).json({
         message: "All data is required",
      });
   }

   try {
      const existingUser = await Auth.findOne({ username });

      if (existingUser) {
         return res.status(400).json({ message: "This user if exists" });
      }

      const encryptedPassword = cryptr.encrypt(password);

      const newUser = new Auth({
         firstNames,
         lastNames,
         username,
         email,
         password: encryptedPassword,
         role: "user",
      });

      const userCreated = await newUser.save();

      if (!userCreated) {
         // console.log("user cannot be created");
         return res.status(500).json({ message: "User cannot be created" });
      } else {
         // console.log("User has been created to the database");
         return res
            .status(200)
            .json({ message: "User has been created to the database" });
      }
   } catch (error) {
      res.status(500).json({ message: "Something went wrong." });
   }
};

module.exports = { signin, signup };
