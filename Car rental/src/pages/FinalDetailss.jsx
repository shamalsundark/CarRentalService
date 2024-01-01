import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoneyBill } from "@fortawesome/free-solid-svg-icons";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import DefaultLayout from "../components/DefaultLayout";
import Footer from "./Footer";
import Socialmedia from "./Socialmedia";
import '../pages/Finaldetails.css';
import { useNavigate } from 'react-router-dom';
import { useSelector } from "react-redux";

const carDetailsStyle = {
  maxWidth: "500px",
  margin: "auto",
  marginTop: "20px",
  padding: "20px",
  boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
  borderRadius: "8px",
  backgroundColor: "white",
};

const imageStyle = {
  width: "100%",
  maxHeight: "400px",
  objectFit: "cover",
  borderRadius: "8px",
  marginBottom: "20px",
};

const textStyle = {
  color: "#333",
  fontFamily: "Arial, sans-serif",
  fontSize: "1.2rem",
  lineHeight: "1.4",
};

const iconStyle = {
  marginRight: "8px",
};

const CarDetails = () => {
  const [car, setCar] = useState(null);
  const { id } = useParams();
  const { currentBooking } = useSelector((state) => state.booking);

  const [basicColor, setBasicColor] = useState("#E1E1E1");
  const [smartColor, setSmartColor] = useState("#E1E1E1");
  const [safeColor, setSafeColor] = useState("#E1E1E1");
  const [basicProtectionAmount, setBasicProtectionAmount] = useState(0);
  const [smartProtectionAmount, setSmartProtectionAmount] = useState(0);
  const [safeProtectionAmount, setSafeProtectionAmount] = useState(0);
  const [proceedWithoutProtection, setProceedWithoutProtection] =
    useState(false);
  const [selectedProtection, setSelectedProtection] = useState(null);
  const [originalPrice, setOriginalPrice] = useState(0);

  const getCarDetails = async () => {
    try {
      const response = await axios.post(
        `http://localhost:5000/api/auth/details`,
        { id }
      );
      setCar(response.data.cars);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getCarDetails();
  }, []);

  useEffect(() => {
    if (car) {
      setOriginalPrice(car.price);
    }
  }, [car]);

  const calculateSecurityDeposit = () => {
    if (car) {
      const carPrice = car.price;

      if (carPrice < 4000) {
        return 2000;
      } else if (carPrice < 8000) {
        return 3000;
      } else if (carPrice < 12000) {
        return 5000;
      } else {
        return 8500;
      }
    }

    return 0;
  };

  const handleCheckboxChange = () => {
    setProceedWithoutProtection(!proceedWithoutProtection);

    setBasicColor("#E1E1E1");
    setSmartColor("#E1E1E1");
    setSafeColor("#E1E1E1");
  };

  const handleProtectionClick = (protectionType, amount) => {
    if (!proceedWithoutProtection) {
      let subtractAmount = 0;

      switch (selectedProtection) {
        case "basic":
          subtractAmount = basicProtectionAmount;
          break;
        case "smart":
          subtractAmount = smartProtectionAmount;
          break;
        case "safe":
          subtractAmount = safeProtectionAmount;
          break;
        default:
          break;
      }

      const newSelectedProtection =
        selectedProtection === protectionType ? null : protectionType;

      setBasicColor(newSelectedProtection === "basic" ? "yellow" : "#E1E1E1");
      setSmartColor(newSelectedProtection === "smart" ? "yellow" : "#E1E1E1");
      setSafeColor(newSelectedProtection === "safe" ? "yellow" : "#E1E1E1");

      setSelectedProtection(newSelectedProtection);
      setBasicProtectionAmount(newSelectedProtection === "basic" ? 0 : 0);
      setSmartProtectionAmount(newSelectedProtection === "smart" ? 0 : 0);
      setSafeProtectionAmount(newSelectedProtection === "safe" ? 0 : 0);

      setCar((prevCar) => ({
        ...prevCar,
        price: calculateNewPrice(
          originalPrice,
          newSelectedProtection,
          amount - subtractAmount
        ),
      }));
    }
  };

  const calculateNewPrice = (currentPrice, selectedProtection, amount) => {
    if (!selectedProtection) {
      return currentPrice - amount;
    }

    const protectionPrice = amount;
    return currentPrice + protectionPrice;
  };

  const calculateUpdatedPrice = () => {
    if (proceedWithoutProtection) {
      return originalPrice; // Show the original price without any protection amounts
    }

    let updatedPrice = originalPrice;

    if (selectedProtection) {
      switch (selectedProtection) {
        case "basic":
          updatedPrice += basicProtectionAmount;  
          break;
        case "smart":
          updatedPrice += smartProtectionAmount;
          break;
        case "safe":
          updatedPrice += safeProtectionAmount;
          break;
        default:
          break;
      }
    }
    return updatedPrice;
  };
    const navigate = useNavigate();
    const handleNextButtonClick = () => {
      navigate('/customerform'); 
    };

  return (
    <div>
      <header className="sticky-top">
        <DefaultLayout />
      </header>
      <div className="choose">
        <div className="finalbooking">
          <h5>From: </h5>{currentBooking?.detailsAdd?.pickupLocation}
          <h5>To: </h5>{currentBooking?.detailsAdd?.dropoffLocation}
        </div>
        <div className="chooses">
          <h4>Choose Your plan</h4>
          <h4>Protection&Extras</h4>
          <h4>Review</h4>
        </div>
      </div>
      <div style={carDetailsStyle}>
        {car && (
          <>
            <h1
              style={{
                ...textStyle,
                fontSize: "2rem",
                marginBottom: "10px",
                color: "darkred",
              }}
            >
               <PaymentSection
            carImage={car.image}
            updatedPrice={calculateUpdatedPrice()}
          />
              {car.title}
            </h1>
            {car.description && <h3 style={textStyle}>{car.description}</h3>}

            {car.image && (
              <img src={car.image} alt={car.title} style={imageStyle} />
            )}
            <h3 style={{ ...textStyle, fontWeight: "bold", marginTop: "20px" }}>
              <FontAwesomeIcon icon={faMoneyBill} style={iconStyle} />
              PRICE:{" "}
              <span style={{ fontSize: "1.5rem" }}>
                ₹{calculateUpdatedPrice()}
              </span>
            </h3>
          </>
        )}
      </div>
      <div className="package">
        <div className="Basic">
          <h1>Basic</h1>
          <br></br>
          <h5>Security Deposit: ₹{calculateSecurityDeposit()}</h5>
          <h5>Cancellation as per policy</h5>
          <h5>Non-amendable</h5>
          <h5>Damage Policy Inline With T&C</h5>
          <h5>Additional Day Charges:₹100</h5>
        </div>
        <div className="premium">
          <h1>Premium</h1>
          <br></br>
          <h5>
            <FontAwesomeIcon
              icon={faCheck}
              style={{ color: "green", marginRight: "8px" }}
            />
            No Security Deposit
          </h5>
          <h5>
            <FontAwesomeIcon
              icon={faCheck}
              style={{ color: "green", marginRight: "8px" }}
            />
            Unlimited kms
          </h5>
          <h5>
            <FontAwesomeIcon
              icon={faCheck}
              style={{ color: "green", marginRight: "8px" }}
            />
            Cancellation As Per Policy
          </h5>
          <h5>
            <FontAwesomeIcon
              icon={faCheck}
              style={{ color: "green", marginRight: "8px" }}
            />
            Amendable
          </h5>
          <h5>
            <FontAwesomeIcon
              icon={faCheck}
              style={{ color: "green", marginRight: "8px" }}
            />
            Damage Policy Inline With T&C
          </h5>
        </div>
      </div>
      <div>
        <h2 className="pro" style={{ textAlign: "center" }}>
          PROTECTION PACKAGES
        </h2>
        <div className="allprotection">
          <div
            className="basicprotection"
            style={{ borderColor: basicColor }}
            onClick={() => handleProtectionClick("basic", 125)}
          >
            <h4>Basic</h4>
            <h5>Percentage:10%</h5>
            <h4>
              Amount:<b>125rs</b>
            </h4>
            <h5>Down time Charges:as per policy</h5>
            <h5>Policy excess charges waiver for</h5>
            <h5>denting and painting excluding major</h5>
            <h5>accident repairs</h5>
          </div>
          <div
            className="smartprotection"
            style={{ borderColor: smartColor }}
            onClick={() => handleProtectionClick("smart", 325)}
          >
            <h4>Smart</h4>
            <h5>Percentage:20%</h5>
            <h4>
              Amount:<b>325rs</b>
            </h4>
            <h5>Down time Charges:as per policy</h5>
            <h5>Policy excess charges waiver for</h5>
            <h5>denting and painting excluding major</h5>
            <h5>accident repairs</h5>
            <h5>Tire and Glass Protection</h5>
          </div>
          <div
            className="safeprotection"
            style={{ borderColor: safeColor }}
            onClick={() => handleProtectionClick("safe", 525)}
          >
            <h4>Safe</h4>
            <h5>Percentage:40%</h5>
            <h4>
              Amount:<b>525rs</b>
            </h4>
            <h5>Down time Charges:as per policy</h5>
            <h5>Policy excess charges waiver for</h5>
            <h5>denting and painting excluding major</h5>
            <h5>accident repairs</h5>
            <h5>Tire and Glass Protection</h5>
            <h5>Interior Protection</h5>
          </div>
        </div>
      </div>
      <div>
        <div class="btn-conteiner">
          <a class="btn-content" onClick={handleNextButtonClick}>
            <span class="btn-title">NEXT</span>
            <span class="icon-arrow">
              <svg
                width="50px"
                height="30px"
                viewBox="0 0 66 43"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
              >
                <g
                  id="arrow"
                  stroke="none"
                  stroke-width="1"
                  // fill="none"
                  // fill-rule="evenodd"
                >
                  <path
                    id="arrow-icon-one"
                    d="M40.1543933,3.89485454 L43.9763149,0.139296592 C44.1708311,-0.0518420739 44.4826329,-0.0518571125 44.6771675,0.139262789 L65.6916134,20.7848311 C66.0855801,21.1718824 66.0911863,21.8050225 65.704135,22.1989893 C65.7000188,22.2031791 65.6958657,22.2073326 65.6916762,22.2114492 L44.677098,42.8607841 C44.4825957,43.0519059 44.1708242,43.0519358 43.9762853,42.8608513 L40.1545186,39.1069479 C39.9575152,38.9134427 39.9546793,38.5968729 40.1481845,38.3998695 C40.1502893,38.3977268 40.1524132,38.395603 40.1545562,38.3934985 L56.9937789,21.8567812 C57.1908028,21.6632968 57.193672,21.3467273 57.0001876,21.1497035 C56.9980647,21.1475418 56.9959223,21.1453995 56.9937605,21.1432767 L40.1545208,4.60825197 C39.9574869,4.41477773 39.9546013,4.09820839 40.1480756,3.90117456 C40.1501626,3.89904911 40.1522686,3.89694235 40.1543933,3.89485454 Z"
                    fill="#FFFFFF"
                  ></path>
                  <path
                    id="arrow-icon-two"
                    d="M20.1543933,3.89485454 L23.9763149,0.139296592 C24.1708311,-0.0518420739 24.4826329,-0.0518571125 24.6771675,0.139262789 L45.6916134,20.7848311 C46.0855801,21.1718824 46.0911863,21.8050225 45.704135,22.1989893 C45.7000188,22.2031791 45.6958657,22.2073326 45.6916762,22.2114492 L24.677098,42.8607841 C24.4825957,43.0519059 24.1708242,43.0519358 23.9762853,42.8608513 L20.1545186,39.1069479 C19.9575152,38.9134427 19.9546793,38.5968729 20.1481845,38.3998695 C20.1502893,38.3977268 20.1524132,38.395603 20.1545562,38.3934985 L36.9937789,21.8567812 C37.1908028,21.6632968 37.193672,21.3467273 37.0001876,21.1497035 C36.9980647,21.1475418 36.9959223,21.1453995 36.9937605,21.1432767 L20.1545208,4.60825197 C19.9574869,4.41477773 19.9546013,4.09820839 20.1480756,3.90117456 C20.1501626,3.89904911 20.1522686,3.89694235 20.1543933,3.89485454 Z"
                    fill="#FFFFFF"
                  ></path>
                  <path
                    id="arrow-icon-three"
                    d="M0.154393339,3.89485454 L3.97631488,0.139296592 C4.17083111,-0.0518420739 4.48263286,-0.0518571125 4.67716753,0.139262789 L25.6916134,20.7848311 C26.0855801,21.1718824 26.0911863,21.8050225 25.704135,22.1989893 C25.7000188,22.2031791 25.6958657,22.2073326 25.6916762,22.2114492 L4.67709797,42.8607841 C4.48259567,43.0519059 4.17082418,43.0519358 3.97628526,42.8608513 L0.154518591,39.1069479 C-0.0424848215,38.9134427 -0.0453206733,38.5968729 0.148184538,38.3998695 C0.150289256,38.3977268 0.152413239,38.395603 0.154556228,38.3934985 L16.9937789,21.8567812 C17.1908028,21.6632968 17.193672,21.3467273 17.0001876,21.1497035 C16.9980647,21.1475418 16.9959223,21.1453995 16.9937605,21.1432767 L0.15452076,4.60825197 C-0.0425130651,4.41477773 -0.0453986756,4.09820839 0.148075568,3.90117456 C0.150162624,3.89904911 0.152268631,3.89694235 0.154393339,3.89485454 Z"
                    fill="#FFFFFF"
                  ></path>
                </g>
              </svg>
            </span>
          </a>
        </div>
      </div>
      <div style={{marginTop:'10px'}}>
        <Footer />
      </div>
      <div>
        <Socialmedia />
      </div>
    </div>
  );
};
export default CarDetails;
