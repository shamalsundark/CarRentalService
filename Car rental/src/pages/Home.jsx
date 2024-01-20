import DefaultLayout from "../components/DefaultLayout";
import CarRentalForm from "./CarRentalForm";
import Discount from "./Discount";
import Featured from "./Featured";
import MediaCover from "./Video";
import Vintage from "./Vintage";
import Whywor from "./Whywor";
import Map from "./Map";
import Footer from "./Footer";
import Socialmedia from "./Socialmedia";
import PopularBrands from "./PopularBrands"
import Tags from "./Tags";



function Home() {
  return (
    <div>
      <div className="sticky-top">
        <DefaultLayout />
      </div>
      <MediaCover />
      <CarRentalForm />
      <Discount />
     
      <Featured />
      <PopularBrands/>
      <Vintage />
      <Map />
      <Tags />
      <Whywor />
      <Footer />
      <Socialmedia />
      
      
      
    </div>
  );
}

export default Home;
