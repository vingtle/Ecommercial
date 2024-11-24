import React from "react";
import "./armwax.css";

function ArmWax({ onClose }) {

  const armWaxOptions = [
    { id: 1, name: "Ampits", duration: "10 minutes", price: "10 €" },
    { id: 2, name: "Half Arm", duration: "15 minutes", price: "15 €" },
    { id: 3, name: "Full Arm", duration: "25 minutes", price: "25 €" },
  ];

  const handleBookNow = (optionName) => {
    window.location.href = `/booking/${optionName.toLowerCase().replace(/\s/g, "-")}`;
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h3>Arm Wax Options</h3>
        {armWaxOptions.map((option) => (
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

export default ArmWax;






