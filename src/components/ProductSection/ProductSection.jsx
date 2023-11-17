import { useState } from "react";
import ProductDetail from "../ProductDetail/ProductDetail";
import axios from "axios";

export const ProductSection = ({ product }) => {
  const [displayImg, setDisplayImg] = useState(product?.images[0].src);
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  console.log(product);
  const handleClick = (e) => {
    setDisplayImg(e.target.src);
  };
  const handleAddToCart = async (quantity, productId, selectedSize) => {
    try {
      if (!currentUser) {
        // Redirect to home page if user is not logged in
        window.location.href = "/";
        return;
      }
      if (product.category !== "Accessories" && !selectedSize) {
        // Show an alert if size is not selected for non-accessory products
        alert("Please select a size");
        return;
      }

      const response = await axios.post(
        "http://localhost:4000/cart/addToCart",
        {
          user_id: currentUser._id,
          product_id: productId,
          quantity: quantity,
          selectedSize: parseInt(selectedSize),
        }
      );

      if (response.status === 201) {
        // Show success message
        alert(response.data.message);
      }

      // Redirect to the shopping cart page with query parameters
      const url = `/cart/shoppingcart?productId=${productId}&quantity=${quantity}&size=${selectedSize}`;
      window.location.href = url;
    } catch (error) {
      console.error("Error adding to cart:", error);
      // Handle error, e.g., show an alert
      alert("Error adding to cart. Please try again.");
    }
  };

  return (
    <div className="flex flex-row gap-7 mt-20">
      <div className="w-24 flex flex-col ml-20">
        {Array.isArray(product?.images) &&
          product?.images.map((image, index) => (
            <img
              key={index}
              src={image.src}
              onClick={handleClick}
              alt={`Image ${index}`}
            />
          ))}
      </div>
      <div className=" w-[500px]">
        <img src={displayImg} />
      </div>
      <ProductDetail handleClick={handleAddToCart} product={product} />
    </div>
  );
};

export default ProductSection;
