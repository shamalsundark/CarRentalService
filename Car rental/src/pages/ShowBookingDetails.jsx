import React from "react";
import { useLocation } from "react-router-dom";
import DefaultLayout from "../components/DefaultLayout";
import Navigationbar from "./Navigationbar";

function ShowBookingDetails() {
  const location = useLocation();
  const formData = location.state;

  return (
    <header className="sticky-top">
      <DefaultLayout />
      <div className="navii">
          <div style={styles.container}>
            <h2 style={styles.heading}>Booking Details</h2>
            <div style={styles.detailsBox}>
              <p style={styles.detail}>
                <span>Pickup Location:</span> {formData.pickupLocation}
              </p>
              <p style={styles.detail}>
                <span>Drop Off Location:</span> {formData.dropOffLocation}
              </p>
              <p style={styles.detail}>
                <span>Pickup Date:</span> {formData.pickupDate}
              </p>
              <p style={styles.detail}>
                <span>Pickup Time:</span> {formData.pickupTime}
              </p>
              <p style={styles.detail}>
                <span>Drop Off Date:</span> {formData.dropOffDate}
              </p>
              <p style={styles.detail}>
                <span>Drop Off Time:</span> {formData.dropOffTime}
              </p>
            </div>
          </div>
        
        <div>
          <Navigationbar />
          <div></div>
        </div>
      </div>
    </header>
  );
}

const styles = {
  container: {
    width: '100%',
    padding: "20px",
    borderRadius: "8px",
    maxWidth: "400px",
    margin: "auto",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    background: "black",
    color: "#fff",
  },
  heading: {
    textAlign: "center",
  },
  detailsBox: {
    marginTop: "20px",
    borderRadius: "8px",
    padding: "16px",
    background: "white",
    color: "#333",
  },
  detail: {
    margin: "8px 0",
  },
};

export default ShowBookingDetails;
