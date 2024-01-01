import { useSelector } from "react-redux";
import DefaultLayout from "../components/DefaultLayout";
import Footer from "./Footer";
import Navbar from "./Navigationbar";


function ShowBookingDetails() {
 ;
  const { currentBooking } = useSelector((state) => state.booking);
  console.log(currentBooking);
  return (
    <header className="sticky-top">
      <header className="sticky-top">
        <DefaultLayout />
      </header>
      <div>
        <div className="mainnav">
          <div style={{position:'relative',top:'100px',height:'100px'}}>
            <div
              className="pickup"
              style={{ width: "300px", padding: "20px", marginBottom: "20px" }}
            >
              <p>
                <strong>Pickup Location:</strong> {currentBooking?.detailsAdd?.pickupLocation}
              </p>
              <p>
                <strong>Drop Off Location:</strong> {currentBooking?.detailsAdd?.dropOffLocation}
              </p>
            </div>
            <div
              className="pickup"
              style={{ width: "300px", padding: "20px", marginBottom: "20px" }}
            >
              <p>
                <strong>Pickup Date:</strong> {currentBooking?.detailsAdd?.pickupDate}
              </p>
              <p>
                <strong>Pickup Time:</strong> {currentBooking?.detailsAdd?.pickupTime}
              </p>
            </div>
            <div
              className="pickup"
              style={{ width: "300px", padding: "20px", marginBottom: "20px" }}
            >
              <p>
                <strong>Drop Off Date:</strong> {currentBooking?.detailsAdd?.dropOffDate}
              </p>
              <p>
                <strong>Drop Off Time:</strong> {currentBooking?.detailsAdd?.dropOffTime}
              </p>
            </div>
          </div>

          <div className="newnav">
              <Navbar />
            <div className="pickupmain">
              <img
                style={{ position: "relative", left: "30px",bottom:"12px", width: "1000px",height:"500px" }}
                src="https://images.pexels.com/photos/120049/pexels-photo-120049.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="benz"
              />
            </div>
          </div>



        </div>
        <Footer/>
      </div>
    </header>
  );
}

export default ShowBookingDetails;
