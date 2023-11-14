import CheckoutForm from "../../components/Forms/CheckoutForm";
import { useEffect, useState } from "react";
import axios from "axios";

function Checkout() {
  const [products, setProducts] = useState([]);
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  const handleFormSubmit = async (formData) => {
    try {
      const response = await axios.post(
        "http://localhost:4000/orderInfo/createOrder",
        formData
      );
      alert("Thank You, your Order is placed successfully");
      window.location.href = "/";
      return response.data; // You can return the response if needed
    } catch (error) {
      console.error("Error creating order:", error);
      throw error; // You can handle the error as needed
    }
  };

  useEffect(() => {
    axios
      .get(`http://localhost:4000/cart/cartitems/${currentUser._id}`)
      .then((response) => {
        setProducts(response.data);
      });
  }, [currentUser._id]);

  return (
    <div>
      <CheckoutForm onSubmit={handleFormSubmit} products={products} />
    </div>
  );
}

export default Checkout;
