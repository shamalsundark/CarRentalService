// import React, { useEffect } from 'react'
// import '../pages/Profilepage.css'
// import DefaultLayout from "../components/DefaultLayout";
// import { Avatar } from '@mui/material';
// import { useSelector } from 'react-redux';
// import { useState } from 'react';

// const Profilepage = () => {
//     const { currentUser } = useSelector((state) => state.user);
//     const { updatedPrice } = useSelector((state) => state.price);
//     const [car, setCar] = useState({});

//     const getCarDetails = async () => {
//         try {
//           const response = await axios.post(
//             `http://localhost:5000/api/auth/details`,
//             { id }
//           );
//           setCar(response.data.cars);
//         } catch (error) {
//           console.log(error);
//         }
//       };

//       useEffect(() => {
//         getCarDetails();
//       },)

//   return (
//     <>
//     <header className="sticky-top">
//     <DefaultLayout />
//   </header>

//     <div className='profilemain'>
//      <div className='profileleft'>

//         <div className='leftsmall'>

//        <Avatar className='avatarp' sx={{width:80,height:80}}/>

//         </div>
//       <div>
//         <h4>NAME:{currentUser?.rest?.name}</h4><br />
//         <h4>EMAIL:{currentUser?.rest?.email}</h4>
//       </div>
//     </div>

//     <div className='profileright'>
//         <div style={{padding:'2rem',color:'white'}}>
//        <h4>SELECTED CAR:{car?.title}</h4>
//        <h4>PRICE: { updatedPrice }</h4>
//        </div>
//     </div>

//     </div>
//     </>
//   )
// }

// export default Profilepage

import { Avatar } from "@mui/material";
import React, { useRef, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from 'axios';  // Import axios here
import { TbCameraPlus } from "react-icons/tb";
import { toast } from "react-toastify";
import '../pages/Profilepage.css'
import DefaultLayout from '../components/DefaultLayout';

function ProfilePage() {
  const fileRef = useRef(null);
  const [upload, setUpload] = useState(false);
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state) => state.user);
  const { updatedPrice } = useSelector((state) => state.price);
  const [car, setCar] = useState({});

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
  }, []);

  return (
    <div>
      <header className='sticky-top'><DefaultLayout/></header>
      <div className="personal-div">
        <h1 className="personal-h1">
          <u>Personal Info</u>
        </h1>
        <input
          type="file"
          onChange={(e) => uploadavatar(e)}
          ref={fileRef}
          hidden
          accept="image/*"
        />
        <Avatar sx={{ width: 100, height: 100 }} src={currentUser?.image} />
        <TbCameraPlus
          style={{
            fontSize: "1.5rem",
            position: "relative",
            left: "4rem",
            bottom: "2rem",
            color: "gray",
            cursor: "pointer",
          }}
          onClick={() => {
            fileRef.current.click();
            setUpload(true);
          }}
        />
        {upload && (
          <button
            className="upload-btn"
            onClick={() => {
              handleFileUpload();
              setUpload(false);
            }}
          >
            Upload
          </button>
        )}
      </div>
      <div className="personal-sub-div">
        <div className="personal-sub-div1">
          <h5 style={{ fontWeight: "bold" }}>Full Name:</h5>
          <p style={{ color: "blue",fontStyle:"italic" }}>{currentUser?.rest?.name}</p>
        </div>
        <div className="personal-sub-div1">
          <h5 style={{ fontWeight: "bold" }}>Email:</h5>
          <p style={{ color: "blue",fontStyle:"italic" }}>{currentUser?.rest?.email}</p>
        </div>
        <div className="personal-sub-div1">
          <h5 style={{ fontWeight: "bold" }}>price:</h5>
          <p style={{ color: "blue",fontStyle:"italic" }}> { updatedPrice }</p>
        </div>
      </div>
    </div>
  );
}

export default  ProfilePage;
