import { useState } from "react";
import "./App.css";
import Booking from "./components/Booking";
import Flightss from "./components/Flightss";
import Footer from "./components/Footer";
import Header from "./components/Header";

import Home from "./components/Home";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import { useSelector } from "react-redux";
import Profile from "./components/Profile";
import SignUp from "./components/SignUp";

function App() {
  const [searchedFlight, setSearchedFlight] = useState({
    from: "",
    destination: "",
    date: "",
  });

  const [selectedFlightFlag, setSelectedFlightFlag] = useState(false);
  let flights = useSelector((state) => {
    return state.flights;
  });
  const [stateToReRenderNavbarOnly, setStateToReRenderNavbarOnly] =
    useState(false);

  return (
    <BrowserRouter>
      <Header
        stateToReRenderNavbarOnly={stateToReRenderNavbarOnly}
        setStateToReRenderNavbarOnly={setStateToReRenderNavbarOnly}
      />

      <Routes>
        <Route
          path="/"
          element={
            <Home
              selectedFlightFlag={selectedFlightFlag}
              setSelectedFlightFlag={setSelectedFlightFlag}
            />
          }
        />
        <Route
          path="/Booking"
          element={
            <Booking
              searchedFlight={searchedFlight}
              setSearchedFlight={setSearchedFlight}
            />
          }
        />
        <Route
          path="/flights"
          element={
            <Flightss
              searchedFlight={searchedFlight}
              setSearchedFlight={setSearchedFlight}
              selectedFlightFlag={selectedFlightFlag}
            />
          }
        />

        <Route
          path="/Login"
          element={
            <Login
              stateToReRenderNavbarOnly={stateToReRenderNavbarOnly}
              setStateToReRenderNavbarOnly={setStateToReRenderNavbarOnly}
            />
          }
        />

        <Route path="/Profile" element={<Profile />} />

        <Route path="/Signup" element={<SignUp />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
