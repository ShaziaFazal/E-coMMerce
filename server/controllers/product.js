const Product = require("../models/product");

const addProduct = async (req, res) => {
  try {
    const {
      title,
      id,
      price,
      stock,
      sizes,
      description,
      sizeChart,
      fabric,
      content,
      fit,
      modelFit,
      modelSize,
      deliveryDetails,
      note,
      images,
      discount,
      category,
    } = req.body;
    const newProduct = new Product({
      title,
      id,
      price,
      stock,
      sizes,
      description,
      sizeChart,
      fabric,
      content,
      fit,
      modelFit,
      modelSize,
      deliveryDetails,
      note,
      images,
      discount,
      category,
    });
    await newProduct.save();
    res.status(201).json(newProduct);
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
};

const getProducts = async (req, res) => {
  try {
    const response = await Product.find();
    res.status(201).send(response);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};
// gets product by id
const getProductById = async (req, res) => {
  const { id } = req.body;
  try {
    const response = await Product.find({ _id: id });
    res.status(201).send(response);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};
//gets producrt in ascending order of data lower price to highest
const getProductsLowerToHigherPrice = async (req, res) => {
  try {
    const response = await Product.find().sort({ price: 1 });
    res.status(201).send(response);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};
//gets producrt in descending order of data highest to lower price
const getProductsHigherToLowerPrice = async (req, res) => {
  try {
    const response = await Product.find().sort({ price: -1 });
    res.status(201).send(response);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};
//gets all data according to category
const getProductsByCategory = async (req, res) => {
  const { category } = req.body;
  try {
    const response = await Product.find({ category: category });
    res.status(201).send(response);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

module.exports = {
  addProduct,
  getProducts,
  getProductById,
  getProductsLowerToHigherPrice,
  getProductsHigherToLowerPrice,
  getProductsByCategory,
};
