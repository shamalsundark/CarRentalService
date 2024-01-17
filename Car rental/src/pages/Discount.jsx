import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function Discount() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2, 
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000, 
  };

  return (
    <div className='containerr'>
      <h2 className='heading2'>SPECIAL OFFERS AND DISCOUNTS</h2>
      <Slider {...settings}>
        <div className='square1'>
          <div className='image-container'>
            <img src='https://www.evmwheels.com/front-theme/images/special_offer_3.png' alt="Special Offer" />
            <span>
              <h2>FIRST RIDE</h2>
              <h4>Get Up 50% Off</h4>
              <h5>Your 1st Booking</h5>
              <h5>CODE:FSTR666</h5>
            </span>
          </div>
        </div>

        <div className='square2'>
          <div className='image-container'>
            <img src='https://www.evmwheels.com/front-theme/images/special_offer_2.png' alt="Special Offer 2" />
            <span>
              <h4>GET 15%OFF ON 5</h4>
              <h4>DAYS BOOKING</h4>
              <h5>CODE:HAADV666</h5>
            </span>
          </div>
        </div>

        <div className='square3'>
          <div className='image-container'>
            <img src="https://www.evmwheels.com/front-theme/images/special_offer_1.png" alt="skoda" />
            <span>
              <h4>WEEKEND SPECIAL</h4>
              <h4>GET 5% OFF</h4>
              <h5>CODE:WKND666</h5>
            </span>
          </div>
        </div>
      </Slider>
    </div>
  );
}

export default Discount;
