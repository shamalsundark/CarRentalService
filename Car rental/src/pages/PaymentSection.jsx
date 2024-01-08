import React, { useEffect, useState } from "react";
import DefaultLayout from "../components/DefaultLayout";
import { useSelector } from "react-redux";
import axios from "axios";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import "../pages/paymentSection.css";
import Footer from "./Footer";
import Socialmedia from "./Socialmedia";

const PaymentSection = () => {
  const [car, setCar] = useState({});
  const { currentBooking } = useSelector((state) => state.booking);
  const { currentCarDetails } = useSelector((state) => state.booking);
  const { updatedPrice } = useSelector((state) => state.price);
  const id = currentCarDetails;

  const getCarDetails = async () => {
    try {
      const response = await axios.post(
        `http://localhost:5000/api/auth/details`,
        { id }
      );
      setCar(response.data.cars);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCarDetails();
  }, [currentBooking]);

  // Calculate total amount by adding amount price and GST
  const amountPrice = updatedPrice || 0;
  const gstPrice = 500; // Assuming GST is a fixed value
  const totalAmount = amountPrice + gstPrice;

  return (
    <div>
      <header className="sticky-top">
        <DefaultLayout />
      </header>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <div
          style={{
            border: "2px solid black",
            padding: "2rem",
            borderRadius: "2rem",
            marginTop:'2rem'
          }}
        >
         
          <h4 style={{ fontSize: '1.2rem', fontWeight: 'bold', marginBottom: '10px' }}>Pickup Location: {currentBooking?.detailsAdd?.pickupLocation}</h4>
          <h4 style={{ fontSize: '1.2rem', fontWeight: 'bold', marginBottom: '10px' }}>Dropoff Location: {currentBooking?.detailsAdd?.dropOffLocation}</h4>
          <h4 style={{ fontSize: '1.2rem', fontWeight: 'bold', marginBottom: '10px' }}>Pickup Date:  {new Date(currentBooking?.detailsAdd?.dropOffDate).toLocaleDateString()}</h4>
          <h4 style={{ fontSize: '1.2rem', fontWeight: 'bold', marginBottom: '10px' }}>Dropoff Date: {new Date(currentBooking?.detailsAdd?.pickupDate).toLocaleDateString()}</h4>
          <h4 style={{ fontSize: '1.2rem', fontWeight: 'bold', marginBottom: '10px' }}>Pickup Time: {currentBooking?.detailsAdd?.pickupTime}</h4>
          <h4 style={{ fontSize: '1.2rem', fontWeight: 'bold', marginBottom: '10px' }}>Dropoff Time: {currentBooking?.detailsAdd?.dropOffTime}</h4>

        
          <div style={{ marginTop: '20px', borderTop: '1px solid #ccc', paddingTop: '10px' }}>
            <h4 style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>Amount Price: ₹{amountPrice}</h4>
            <h4 style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>Insurance Amount: ₹0.00</h4>
            <h4 style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>Delivery Charges: ₹0.00</h4>
            <h4 style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>GST: ₹{gstPrice}</h4>
            <h4 style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>Diff Location Charge: ₹0.00</h4>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginTop: '10px' }}>Total Amount: ₹{totalAmount}</h3>
          </div>
          <button type="button" class="button">
  <div class="button-top">PAY NOW</div>
  <div class="button-bottom"></div>
  <div class="button-base"></div>
</button>
        </div>

        <div style={{ paddingTop: "3rem" }}>
          <Card sx={{ width: 500 }}>
            <CardMedia
              sx={{ height: 350 }}
              image={car?.image}
              title={car?.title}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {car?.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {car?.description}
              </Typography>
            </CardContent>
          </Card>
        </div>
      </div>
      <div style={{marginTop:"1rem"}}>
        <Footer/>
      </div>
      <div>
        <Socialmedia/>
      </div>
    </div>
    
    
  );
};

export default PaymentSection;
