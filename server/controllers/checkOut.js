// controllers/checkoutController.js
const stripe = require("stripe")(process.env.STRIPE_SECRET);
// const Product = require("../models/product");

const createCheckoutSession = async (req, res) => {
  try {
    const { products, quantity } = req.body;
    console.log(products, "products");

    const lineItems = products.map((product) => ({
      price_data: {
        currency: "pkr",
        product_data: {
          name: product?.product_id.title,
          images: [product?.product_id?.images[0]?.src], // Assuming you want to use the first image
        },
        unit_amount: product?.product_id.price * 100,
      },
      quantity: quantity, // You may need to adjust this based on your requirements
    }));

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: lineItems,
      mode: "payment",
      success_url: "http://localhost:5173/cart/success",
      cancel_url: "http://localhost:5173/cart/cancel",
    });

    res.json({ id: session.id });
  } catch (error) {
    console.error("Error creating checkout session:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = { createCheckoutSession };
