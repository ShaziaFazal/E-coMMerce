const express = require("express");
const router = express.Router();
const categoryController = require("../controllers/Category");

router.post("/createCategory",categoryController.postCategory);
router.get("/getAllCategories",categoryController.getAllCategories);

module.exports = router