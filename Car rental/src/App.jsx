
import './App.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import BookingCar from './pages/BookingCar'
import Home from './pages/Home'
import Register from './pages/Register'
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './pages/Login'
import ShowBookingDetails from './pages/ShowBookingDetails'
import CarList from './pages/CarList'
import ErrorPage from './pages/ErrorPage'
import Sedan from './pages/Sedan'
import DefaultLayout from './components/DefaultLayout'






function App() {


  return (
    <div>
   <BrowserRouter>
       <DefaultLayout />
   <Routes>
     <Route path="/" element={<Home/>}/>
     <Route path="/register" element={<Register/>}/>
     <Route path="/Bookingcar" element={<BookingCar/>}/>
     <Route path="/login" element={<Login/>}/>
     <Route path="/Bookingdetails" element={<ShowBookingDetails/>}/>
     <Route path="/cars" element={<CarList/>}/>
     <Route path="/*" element={<ErrorPage/>}/>
     <Route path="/sedan" element={<Sedan/>}/>

     </Routes>
   
   
   </BrowserRouter>
    </div>
   
  )
}

export default App
