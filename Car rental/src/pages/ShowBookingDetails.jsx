import DefaultLayout from "../components/DefaultLayout";
import Navbar from "./Navigationbar";
import { useLocation } from "react-router-dom";

function ShowBookingDetails() {
  const location = useLocation();
  const formData = location.state;

  const calculateTimeDifference = (startDate, endDate) => {
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
       <header className='sticky-top'><DefaultLayout/></header>
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
            <Navbar />
            <div>
              <h1></h1>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}


export default ShowBookingDetails;