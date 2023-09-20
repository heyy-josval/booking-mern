const Rooms = require("../models/rooms");
const Cryptr = require("cryptr");
const cryptr = new Cryptr(process.env.SECRET_KEY);
const jwt = require("jsonwebtoken");

const getRooms = async (req, res) => {
   try {
      const rooms = await Rooms.find({});

      if (!rooms) {
         return res.status(404).json({
            message: "Not rooms created",
         });
      }

      console.log(rooms);

      return res.status(200).json(rooms);
   } catch (error) {
      return res.status(500).json();
   }
};

const getRoom = async (req, res) => {
   const { id } = req.params;
   console.log(id);
   try {
      const room = await Rooms.findById(id);
      console.log(room);
      if (!room) {
         return res.status(404).json({ message: "This room not exists" });
      }
      res.status(200).json(room);
   } catch (error) {
      res.status(404).json({ message: error.message });
   }
};

const createRoom = async (req, res) => {
   const { title, description, size, price, rooms, adults, children, bed } =
      req.body;

   if (!(title && description && size && price)) {
      return res.status(400).json({ message: "All data is required" });
   }

   const existingRoom = await Rooms.findOne({
      title,
      size,
      rooms,
      price,
      adults,
      children,
      bed,
   });

   if (existingRoom) {
      return res.status(400).json({ message: "This room already is exists" });
   }
   const newRoom = new Rooms({
      title,
      description,
      size,
      adults,
      children,
      bed,
      rooms,
      price,
   });

   const roomCreated = await newRoom.save();
   if (!roomCreated) {
      return res.status(500).json({ message: "Room cannot be created" });
   } else {
      return res
         .status(200)
         .json({ message: "Room created", id: roomCreated._id });
   }
};

const deleteRoom = async (req, res) => {
   const { id } = req.params;

   if (!id) {
      return res.status(400).json({
         message: "ID is required in the body params",
      });
   }

   const room = await Rooms.findById(id);

   if (!room) {
      return res.status(404).json({
         message: "This room not exists",
      });
   }

   try {
      await Rooms.findByIdAndDelete(id);
      return res.status(200).json({
         message: "Success, this room has been deleted!",
      });
   } catch (error) {
      return res.status(500).json({
         message: error,
      });
   }
};

const updateRoom = async (req, res) => {
   const { id } = req.params;

   if (!id) {
      return res.status(400).json({
         message: "ID is required in the body params",
      });
   }

   const room = await Rooms.findById(id);

   if (!room) {
      return res.status(404).json({
         message: "This room not exists",
      });
   }

   try {
      await Rooms.findByIdAndUpdate(id, req.body);
      return res.status(200).json({
         message: "Success, this room has been updated",
      });
   } catch (error) {
      return res.status(500).json({
         message: error,
      });
   }
};

module.exports = { getRooms, getRoom, createRoom, deleteRoom, updateRoom };
