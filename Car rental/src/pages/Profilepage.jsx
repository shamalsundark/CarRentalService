import React from 'react'
import '../pages/Profilepage.css'
import DefaultLayout from "../components/DefaultLayout";
import { Avatar } from '@mui/material';
import { useSelector } from 'react-redux';


const Profilepage = () => {
    const { currentUser } = useSelector((state) => state.user);
    const { updatedPrice } = useSelector((state) => state.price);
  return (
    <>
    <header className="sticky-top">
    <DefaultLayout />
  </header>
  
    <div className='profilemain'> 
     <div className='profileleft'>
       
        <div className='leftsmall'>
            
       <Avatar className='avatarp' sx={{width:80,height:80}}/>

        </div>
      <div>
        <h4>NAME:{currentUser?.rest?.name}</h4><br />
        <h4>EMAIL:{currentUser?.rest?.email}</h4>
      </div>
    </div> 

    <div className='profileright'>
        <div style={{padding:'2rem',color:'white'}}>
       <h4>SELECTED CAR:</h4>
       <h4>PRICE: { updatedPrice }</h4>
       </div>
    </div>
  
    </div>
    </>
  )
}

export default Profilepage
