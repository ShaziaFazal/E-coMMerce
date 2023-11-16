// routes/checkoutRoutes.js
const express = require("express");
const router = express.Router();
const checkoutController = require("../controllers/checkOut");

router.post(
  "/create-checkout-session",
  checkoutController.createCheckoutSession
);

module.exports = router;
