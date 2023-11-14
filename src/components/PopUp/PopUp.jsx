import React from 'react';

function Popup({ isOpen, closePopup }) {
  return (
    <div className={`popup-container ${isOpen ? 'block' : 'hidden'}`}>
      <div className="popup-box bg-white p-4 rounded shadow-md text-center">
        <h2>Email Sent</h2>
        <p>Your email has been sent successfully.</p>
        <button
          onClick={closePopup}
          className="bg-blue-500 text-white px-4 py-2 rounded mt-4 hover:bg-blue-600"
        >
          Close
        </button>
      </div>
    </div>
  );
}

export default Popup;
