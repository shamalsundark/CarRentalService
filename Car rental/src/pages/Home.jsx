
import DefaultLayout from '../components/DefaultLayout'
import CarRentalForm from './CarRentalForm'
import Discount from './Discount'
import Featured from './Featured'
import MediaCover from './Video'
import Vintage from './Vintage'
import Whywor from './Whywor'


function Home() {



  return (
    <>
    <DefaultLayout/><MediaCover/>
      <CarRentalForm/>
      <Discount/>
      <Featured/>
      <Vintage/>
      <Whywor/>
      

      
      
      </>
  )
}

export default Home
