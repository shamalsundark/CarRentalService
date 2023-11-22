import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

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

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/Bookingdetails', { state: formData });
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
            // value={formData.pickupLocation}
            onChange={handleChange}
          >
            <option>Kannur</option>
            <option >Kochi</option>
            <option>Trivandrum</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="dropOffLocation">Select Drop Off Location</label>
          <select
            className="form-control"
            id="dropOffLocation"
            name="dropOffLocation"
            // value={formData.dropOffLocation}
            onChange={handleChange}
          >
            <option>Trissur</option>
            <option>Palakkad</option>
            <option>Wayanad</option>
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
