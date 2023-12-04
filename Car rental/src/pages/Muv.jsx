import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import DefaultLayout from '../components/DefaultLayout';
import { useNavigate } from 'react-router-dom';
function Muv() {
  const [cars, setCars] = useState([]);
  const navigate = useNavigate()

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

 
  const filterSedanCars = () => {
    return cars.filter((car) => car.model === 'muv');
  };

  const handleCarClick =(id)=>{
    console.log(id);
    navigate(`/details/${id}`)
  }

  const sedanCars = filterSedanCars();

  return (
    <div>
       <header className='sticky-top'><DefaultLayout/></header>
      <div className='allcars'>
        {sedanCars.map((car) => (
          <Card key={car._id} style={{ width: '18rem', marginBottom: '20px' }}>
            <Card.Img variant="top" src={car.image} alt={car.title} />
            <Card.Body>
              <Card.Title>{car.title}</Card.Title>
              <Card.Text>{car.description}</Card.Text>
              <Card.Text>PRICE(perday): ₹{car.price}</Card.Text>
              <Card.Text>Model: {car.model}</Card.Text>
              <Button
                            onClick={()=>handleCarClick(car?._id)}

              variant="primary">CLICK</Button>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default Muv;
