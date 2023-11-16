import CheckoutForm from "../../components/Forms/CheckoutForm";
import { useEffect, useState } from "react";
import axios from "axios";
import HeaderOnlyLayout from "../../components/layouts/HeaderOnlyLayout";

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
      return response.data; 
    } catch (error) {
      console.error("Error creating order:", error);
      throw error; 
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
    <HeaderOnlyLayout>
      <CheckoutForm onSubmit={handleFormSubmit} products={products} />
    </HeaderOnlyLayout>
  );
}

export default Checkout;
