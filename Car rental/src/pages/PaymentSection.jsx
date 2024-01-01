// PaymentSection.js
import React from 'react';
import DefaultLayout from "../components/DefaultLayout";

const PaymentSection = ({ carImage, updatedPrice }) => {
  return (
    <div>
      <header className="sticky-top">
        <DefaultLayout />
      </header>
      <div>
      
        <img src={carImage} alt="Car" style={{ width: "100%" }} />
        
      
        <h2>Updated Price: ₹{updatedPrice}</h2>
      </div>
    </div>
  );
};

export default PaymentSection;
