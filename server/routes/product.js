// const Usermiddleware = require('../Middleware/Usermiddleware.js');
const express = require("express");
const router = express.Router();
const productController = require("../controllers/product");

router.post("/createproduct", productController.addProduct);
router.get("/getallproducts", productController.getProducts);
router.get("/getProductById", productController.getProductById);
router.get(
  "/getProductsAccordingToPriceFilter",
  productController.getProductsAccordingToPriceFilter
);
router.delete("/deleteProdById", productController.deleteById);
router.get("/getProductByCategory", productController.getProductsByCategory);
// router.post("/payment",productController.postPayment);
router.get("/products/search", productController.searchProducts);
module.exports = router;
