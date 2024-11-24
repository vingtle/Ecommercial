import React from "react";
import "./legwax.css";

function LegWax({ onClose }) {

  const legWaxOptions = [
    { id: 1, name: "Half Leg", duration: "15 minutes", price: "20 €" },
    { id: 2, name: "3/4 Leg", duration: "25 minutes", price: "30 €" },
    { id: 3, name: "Full Leg", duration: "30 minutes", price: "40 €" },
  ];

  const handleBookNow = (optionName) => {
    window.location.herf = `/booking/${optionName.toLowerCase().replace(/\s/g, "-")}`;
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h3>Leg Wax Options</h3>
            {legWaxOptions.map((option) => (
                <div key={option.id} className="option-item">
                <p>{option.name}</p>
                <p>Duration: {option.duration}</p>
                <p>Price: {option.price}</p>
                <button type="button" className="book-btn"
                onClick={() => handleBookNow(option.name)}>
                    Book Now
                </button>
                </div>
            ))}
            <button type="button" className="close-btn" 
            onClick={onClose}>Close</button>
        </div>
    </div>
  );
}

export default LegWax;
