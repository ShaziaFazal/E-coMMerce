import Footer from "../../components/Footer/Footer";
import Marquee from "../../components/Marquee/Marquee";
import ShoppingCart from "../../components/ShopingCart/ShopingCart";

function ShopingCard() {
  const cartItems = [
    { id: 1, name: "Throwback Hip Bag", price: 90.0, quantity: 1 },
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
