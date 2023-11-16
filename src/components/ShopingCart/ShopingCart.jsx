import React from "react";

function ShoppingCart({
  cartItems,
  subtotal,
  onRemoveItem,
  onCheckout,
  onContinueShopping,
}) {
  console.log(cartItems, "cartItems");
  return (
    <div className="container mx-auto my-8">
      <h2 className="text-2xl font-bold mb-4">Shopping Cart</h2>

      <div className="flex flex-col gap-8">
        {cartItems.map((item, index) => (
          <div key={index} className="flex gap-8  mb-8">
            <div className=" h-40 overflow-hidden">
              <img
                src={item.product_id?.images[0].src}
                alt={index}
                className="h-full w-full object-cover object-center"
              />
            </div>
            <div className="mt-4">
              <h3 className="text-lg font-medium text-gray-900">
                <a href="#">{item.product_id?.title}</a>
              </h3>
              <p className="text-sm text-gray-500">{item.color}</p>
              <p className="mt-2">PKR {item.product_id?.price.toFixed(2)}</p>
              <p className="mt-2">Qty: {item.quantity}</p>
              <button
                type="button"
                onClick={() => onRemoveItem(item._id)}
                className="mt-2 text-indigo-600 hover:text-indigo-500"
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="border-t border-gray-200 mt-8 pt-8">
        <div className="flex justify-between text-lg font-medium text-gray-900">
          <p>Subtotal</p>
          <p>PKR {subtotal.toFixed(2)}</p>
        </div>
        <p className="mt-2 text-sm text-gray-500">
          Shipping and taxes calculated at checkout.
        </p>
        <div className="mt-6">
          <button
            onClick={onCheckout}
            className="bg-indigo-600 text-white px-6 py-3 rounded-md hover:bg-indigo-700"
          >
            Checkout
          </button>
        </div>
        <div className="mt-6 text-center text-sm text-gray-500">
          <p>
            or{" "}
            <button
              type="button"
              onClick={onContinueShopping}
              className="text-indigo-600 hover:text-indigo-500"
            >
              Continue Shopping <span aria-hidden="true">&rarr;</span>
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}

export default ShoppingCart;
