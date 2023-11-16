import { useState, useEffect } from "react";

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
        <span className="float-right text-gray-400  line-clamp-2">
          {productDetails}
        </span>
        <p className="text-lg font-bold">{`PKR ${price}`}</p>
      </div>
    </div>
  );
}

const PaymentOption = ({ id, label, description, checked, onChange }) => {
  return (
    <label className="flex items-center p-4 border rounded-md cursor-pointer">
      <input
        type="radio"
        id={id}
        checked={checked}
        onChange={() => onChange(id)}
        className="mr-4 w-6 h-6 "
      />
      <div>
        <span className="font-semibold">{label}</span>
        <span className="block text-gray-400">{description}</span>
      </div>
    </label>
  );
};

const CheckoutForm = ({ onSubmit, products }) => {
  const [selectedOption, setSelectedOption] = useState("cashOnDelivery");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    contactNumber: "",
    paymentMethod: "",
    totalPrice: "",
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
    return products.reduce(
      (total, product) => total + product.product_id.price,
      0
    );
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

  const handleOptionChange = (optionId) => {
    setSelectedOption(optionId);
    setFormData((prevFormData) => ({
      ...prevFormData,
      paymentMethod: optionId,
    }));
  };
  useEffect(() => {
    const totalPrice = calculateTotal(products);
    setFormData((prevFormData) => ({
      ...prevFormData,
      totalPrice: totalPrice,
    }));
  }, [products]);

  return (
    <div className=" py-20">
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
                imageSrc={product.product_id.images[0].src}
                productName={product.product_id.title}
                productDetails={product.product_id.description}
                price={product.product_id.price}
              />
            ))}
          </div>
          <p className="mt-8 text-lg font-medium">Shipping Methods</p>
          <div className="mt-5 grid gap-6">
            <PaymentOption
              id="cashOnDelivery"
              label="Cash On Delivery"
              description="Delivery: 2-4 Days"
              checked={selectedOption === "cashOnDelivery"}
              onChange={handleOptionChange}
            />
            <PaymentOption
              id="cardPayment"
              label="Card Payment"
              description="Delivery: 2-4 Days"
              checked={selectedOption === "cardPayment"}
              onChange={handleOptionChange}
            />
          </div>
        </div>
        <div className="mt-10 bg-gray-50 px-4 pt-8 lg:mt-0">
          <p className="text-xl font-medium">Payment Details</p>
          <p className="text-gray-400">
            Complete your order by providing your payment details.
          </p>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-sm font-semibold text-gray-600"
              >
                Customer Name:
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
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
                htmlFor="address"
                className="block text-sm font-semibold text-gray-600"
              >
                Shipping Address:
              </label>
              <input
                type="text"
                id="address"
                name="address"
                value={formData.address}
                onChange={handleChange}
                className="w-full p-2 border rounded-md focus:outline-none focus:border-blue-500"
                required
              />
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
};

export default CheckoutForm;
