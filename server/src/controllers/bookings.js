const Bookings = require("../models/bookings");

const getBookings = async (req, res) => {
  try {
    const bookings = await Bookings.find({});

    if (bookings.length == 0) {
      return res.status(404).json({
        message: "Not bookings created",
      });
    }

    return res.status(200).json(bookings);
  } catch (error) {
    return res.status(500).json();
  }
};

const getBooking = async (req, res) => {
  const { id } = req.params;
  // console.log(id);
  try {
    const booking = await Bookings.findById(id);
    // console.log(booking);
    if (!booking) {
      return res.status(404).json({ message: "This booking not exists" });
    }
    res.status(200).json(room);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

const createBooking = async (req, res) => {
  const {
    user,
    room,
    phone,
    adults,
    children,
    startDate,
    endDate,
    cardType,
    cardNum,
  } = req.body;

  const requiredFields = [
    "user",
    "room",
    "phone",
    "adults",
    "children",
    "startDate",
    "endDate",
    "cardType",
    "cardNum",
  ];
  if (
    !requiredFields.every((field) => req.body[field])
  ) {
    return res.status(400).json({ message: "All data is required" });
  }

  const booking = {
    user,
    room,
    phone,
    adults,
    children,
    startDate,
    endDate,
    cardType,
    cardNum,
  };

  const existingBooking = await Bookings.findOne(booking);

  if (existingBooking) {
    return res.status(400).json(
      {
        message: "This booking already is exists",
      },
    );
  }

  const newBooking = new Bookings(booking);

  const bookingCreated = await newBooking.save();
  if (!bookingCreated) {
    return res.status(500).json({ message: "Booking cannot be created" });
  } else {
    return res
      .status(200)
      .json({ message: "Booking created", id: bookingCreated._id });
  }
};

const deleteBooking = async (req, res) => {
  const { id } = req.params;

  if (!id) {
    return res.status(400).json({
      message: "ID is required in the body params",
    });
  }

  const booking = await Bookings.findById(id);

  if (!booking) {
    return res.status(404).json({
      message: "This booking not exists",
    });
  }

  try {
    await Bookings.findByIdAndDelete(id);
    return res.status(200).json({
      message: "Success, this booking has been deleted!",
    });
  } catch (error) {
    return res.status(500).json({
      message: error,
    });
  }
};

const updateBooking = async (req, res) => {
  const { id } = req.params;

  if (!id) {
    return res.status(400).json({
      message: "ID is required in the body params",
    });
  }

  const booking = await Bookings.findById(id);

  if (!booking) {
    return res.status(404).json({
      message: "This booking not exists",
    });
  }

  try {
    await Bookings.findByIdAndUpdate(id, req.body);
    return res.status(200).json({
      message: "Success, this booking has been updated",
    });
  } catch (error) {
    return res.status(500).json({
      message: error,
    });
  }
};

module.exports = {
  getBookings,
  getBooking,
  createBooking,
  deleteBooking,
  updateBooking,
};
