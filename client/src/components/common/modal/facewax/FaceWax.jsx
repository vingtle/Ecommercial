import React from "react";
import "./facewax.css";


function FaceWax({ onClose }) {

    const faceWaxOptions = [
        { id: 1, name: "Chin", duration: "10 minutes", price: "10 €" },
        { id: 2, name: "Forehead", duration: "10 minutes", price: "10 €" },
        { id: 3, name: "Upper Lip", duration: "10 minutes", price: "10 €" },
        { id: 4, name: "Eyebrows", duration: "15 minutes", price: "15 €" },
        { id: 5, name: "Sides", duration: "10 minutes", price: "10 €" },
    ];

   

    const handleBookNow = (optionName) => {
        window.location.href = `/booking/${optionName.toLowerCase().replace(/\s/g, "-")}`;
      };

    return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h3>Face Wax Options</h3>
        {faceWaxOptions.map((option) => (
          <div key={option.id} className="option-item">
            <p>{option.name}</p>
            <p>Duration: {option.duration}</p>
            <p>Price: {option.price}</p>
            <button
              type="button"
              className="book-btn"
              onClick={() => handleBookNow(option.name)}
            >
              Book Now
            </button>
          </div>
        ))}
        <button type="button" className="close-btn" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
}

export default FaceWax;