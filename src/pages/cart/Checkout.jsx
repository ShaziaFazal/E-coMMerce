import CheckoutForm from "../../components/Forms/CheckoutForm";
import { useEffect, useState } from "react";
import axios from "axios";
import HeaderOnlyLayout from "../../components/layouts/HeaderOnlyLayout";
import { loadStripe } from "@stripe/stripe-js";

function Checkout() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));

  const handleFormSubmit = async (formData) => {
    if (formData.paymentMethod === "cardPayment") {
      const stripe = await loadStripe(
        "pk_test_51OCjbUIzgiBjN2Z8gDGkykFECNePmUdhTmvdYo7aifVIyXKfAdvSndWHhqR9uGCVuvFcB6pXQnmHyGuVDhk6L7RW005S5gN0nJ"
      );

      const body = {
        products: products,
        quantity: products.length,
      };
      const headers = {
        "Content-Type": "application/json",
      };
      const response = await fetch(
        "http://localhost:4000/api/create-checkout-session",
        {
          method: "POST",
          headers: headers,
          body: JSON.stringify(body),
        }
      );

      const session = await response.json();
      const result = stripe.redirectToCheckout({
        sessionId: session.id,
      });
      console.log(result);
      if (result.error) {
        console.log(result.error);
      } else {
        try {
          const response = await axios.post(
            "http://localhost:4000/orderInfo/createOrder",
            formData
          );
          // alert("Thank You, your Order is placed successfully");
          // window.location.href = "/";
          return response.data; // You can return the response if needed
        } catch (error) {
          console.error("Error creating order:", error);
          throw error; // You can handle the error as needed
        }
      }
    } else {
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
    }
  };

  useEffect(() => {
    axios
      .get(`http://localhost:4000/cart/cartitems/${currentUser._id}`)
      .then((response) => {
        setProducts(response.data);
        setLoading(false); // Set loading to false once data is fetched
      })
      .catch((error) => {
        console.error("Error fetching cart items:", error.message);
        setLoading(false); // Set loading to false in case of an error
      });
  }, [currentUser._id]);

  return (
    <HeaderOnlyLayout>
      <CheckoutForm
        onSubmit={handleFormSubmit}
        products={products}
        loading={loading}
      />
    </HeaderOnlyLayout>
  );
}

export default Checkout;
