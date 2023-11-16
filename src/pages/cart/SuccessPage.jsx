import React from "react";
import { Link } from "react-router-dom"; // Import Link for React Router

function SuccessPage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      {/* Success Message */}
      <div className="text-green-500 text-4xl font-bold mb-4">
        Your order is placed successfully!
      </div>

      {/* Thank You Message */}
      <p className="text-gray-700 text-lg mb-8">Thank you for shopping here.</p>

      {/* SVG Icon (You can replace this with your own SVG) */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        className="w-16 h-16 text-green-500 mb-8"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M5 13l4 4L19 7"
        />
      </svg>

      {/* Button to Redirect to Home Page */}
      <Link
        to="/"
        className="bg-green-500 text-white px-6 py-3 rounded-md hover:bg-green-600 transition duration-300"
      >
        Go to Home
      </Link>
    </div>
  );
}

export default SuccessPage;
