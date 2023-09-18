import React, { useEffect, useState } from "react";
import bg from "../assets/bg.jpg";
import icici from "../assets/icici.png";
import logo from "../assets/logo.png";
import {
  changleFlightSearchFlag,
  viewSearchedFlight,
} from "../store/slices/flightSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function Booking({ searchedFlight, setSearchedFlight }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  let { flightSearchedFlag } = useSelector((state) => {
    return state.flights;
  });

  console.log(flightSearchedFlag);
  console.log(
    searchedFlight.from + searchedFlight.destination + searchedFlight.date
  );
  console.log(typeof searchedFlight.date);
  const handleViewSearch = () => {
    if (searchedFlight.from !== "" && searchedFlight.destination !== "") {
      dispatch(viewSearchedFlight(searchedFlight));
      dispatch(changleFlightSearchFlag());
      navigate("/flights");
    } else {
      alert("Enter Source and destination");
    }
  };
  let content = (
    <div className="container">
      <img src={bg} id="bgImgBooking" alt="Background Image" />

      <div className="overlay">
        <div className="overlay-title">
          <img
            style={{ height: "60px", width: "60px", marginRight: "10px" }}
            src={logo}
            alt=""
          />
          <h3>Flight Booking</h3>
        </div>
        <img src={icici} id="icici-img" alt="" />
        <div className="search-box">
          <input
            className="input"
            type="text"
            placeholder="From"
            onChange={(e) =>
              setSearchedFlight({ ...searchedFlight, from: e.target.value })
            }
          />
          <input
            className="input"
            type="text"
            placeholder="Destination"
            onChange={(e) =>
              setSearchedFlight({
                ...searchedFlight,
                destination: e.target.value,
              })
            }
          />
          <input
            className="input"
            type="date"
            placeholder="Select Date"
            onChange={(e) =>
              setSearchedFlight({ ...searchedFlight, date: e.target.value })
            }
          />
          <button onClick={handleViewSearch} type="button">
            Search
          </button>
        </div>
      </div>
    </div>
  );

  return <>{content}</>;
}

export default Booking;
