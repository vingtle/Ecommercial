import React from "react";
import "./upperbodywax.css";

function UpperBodyWax({ onClose }) {

  const upperbodyWaxOptions = [
    { id: 1, name: "Stomach", duration: "15 minutes", price: "15 €" },
    { id: 2, name: "Back", duration: "15 minutes", price: "20 €" },
  ];

  const handleBookNow = (optionName) => {
    window.location.href = `/booking/${optionName.toLowerCase().replace(/\s/g, "-")}`;
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h3>Upper Body Wax Options</h3>
            {upperbodyWaxOptions.map((option) => (
                <div key={option.id} className="option-item">
                    <p>{option.name}</p>
                    <p>Duration: {option.duration}</p>
                    <p>Price: {option.price}</p>
                    <button type="button" className="book-btn"
                     onclick={() => handleBookNow(option.name)}>
                        Book Now 
                     </button>
                     </div>
            ))}
            <button type="button" className="close-btn"
            onClick={onClose}>
                Close
            </button>
        </div>
    </div>
  );
};

export default UpperBodyWax;
