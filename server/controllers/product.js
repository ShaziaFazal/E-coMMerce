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
  const { _id } = req.query; // Accessing the id from the query parameters

  try {
    const response = await Product.findOne(_id);
    console.log(response, "response");
    if (!response) {
      res.status(404).send({ error: "Product not found" });
      return;
    }

    res.status(200).send(response);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};
//gets producrt according to price filter
const getProductsAccordingToPriceFilter = async (req, res) => {
  const { filter } = req.query;
  try {
    if (filter === "Price Low To High") {
      const response = await Product.find().sort({ price: 1 });
      res.status(201).send(response);
    } else {
      const response = await Product.find().sort({ price: -1 });
      res.status(201).send(response);
    }
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

//gets all data according to category
const getProductsByCategory = async (req, res) => {
  const { category } = req.query;
  console.log(category);
  try {
    const response = await Product.find({ category: category });
    //console.log("response",response);
    res.status(201).send(response);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

module.exports = {
  addProduct,
  getProducts,
  getProductById,
  getProductsAccordingToPriceFilter,
  getProductsByCategory,
};
