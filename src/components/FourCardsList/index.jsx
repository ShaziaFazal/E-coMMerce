/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import Card from "../Card";

export default function FourCardsList(props) {
  return (
    <>
      <div className="bg-white">
        <div className="w-full px-6">
          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:gap-x-8 ">
            {props.products.map((product) => (
              <div key={product.id}>
                <Card product={product} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
