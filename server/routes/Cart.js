const express = require("express");

const router = express.Router();

const cartController = require("../controllers/Cart");

router.post("/addToCart", cartController.addToCart);
//get cartitem by user id
router.get("/cartitems/:user_id", cartController.getCartItemByUserId);
//remove the item from cart
router.delete(
  "/removeItem/:user_id/:product_id",
  cartController.deleteCartItemByUserIdAndProductId
);
//delete the cart for the user Id
router.delete("/placeOrder/:user_id", cartController.deleteCartByUserId);

module.exports = router;
