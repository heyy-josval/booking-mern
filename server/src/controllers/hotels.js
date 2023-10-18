const Hotels = require("../models/hotels");

const getHotels = async (req, res) => {
  try {
    const hotels = await Hotels.find({});

    if (hotels.length == 0) {
      return res.status(404).json({
        message: "Not hotels created",
      });
    }

    return res.status(200).json(hotels);
  } catch (error) {
    return res.status(500).json();
  }
};

const getHotel = async (req, res) => {
  const { id } = req.params;
  // console.log(id);
  try {
    const hotel = await Hotels.findById(id);
    // console.log(room);
    if (!hotel) {
      return res.status(404).json({ message: "This hotel not exists" });
    }
    res.status(200).json(hotel);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

const createHotel = async (req, res) => {
  const { title, description, stars, country, district } = req.body;

  if (!(title && description && stars && country && district)) {
    return res.status(400).json({ message: "All data is required" });
  }

  const existingHotel = await Hotels.findOne({
    title,
    description,
    country,
    district,
  });

  if (existingHotel) {
    return res.status(400).json({ message: "This hotel already is exists" });
  }
  const newHotel = new Hotels({
    title,
    description,
    stars,
    country,
    district,
  });

  const hotelCreated = await newHotel.save();
  if (!hotelCreated) {
    return res.status(500).json({ message: "Hotel cannot be created" });
  } else {
    return res
      .status(200)
      .json({ message: "Hotel created", id: hotelCreated._id });
  }
};

const deleteHotel = async (req, res) => {
  const { id } = req.params;

  if (!id) {
    return res.status(400).json({
      message: "ID is required in the body params",
    });
  }

  const hotel = await Hotels.findById(id);

  if (!hotel) {
    return res.status(404).json({
      message: "This hotel not exists",
    });
  }

  try {
    await Hotels.findByIdAndDelete(id);
    return res.status(200).json({
      message: "Success, this hotel has been deleted!",
    });
  } catch (error) {
    return res.status(500).json({
      message: error,
    });
  }
};

const updateHotel = async (req, res) => {
  const { id } = req.params;

  if (!id) {
    return res.status(400).json({
      message: "ID is required in the body params",
    });
  }

  const hotel = await Hotels.findById(id);

  if (!hotel) {
    return res.status(404).json({
      message: "This hotel not exists",
    });
  }

  try {
    await Hotels.findByIdAndUpdate(id, req.body);
    return res.status(200).json({
      message: "Success, this hotel has been updated",
    });
  } catch (error) {
    return res.status(500).json({
      message: error,
    });
  }
};

module.exports = { getHotels, getHotel, createHotel, deleteHotel, updateHotel };
