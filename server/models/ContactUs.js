/* eslint-disable no-undef */
const mongoose = require("mongoose");

const contactUs = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
    trim: true,
  },
  mail: {
    type: String,
    required: true,
    trim: true,
  },
  subject: {
    type: String,
    required: true,
    minlength: 8, // Minimum password length
  },
  message: {
      type: String,
      required: true
    },
});

module.exports = mongoose.model("ContactUs", contactUs);
