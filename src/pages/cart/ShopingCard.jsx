import Footer from "../../components/Footer/Footer";
import Marquee from "../../components/Marquee/Marquee";
import ShoppingCart from "../../components/ShopingCart/ShopingCart";
import { useEffect, useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";

function ShopingCard() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const productId = searchParams.get("productId");
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));

  const [cartItems, setCartItems] = useState([]);

  const subtotal = cartItems.reduce(
    (total, item) => total + item.product_id.price * item.quantity,
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

  useEffect(() => {
    axios
      .get(`http://localhost:4000/cart/cartitems/${currentUser._id}`)
      .then((response) => {
        setCartItems(response.data);
      });
  }, [currentUser._id, productId]);

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
