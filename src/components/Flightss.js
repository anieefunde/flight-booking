import React, { useEffect, useState } from "react";
import flight_logo from "../assets/flight-logo-img.png";
import { useDispatch, useSelector } from "react-redux";
import {
  bookFlight,
  fetchFlights,
  viewSearchedFlight,
} from "../store/slices/flightSlice";

let newReply = {
  id: 4,
  text: "reply 2",
};

function Flightss({ searchedFlight, setSearchedFlight }) {
  const dispatch = useDispatch();

  const [bookThisFlight, setBookThisFlight] = useState({});

  const loggedUser = useSelector((state) => {
    return state.users.loggedUser;
  });

  // const newPropertyName = "username";
  // const newPropertyValue = loggedUser.username;

  let flights = useSelector((state) => {
    return state.flights;
  });

  let flightSearchedFlag = useSelector((state) => {
    return state.flights.flightSearchedFlag;
  });

  useEffect(() => {
    if (flightSearchedFlag) {
      dispatch(viewSearchedFlight(searchedFlight));
    }
    setSearchedFlight({
      from: "",
      destination: "",
      date: "",
    });
  }, []);

  const handleBookFlight = (flightid) => {
    //logic
    console.log(flightid);

    const wantedFlightToBook = flights.flights.find((flight) => {
      return flight.flightid == flightid;
    });

    // wantedFlightToBook[newPropertyName] = newPropertyValue;

    const finalFlightToBook = {
      ...wantedFlightToBook,
      username: loggedUser.username,
    };

    console.log(wantedFlightToBook);
    setBookThisFlight(finalFlightToBook);
    // console.log(bookThisFlight);
    dispatch(bookFlight(finalFlightToBook));
    console.log(flights.bookedFlights);
  };

  let content = flights.flights.map((flight, index) => {
    return (
      <div className="flights-container">
        <div className="flights-Img">
          <img src={flight_logo} alt="" />
        </div>
        <div className="flight-origin">
          <div className="origin">{flight.origin}</div>
          <div className="dept-time">{flight.departureTime}</div>
        </div>
        <div className="flight-destination">
          <div className="destination">{flight.destination}</div>
          <div className="arrival-time">{flight.arrivalTime}</div>
        </div>
        <div className="flight-fare">{flight.fare}</div>
        <div className="flight-book-button">
          <button onClick={() => handleBookFlight(flight.flightid)}>
            Book
          </button>
        </div>
      </div>
    );
  });

  return (
    <>
      <h2 className="Best-Flights">Best Flights</h2>
      {content}
    </>
  );
}

export default Flightss;
