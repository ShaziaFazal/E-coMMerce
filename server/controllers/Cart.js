const Cart = require("../models/Cart");
//add data in cart with product id and user id
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
//get data  against user id
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

//delete the data against user id and product id
const deleteCartItemByUserIdAndProductId = async (req, res) => {
  try {
    const { user_id, product_id } = req.params;

    const removeCartItem = await Cart.findOneAndDelete({
      user_id: user_id,
      product_id: product_id,
    });
    if (!removeCartItem) {
      return res.status(404).json({ message: "Data Not Found" });
    }
    res.status(200).json({ message: "Item removed from Cart" });
  } catch (error) {
    res.status(404).json({ message: error });
  }
};
//Delete the whole cart for the user id
const deleteCartByUserId = async (req, res) => {
  try {
    const { user_id } = req.params;

    const deleteCart = await Cart.deleteMany({
      user_id: user_id,
    });
    if (!deleteCart) {
      return res.status(404).json({ message: "Data Not Found" });
    }
    res.status(200).json({ message: " Cart Deleted!!" });
  } catch (error) {
    res.status(404).json({ message: error });
  }
};

module.exports = {
  addToCart,
  getCartItemByUserId,
  deleteCartItemByUserIdAndProductId,
  deleteCartByUserId,
};
