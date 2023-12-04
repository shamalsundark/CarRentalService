import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const carDetailsStyle = {
  maxWidth: '800px',
  margin: 'auto',
  padding: '20px',
  boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
  borderRadius: '8px',
  backgroundColor: '#f8f9fa', // Background color added
};

const imageStyle = {
  width: '100%',
  maxHeight: '400px',
  objectFit: 'cover',
  borderRadius: '8px',
  marginBottom: '20px',
};

const textStyle = {
  color: '#333',
  fontFamily: 'Arial, sans-serif', // Adjust the font family
  fontSize: '1.2rem', // Adjust the font size
  lineHeight: '1.4', // Adjust the line height
};

function CarDetails() {
  const [car, setCar] = useState();
  const { id } = useParams();

  const getCarDetails = async () => {
    try {
      const response = await axios.post('http://localhost:5000/api/auth/details', { id });
      setCar(response.data.cars);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCarDetails();
  }, []);

  return (
    <div style={carDetailsStyle}>
      {car && (
        <>
          <h1 style={{ ...textStyle, fontSize: '2rem', marginBottom: '10px', color: '#007bff' }}>{car.title}</h1>
          <h3 style={textStyle}>{car.description}</h3>
          <img src={car.image} alt="" style={imageStyle} />
          <h3 style={{ ...textStyle, fontWeight: 'bold', marginTop: '20px' }}>PRICE: ${car.price}</h3>
          <h4 style={textStyle}>SEAT: {car.seat}</h4>
          <h4 style={textStyle}>FUEL: {car.fuel}</h4>
          <h4 style={textStyle}>TRANSMISSION: {car.transmission}</h4>
          <button>RENT IT</button>
        </>
      )}
    </div>
  );
}

export default CarDetails;
