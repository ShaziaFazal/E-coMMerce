/* eslint-disable no-undef */
const mongoose = require("mongoose");

const product = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  id: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  stock: {
    type: String,
    required: true,
  },
  sizes: [
    {
      size: { type: String, required: true },
    },
  ],
  description: {
    type: String,
    required: true
  },
  sizeChart: {
    type: String,
  },
  fabric: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  fit: {
    type: String,
    required: true,
  },
  modelFit: {
    type: String,
    required: true,
  },
  modelSize: {
    type: String,
    required: true,
  },
  deliveryDetails: {
    type: String,
    required: true,
  },
  note: {
    type: String,
    required: true,
  },
  images: {
    type: String,
    required: true,
  },
  discount: {
    type: String,
  },
  category: {
    type: String,
    required: true,
  },
});

const Product = mongoose.model("Product", product);
module.exports = Product;
