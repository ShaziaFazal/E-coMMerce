import { useEffect, useState } from "react";
import axios from "axios";
import ShoppingCart from "../../components/ShopingCart/ShopingCart";
import HeaderOnlyLayout from "../../components/layouts/HeaderOnlyLayout";

function ShopingCard() {
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);

  const subtotal = cartItems.reduce(
    (total, item) => total + item.product_id?.price * item.quantity,
    0
  );

  const handleRemoveItem = async (itemId) => {
    try {
      await axios.delete(`http://localhost:4000/cart/removeItem/${itemId}`);

      // Handle success
      alert("Item removed successfully:");
      window.location.reload();
    } catch (error) {
      // Handle error
      console.error(
        "Error removing item:",
        error.response ? error.response.data : error.message
      );

      // Optionally, you can display an error message or take further actions
    }
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
        setLoading(false); // Set loading to false once data is fetched
      })
      .catch((error) => {
        console.error("Error fetching cart items:", error.message);
        setLoading(false); // Set loading to false in case of an error
      });
  }, [currentUser._id]);

  return (
    <HeaderOnlyLayout>
      <div className="py-8">
        {loading ? (
          <div className=" py-24">
            <p>Loading...</p>
          </div>
        ) : (
          <ShoppingCart
            cartItems={cartItems}
            subtotal={subtotal}
            onRemoveItem={handleRemoveItem}
            onCheckout={handleCheckout}
            onContinueShopping={handleContinueShopping}
          />
        )}
      </div>
    </HeaderOnlyLayout>
  );
}

export default ShopingCard;
