const express = require("express");

const router = express.Router();

const cartController = require("../controllers/Cart");

router.post("/addToCart", cartController.addToCart);
//get cartitem by user id
router.get("/cartitems/:user_id", cartController.getCartItemByUserId);

module.exports = router;
