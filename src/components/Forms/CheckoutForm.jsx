import { useState } from "react";

function ProductItem({ imageSrc, productName, productDetails, price }) {
  return (
    <div className="flex flex-col rounded-lg bg-white sm:flex-row">
      <img
        className="m-2 h-24 w-28 rounded-md border object-cover object-center"
        src={imageSrc}
        alt=""
      />
      <div className="flex w-full flex-col px-4 py-4">
        <span className="font-semibold">{productName}</span>
        <span className="float-right text-gray-400">{productDetails}</span>
        <p className="text-lg font-bold">{`PKR ${price}`}</p>
      </div>
    </div>
  );
}

function CheckoutForm({ onSubmit, products }) {
  const [formData, setFormData] = useState({
    customerName: "",
    email: "",
    shippingAddress: "",
    city: "",
    zipCode: "",
    contactNumber: "",
    productQuantity: 1,
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const calculateSubtotal = (products) => {
    // Calculate the subtotal based on the products array
    // You need to define the structure of your products and their prices
    return products.reduce((total, product) => total + product.price, 0);
  };

  const calculateTotal = (products) => {
    // Calculate the total including shipping
    const subtotal = calculateSubtotal(products);
    const shippingCost = 150; // Assuming a fixed shipping cost
    return subtotal + shippingCost;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Pass the form data to the parent component
    onSubmit(formData);
  };
  return (
    <div>
      <div className="grid sm:px-10 lg:grid-cols-2 lg:px-20 xl:px-32">
        <div className="px-4 pt-8">
          <p className="text-xl font-medium">Order Summary</p>
          <p className="text-gray-400">
            Check your items. And select a suitable shipping method.
          </p>

          <div className="mt-8 space-y-3 rounded-lg border bg-white px-2 py-4 sm:px-6">
            {products.map((product, index) => (
              <ProductItem
                key={index}
                imageSrc={product.imageSrc} // Replace with the actual property from your product data
                productName={product.name} // Replace with the actual property from your product data
                productDetails={product.details} // Replace with the actual property from your product data
                price={product.price} // Replace with the actual property from your product data
              />
            ))}
          </div>
          <p className="mt-8 text-lg font-medium">Shipping Methods</p>
          <form className="mt-5 grid gap-6">
            <div className="relative">
              <input
                className="peer hidden"
                id="radio_1"
                type="radio"
                name="radio"
                checked
              />
              <span className="peer-checked:border-gray-700 absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 border-gray-300 bg-white"></span>
              <label className="peer-checked:border-2 peer-checked:border-gray-700 peer-checked:bg-gray-50 flex cursor-pointer select-none rounded-lg border border-gray-300 p-4">
                <div className="ml-5">
                  <span className="mt-2 font-semibold">Cash On Delivery</span>
                  <p className="text-slate-500 text-sm leading-6">
                    Delivery: 2-4 Days
                  </p>
                </div>
              </label>
            </div>
          </form>
        </div>
        <div className="mt-10 bg-gray-50 px-4 pt-8 lg:mt-0">
          <p className="text-xl font-medium">Payment Details</p>
          <p className="text-gray-400">
            Complete your order by providing your payment details.
          </p>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                htmlFor="customerName"
                className="block text-sm font-semibold text-gray-600"
              >
                Customer Name:
              </label>
              <input
                type="text"
                id="customerName"
                name="customerName"
                value={formData.customerName}
                onChange={handleChange}
                className="w-full p-2 border rounded-md focus:outline-none focus:border-blue-500"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-semibold text-gray-600"
              >
                Email:
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-2 border rounded-md focus:outline-none focus:border-blue-500"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="shippingAddress"
                className="block text-sm font-semibold text-gray-600"
              >
                Shipping Address:
              </label>
              <input
                type="text"
                id="shippingAddress"
                name="shippingAddress"
                value={formData.shippingAddress}
                onChange={handleChange}
                className="w-full p-2 border rounded-md focus:outline-none focus:border-blue-500"
                required
              />
            </div>
            <div className="flex mb-4">
              <div className="w-1/2 mr-2">
                <label
                  htmlFor="city"
                  className="block text-sm font-semibold text-gray-600"
                >
                  City:
                </label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  className="w-full p-2 border rounded-md focus:outline-none focus:border-blue-500"
                  required
                />
              </div>
              <div className="w-1/2 ml-2">
                <label
                  htmlFor="zipCode"
                  className="block text-sm font-semibold text-gray-600"
                >
                  ZIP Code:
                </label>
                <input
                  type="text"
                  id="zipCode"
                  name="zipCode"
                  value={formData.zipCode}
                  onChange={handleChange}
                  className="w-full p-2 border rounded-md focus:outline-none focus:border-blue-500"
                  required
                />
              </div>
            </div>
            <div className="mb-4">
              <label
                htmlFor="productQuantity"
                className="block text-sm font-semibold text-gray-600"
              >
                Product Quantity:
              </label>
              <input
                type="number"
                id="productQuantity"
                name="productQuantity"
                value={formData.productQuantity}
                onChange={handleChange}
                min="1"
                className="w-full p-2 border rounded-md focus:outline-none focus:border-blue-500"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="contactNumber"
                className="block text-sm font-semibold text-gray-600"
              >
                Contact Number:
              </label>
              <input
                type="text"
                id="contactNumber"
                name="contactNumber"
                value={formData.contactNumber}
                onChange={handleChange}
                className="w-full p-2 border rounded-md focus:outline-none focus:border-blue-500"
                required
              />
            </div>
            <div>
              <div className="mt-6 border-t border-b py-2">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium text-gray-900">Subtotal</p>
                  {/* Assuming you pass the products prop, calculate subtotal dynamically */}
                  <p className="font-semibold text-gray-900">
                    PKR {calculateSubtotal(products)}
                  </p>
                </div>
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium text-gray-900">Shipping</p>
                  <p className="font-semibold text-gray-900"> PKR 150</p>
                </div>
              </div>
              <div className="mt-6 flex items-center justify-between">
                <p className="text-sm font-medium text-gray-900">Total</p>
                <p className="text-2xl font-semibold text-gray-900">
                  PKR {calculateTotal(products)}
                </p>
              </div>
            </div>

            <button className="mt-4 mb-8 w-full rounded-md bg-gray-900 px-6 py-3 font-medium text-white">
              Place Order
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CheckoutForm;
