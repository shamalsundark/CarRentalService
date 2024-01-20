import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Deals = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    async function getAllOrders() {
      try {
        
      
        const response = await axios.get(
          "http://localhost:5000/api/admin/deals",
          {
            headers: {
              Authorization: "Bearer " + localStorage.getItem("token"),
            },
          }
        );
        setOrders(response.data.data)
       
        console.log(response.data.data);
      } catch (error) {
        console.log("Error fetching orders", error);
      }
    }

    getAllOrders();
  }, []);

  return (
    <div>
      <h2>Your All Booking Details</h2>
      <ul>
        {orders?.map(order => (
          <li key={order.userId}>
            {order.userName}: {order.totalAmount}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Deals;
