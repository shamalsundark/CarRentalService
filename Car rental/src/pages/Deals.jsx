import axios from 'axios';
import React, { useEffect, useState } from 'react';
import '../pages/Deal.css'
import DefaultLayout from "../components/DefaultLayout";
import Footer from './Footer';
import Socialmedia from './Socialmedia';
import { useSelector } from "react-redux";

const Deals = () => {
  const [orders, setOrders] = useState([]);
  const { currentUser } = useSelector((state) => state.user);

  useEffect(() => {
    async function getAllOrders() {
      try {
        
        if (!currentUser) {
          setOrders([]);
          return;
        }
      
        const response = await axios.get(
          "https://carrental-h251.onrender.com/api/admin/deals",
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
      <header className="sticky-top">
        <DefaultLayout />
      </header>
      <h2 style={{textAlign:"center",fontWeight:'bold',color:'green'}}>Your All Booking Details</h2>
      <ul>
        <div style={{display:"flex",justifyContent:"space-around",flexWrap:"wrap",gap:"5rem"}}>
        {orders?.map(order => (
          <div className='deal-div'>
          <li key={order.userId}>
            <h5>{order.userName}</h5><h5>{order.totalAmount}</h5> <br />
           <h5>Car Name:</h5> <h5>{order.carName}</h5><br />
           <h5>Payment Id:</h5><h5> {order.paymentId}</h5><br />
             <h5>Date</h5><h5> {order.date}</h5>
          </li>
          </div>
        ))}
      </div>
      </ul>
      <div>
        <Footer />
      </div>
      <div>
        <Socialmedia />
      </div>
    </div>
  );
};

export default Deals;
