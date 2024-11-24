import React from "react";
import "./bikiniwax.css";

function BikiniWax({ onClose }) {

  const bikiniWaxOptions = [
    { id: 1, name: "Classic Bikini", duration: "15 minutes", price: "15 €" },
    { id: 2, name: "Lowcut Bikini Line", duration: "20 minutes", price: "22 €" },
    { id: 3, name: "Full Bikini", duration: "30 minutes", price: "30 €" },
  ];

  const handleBookNow = (optionName) => {
    window.location.href = `/booking/${optionName.toLowerCase().replace(/\s/g, "-")}`;
  }

  return (
    <div className="modal-overlay" onClick={onClose}>
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h3>Arm Wax Options</h3>
            {bikiniWaxOptions.map((option) => (
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
export default BikiniWax;
