import React, { useState } from "react";
import FaceWax from "../../common/modal/facewax/FaceWax";
import ArmWax from "../../common/modal/armwax/Armwax";
import LegWax from "../../common/modal/legwax/Legwax";
import UpperBodyWax from "../../common/modal/upperbodywax/Upperbodywax";
import BikiniWax from "../../common/modal/bikiniwax/Bikiniwax";
import "./waxing.css";

function Waxing() {
  const [activeModal, setActiveModal] = useState(null); // To track which modal is open

  const handleModalOpen = (modalName) => {
    setActiveModal(modalName); // Open the modal based on the button clicked
  };

  const handleModalClose = () => {
    setActiveModal(null); // Close the modal
  };

  const handleBookNow = (packageItem) => {
    window.location.href = `/booking/${packageItem.toLowerCase().replace(/\s/g, "-")}`;
  };

  const ladiesWaxingPackages = [
    {
      id: 1,
      name: "Full Body Wax",
      duration: "1h 30 mins",
      price: "120 €",
      description: "Complete waxing package covering all major areas.",
    },
    {
      id: 2,
      name: "Full Face Wax",
      duration: "45 mins",
      price: "50 €",
      description: "Includes waxing for chin, upper lip, and eyebrows.",
    },
    {
      id: 3,
      name: "Low-cut Bikini Line, 1/2 Legs, Armpits",
      duration: "50 mins",
      price: "50 €",
      description: "Includes lower bikini line, half legs, and armpits.",
    },
    {
      id: 4,
      name: "Full Bikini, 1/2 Legs, Armpits",
      duration: "1h",
      price: "55 €",
      description: "Includes full bikini, half legs, and armpits.",
    },
    {
      id: 5,
      name: "Full Bikini, Full Legs, Armpits",
      duration: "1h 15 mins",
      price: "60 €",
      description: "Includes full bikini, full legs, and armpits.",
    },
  ];

  return (
    <div className="waxing-container">
      <h1 className="waxing-title">Waxing</h1>
      <div className="waxing-buttons">
        <button
          type="button"
          onClick={() => handleModalOpen("FaceWax")}
          className="option-btn"
        >
          Face Wax Options
        </button>
        <button
          type="button"
          onClick={() => handleModalOpen("ArmWax")}
          className="option-btn"
        >
          Arm Wax Options
        </button>
        <button
          type="button"
          onClick={() => handleModalOpen("LegWax")}
          className="option-btn"
        >
          Leg Wax Options
        </button>
        <button
          type="button"
          onClick={() => handleModalOpen("UpperBodyWax")}
          className="option-btn"
        >
          Upper Body Wax Options
        </button>
        <button
          type="button"
          onClick={() => handleModalOpen("BikiniWax")}
          className="option-btn"
        >
          Bikini Wax Options
        </button>
      </div>

      <h2 className="waxing-packages-title">Ladies’ Waxing Packages</h2>
      <div className="waxing-packages">
        {ladiesWaxingPackages.map((packageItem) => (
          <div key={packageItem.id} className="package-card">
            <h3>{packageItem.name}</h3>
            <p>{packageItem.duration}</p>
            <p className="price">{packageItem.price}</p>
            <div className="package-actions">
              <button
                type="button"
                className="info-btn"
                onClick={() => alert(packageItem.description)}
              >
                See Info
              </button>
              <button
              className="book-btn" type="button"
              onClick={() => handleBookNow(packageItem.name)}
            >
              Book Now
            </button>
            </div>
          </div>
        ))}
      </div>

      {/* Render Active Modal */}
      {activeModal === "FaceWax" && <FaceWax onClose={handleModalClose} />}
      {activeModal === "ArmWax" && <ArmWax onClose={handleModalClose} />}
      {activeModal === "LegWax" && <LegWax onClose={handleModalClose} />}
      {activeModal === "UpperBodyWax" && (
        <UpperBodyWax onClose={handleModalClose} />
      )}
      {activeModal === "BikiniWax" && <BikiniWax onClose={handleModalClose} />}
    </div>
  );
}

export default Waxing;


