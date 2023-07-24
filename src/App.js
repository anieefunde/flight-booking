
import './App.css';
import About from './components/About';
import Body from './components/Body';
import Footer from './components/Footer';
import Header from './components/Header';
import Booking from './components/Booking'
import Home from './components/Home'
import '@fortawesome/fontawesome-free/css/all.min.css'
import {
  BrowserRouter,
  Link,
  Routes,
  Route
} from 'react-router-dom'
import FlightCard from './components/FlightCard';
import Card from './components/Card';


function App() {
  return (

    <BrowserRouter>
      <Header />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Booking' element={<Booking />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
