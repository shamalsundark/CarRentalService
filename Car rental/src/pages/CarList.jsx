import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ShowBookingDetails from './ShowBookingDetails';

function CarList() {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    async function getAllCars() {
      try {
        const response = await axios.get("http://localhost:5000/api/admin/cars");
        setCars(response.data.data);
      } catch (error) {
        console.error("Error fetching cars:", error);
      }
    }

    getAllCars();
  }, []);

  return (
    <div>
      <div className='allcars'>
        {cars?.map((car) => (
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
        ))}
      </div>
    </div>
  );
}

export default CarList;

