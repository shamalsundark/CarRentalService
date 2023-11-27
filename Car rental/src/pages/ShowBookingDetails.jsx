import React from "react";
import { useLocation } from "react-router-dom";
import Navbar from "./Navigationbar";
import { Card } from "@mui/material";


function ShowBookingDetails({cars}) {
  const location = useLocation();
  const formData = location.state;
  console.log(cars);

  const calculateTimeDifference = (startDate, endDate) => {
    // Function to calculate the time difference between two dates
    const startDateTime = new Date(startDate).getTime();
    const endDateTime = new Date(endDate).getTime();

    const timeDifference = endDateTime - startDateTime;

    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));

    return `${days} days, ${hours} hours, and ${minutes} minutes`;
  };

  const timeDifference = calculateTimeDifference(
    `${formData.pickupDate}T${formData.pickupTime}`,
    `${formData.dropOffDate}T${formData.dropOffTime}`
  );

  return (
    <header className="sticky-top">
     
      <div className="mainnav">
        <div className="pickupmain">
          <div>
            <div>
              <div className="pickup" style={{ width: '300px', padding: '20px', marginBottom: '20px' }}>
                <p><strong>Pickup Location:</strong> {formData.pickupLocation}</p>
                <p><strong>Drop Off Location:</strong> {formData.dropOffLocation}</p>
              </div>
              <div className="pickup" style={{ width: '300px', padding: '20px', marginBottom: '20px' }}>
                <p><strong>Pickup Date:</strong> {formData.pickupDate}</p>
                <p><strong>Pickup Time:</strong> {formData.pickupTime}</p>
              </div>
              <div className="pickup" style={{ width: '300px', padding: '20px', marginBottom: '20px' }}>
                <p><strong>Drop Off Date:</strong> {formData.dropOffDate}</p>
                <p><strong>Drop Off Time:</strong> {formData.dropOffTime}</p>
              </div>
              <div className="timeperiod" style={{ width: '300px', padding: '20px', marginBottom: '20px' }}>
                <p><strong>Time Period Difference:</strong> {timeDifference}</p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="newnav">
            <Navbar/>
            <Card>
              {
                cars?.map((car) => (
                  <div key={car._id} style={{ marginBottom: '20px' }}>
                    <Card style={{ width: '18rem' }}>
                      <Card.Img variant="top" src={car.image} alt={car.title} />
                      <Card.Body>
                        <Card.Title>{car.title}</Card.Title>
                        <Card.Text>{car.description}</Card.Text>
                        <Card.Text>PRICE: ₹{car.price}</Card.Text>
                        <Card.Text>Model: {car.model}</Card.Text>
                        <Button variant="primary">....Go....</Button>
                      </Card.Body>
                    </Card>
              
                  </div>
                ))
              }
            </Card>
            
          </div>
        
        </div>
      </div>
    </header>
  );
}

export default ShowBookingDetails;
