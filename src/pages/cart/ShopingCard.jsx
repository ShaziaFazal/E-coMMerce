import Footer from "../../components/Footer/Footer";
import Marquee from "../../components/Marquee/Marquee";
import ShoppingCart from "../../components/ShopingCart/ShopingCart";
import { useEffect } from "react";

function ShopingCard() {
  const cartItems = [
    {
      id: 1,
      name: "Throwback Hip Bag",
      price: 90.0,
      quantity: 1,
      src: "https://media.istockphoto.com/id/1365118618/photo/blue-fashion-purse-handbag-on-white-background-isolated.webp?b=1&s=170667a&w=0&k=20&c=R6fr0o1pCkSFP8Q6q84M8NraLXXlMHtNG93fx8G_NYY=",
    },
    {
      id: 1,
      name: "Throwback Hip Bag",
      price: 90.0,
      quantity: 1,
      src: "https://media.istockphoto.com/id/1365118618/photo/blue-fashion-purse-handbag-on-white-background-isolated.webp?b=1&s=170667a&w=0&k=20&c=R6fr0o1pCkSFP8Q6q84M8NraLXXlMHtNG93fx8G_NYY=",
    },
    // ... other items
  ];

  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const handleRemoveItem = (itemId) => {
    // Logic to remove item from the cart
  };

  const handleCheckout = () => {
    // Logic to handle checkout
    window.location.href = "/cart/checkout";
  };

  const handleContinueShopping = () => {
    // Logic to continue shopping
    window.location.href = "/";
  };

  return (
    <div>
      <Marquee />
      <div className="py-8">
        <ShoppingCart
          cartItems={cartItems}
          subtotal={subtotal}
          onRemoveItem={handleRemoveItem}
          onCheckout={handleCheckout}
          onContinueShopping={handleContinueShopping}
        />
      </div>
      <Footer />
    </div>
  );
}

export default ShopingCard;
