
import DefaultLayout from '../components/DefaultLayout'
import CarRentalForm from './CarRentalForm'
import Discount from './Discount'
import Featured from './Featured'
import MediaCover from './Video'
import Vintage from './Vintage'
import Whywor from './Whywor'
import Map from './Map'
import Footer from './Footer'
import Socialmedia from './Socialmedia'



function Home() {



  return (
    <>
  <MediaCover/>
      <CarRentalForm/>
      <Discount/>
      <Featured/>
      <Vintage/>
      <Map/>
      <Whywor/>
      <Footer/>
      <Socialmedia/>

      
      
      </>
  )
}

export default Home
