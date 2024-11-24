import React, { useState } from "react";
import "./manicurespedicures.css";
import Haircare from "../../../assets/images/Colorful.jpg";

function ManicuresPedicures() {
  const [modalData, setModalData] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const treatments = [
    { id: 1, name: "Gel Polish (without Manicures)", duration: "30 min", price: "35 €"},
    { id: 2, name: "Gel Polish and Manicures Express", duration: "45 min", price: "45 €"},
    { id: 3, name: "Signature Pedicures", duration: "60 min", price: "75 €"},
    { id: 4, name: "Dipping & Manicures", duration: "1h 15 min", price: "80 €"},
    { id: 5, name: "Refill Dipping", duration: "60 min", price: "75 €"},
    { id: 6, name: "Remove Fake Nails", duration: "30 min", price: "30 €"},
    { id: 7, name: "Remove Gel Polish", duration: "15 min"},
  ];


  const handleBookNow = (treatmentName) => {
    window.location.href = `/booking/${treatmentName.toLowerCase().replace(/\s/g, "-")}`;
  };

  return (
    <div
      className="nails-treatments"
      style={{
        backgroundImage: `url(${Haircare})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "repeat",
        minHeight: "100vh",
        padding: "50px",
        color: "#fff",
      }}
    >
      <h1 className="nails-treatments-title">Manicures & Pedicures</h1>
      <div className="treatment-grid">
        {treatments.map((treatment) => (
          <div key={treatment.id} className="treatment-card">
            <h3>{treatment.name}</h3>
            <p>Duration: {treatment.duration}</p>
            <p className="price">{treatment.price}</p>
            <button className="book-btn" type="button" onClick={() => handleBookNow(treatment.name)}>Book Now</button>
          </div>
        ))}
      </div>

      {isModalOpen && (
        <div className="modal-overlay" onClick={handleModalClose}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h3>{modalData.name}</h3>
            <p>{modalData.description}</p>
            <p>Duration: {modalData.duration}</p>
            <p>Price: {modalData.price}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ManicuresPedicures;
