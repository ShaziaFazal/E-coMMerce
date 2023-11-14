const Cart = require("../models/Cart");

const addToCart = async (req, res) => {
  const { user_id, product_id, quantity, selectedSize } = req.body;
  try {
    const cart = new Cart({
      user_id,
      product_id,
      quantity,
      selectedSize,
    });

    await cart.save();
    res.status(201).json({ message: "Added To cart sucessfully!" });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

const getCartItemByUserId = async (req, res) => {
  try {
    const { user_id } = req.params;

    const cartItem = await Cart.find({
      user_id: user_id,
    })
      .populate("product_id")
      .populate("user_id");

    res.status(200).json(cartItem);
  } catch (error) {
    res.status(404).json({ message: error });
  }
};

module.exports = { addToCart, getCartItemByUserId };
