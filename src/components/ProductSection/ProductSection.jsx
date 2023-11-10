import { useState } from "react";
import ProductDetail from "../ProductDetail/ProductDetail";

export const ProductSection = ({ product }) => {
  const [displayImg, setDisplayImg] = useState(product.img1);

  const handleClick = (e) => {
    setDisplayImg(e.target.src);
  };

  return (
    <div className="flex flex-row gap-7 mt-20">
      <div className="w-24 flex flex-col ml-20">
        <img className="" src={product.img1} onClick={handleClick} />
        <img src={product.img2} onClick={handleClick} />
        <img src={product.img3} onClick={handleClick} />
        <img src={product.img4} onClick={handleClick} />
      </div>
      <div className=" w-[500px]">
        <img src={displayImg} />
      </div>
      <ProductDetail product={product} />
    </div>
  );
};

export default ProductSection;
