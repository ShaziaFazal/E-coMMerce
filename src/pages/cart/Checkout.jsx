import CheckoutForm from "../../components/Forms/CheckoutForm";

function Checkout() {
  const handleFormSubmit = (formData) => {
    // Handle form submission logic here, e.g., send data to an API
    console.log("Form submitted:", formData);
  };

  const products = [
    {
      name: "Product 1",
      price: 99.99,
      details: "kjdgkjdghkjghgkj msfbvksfj dvbkdj kjskj",
      imageSrc:
        "https://images.unsplash.com/photo-1699632483049-93db6f6ae7ec?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHx8",
    },
    {
      name: "Product 2",
      price: 149.99,
      details: "kjdgkjdghkjghgkj msfbvksfj dvbkdj kjskj",
      imageSrc:
        "https://images.unsplash.com/photo-1699632483049-93db6f6ae7ec?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHx8",
    },
  ];

  return (
    <div>
      <CheckoutForm onSubmit={handleFormSubmit} products={products} />
    </div>
  );
}

export default Checkout;
