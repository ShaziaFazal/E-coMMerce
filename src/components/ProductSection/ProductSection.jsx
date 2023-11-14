import { useState } from "react";
import ProductDetail from "../ProductDetail/ProductDetail";

export const ProductSection = ({ product }) => {
  const [displayImg, setDisplayImg] = useState(product?.images[0].src);
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));

  const handleClick = (e) => {
    setDisplayImg(e.target.src);
  };
  const handleAddToCart = (quantity, productId, selectedSize) => {
    if (currentUser) {
      const url = `/cart/shoppingcart?productId=${productId}&quantity=${quantity}&size=${selectedSize}`;
      window.location.href = url;
    } else {
      window.location.href = "/";
    }
  };
  return (
    <div className="flex flex-row gap-7 mt-20">
      <div className="w-24 flex flex-col ml-20">
        {product?.images.map((image, index) => (
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
