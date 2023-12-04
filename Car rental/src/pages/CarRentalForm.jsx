import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function CarRentalForm() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    pickupLocation: '',
    dropOffLocation: '',
    pickupDate: '',
    pickupTime: '',
    dropOffDate: '',
    dropOffTime: '',
  });

  

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };


  function getTomorrowDate() {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
  
    const year = tomorrow.getFullYear();
    let month = tomorrow.getMonth() + 1; 
    let day = tomorrow.getDate();
  
    
    month = month < 10 ? `0${month}` : month;
    day = day < 10 ? `0${day}` : day;
  
    return `${year}-${month}-${day}`;
  }


  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:5000/api/auth/bookdetails",{formData}, {
        headers: { Authorization: "Bearer " + localStorage.getItem("token") },
      })
      console.log(response);
    navigate('/Bookingdetails', { state: formData });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container mt-5">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="pickupLocation">Select Pickup Location</label>
          <select
            className="form-control"
            id="pickupLocation"
            name="pickupLocation"
           
            onChange={handleChange}
          >
            <option>Kannur</option>
            <option >Kochi</option>
            <option>Trivandrum</option>
            <option>Trissur</option>
            <option>Palakkad</option>
            <option>Wayanad</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="dropOffLocation">Select Drop Off Location</label>
          <select
            className="form-control"
            id="dropOffLocation"
            name="dropOffLocation"
           
            onChange={handleChange}
          >
            <option>Trissur</option>
            <option>Palakkad</option>
            <option>Wayanad</option>
            <option>Kannur</option>
            <option >Kochi</option>
            <option>Trivandrum</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="pickupDate">Select Pickup Date</label>
          <input
  type="date"
  className="form-control"
  id="pickupDate"
  name="pickupDate"
  value={formData.pickupDate}
  onChange={handleChange}
  min={getTomorrowDate()} 
/>
        </div>

        <div className="form-group">
          <label htmlFor="pickupTime">Select Pickup Time</label>
          <input
            type="time"
            className="form-control"
            id="pickupTime"
            name="pickupTime"
            
            value={formData.pickupTime}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="dropOffDate">Select Drop Off Date</label>
          <input
            type="date"
            className="form-control"
            id="dropOffDate"
            name="dropOffDate"
            value={formData.dropOffDate}
            onChange={handleChange}
            min={getTomorrowDate()}
          />
        </div>

        <div className="form-group">
          <label htmlFor="dropOffTime">Select Drop Off Time</label>
          <input
            type="time"
            className="form-control"
            id="dropOffTime"
            name="dropOffTime"
            value={formData.dropOffTime}
            onChange={handleChange}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
      <img
        src="https://www.evmwheels.com/assets/img/evm.png"
        alt="Car Rental Image"
      />
    </div>
  );
}

export default CarRentalForm;
