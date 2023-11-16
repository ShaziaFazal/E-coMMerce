import React from "react";
import { Link } from "react-router-dom"; // Import Link for React Router

function CancelPage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      {/* Cancel Message */}
      <div className="text-red-500 text-4xl font-bold mb-4">
        Your payment has been canceled.
      </div>

      {/* Try Again Message */}
      <p className="text-gray-700 text-lg mb-8">Please try again.</p>

      {/* Image or Icon (You can replace this with your own) */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        className="w-16 h-16 text-red-500 mb-8"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>

      {/* Button to Redirect to Home Page or Retry Payment */}
      <Link
        to="/cart/checkout"
        className="bg-red-500 text-white px-6 py-3 rounded-md hover:bg-red-600 transition duration-300"
      >
        Try Again
      </Link>
    </div>
  );
}

export default CancelPage;
