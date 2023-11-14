// const Usermiddleware = require('../Middleware/Usermiddleware.js');
const express = require("express");
const router = express.Router();
const productController = require("../controllers/product");

router.post("/createproduct", productController.addProduct);
router.get("/getallproducts", productController.getProducts);
router.get("/getProductById", productController.getProductById);
router.get(
  "/getProductsLowerToHigherPrice",
  productController.getProductsLowerToHigherPrice
);
router.get(
  "/getProductsHigherToLowerPrice",
  productController.getProductsHigherToLowerPrice
);

router.get("/getProductByCategory", productController.getProductsByCategory);

module.exports = router;
