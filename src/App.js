
import { useState } from 'react';
import './App.css';
import Booking from './components/Booking';
import Flightss from './components/Flightss';
import Footer from './components/Footer';
import Header from './components/Header';

import Home from './components/Home'
import '@fortawesome/fontawesome-free/css/all.min.css'
import {
  BrowserRouter,
  Link,
  Routes,
  Route
} from 'react-router-dom'
import Login from './components/Login';


function App() {

  const [searchedFlight, setSearchedFlight] = useState({
    from: "",
    destination: "",
    date: ""
  })


  return (

    <BrowserRouter>
      <Header />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Booking' element={<Booking searchedFlight={searchedFlight} setSearchedFlight={setSearchedFlight} />} />
        <Route path='/flights' element={<Flightss searchedFlight={searchedFlight} setSearchedFlight={setSearchedFlight} />} />

        <Route path='/Login' element={<Login />} />
      </Routes>

      <Footer />
    </BrowserRouter>

  );
}

export default App;
