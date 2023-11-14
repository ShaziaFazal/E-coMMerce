const express = require('express');
const router = express.Router();
const orderController = require("../controllers/order");

router.post('/createOrder', orderController.createOrder)
router.get("/orders", orderController.getOrders);

module.exports = router