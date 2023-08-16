import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchFlights } from "../store/slices/flightSlice";
import logo from "../assets/logo.png";
function FlightCard() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchFlights());
  }, []);

  const flights = useSelector((state) => {
    return state.flights;
  });

  console.log(flights);

  let content = flights.flights.map((flight) => {
    return (
      <div
        style={{
          border: "1px solid #ccc",
          borderRadius: "5px",
          padding: "10px",
          marginBottom: "10px",
          boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
          backgroundColor: "#fff",
        }}
        className="Flight-Card"
      >
        <img style={{ width: "100px", height: "100px" }} src={logo} alt="" />
        <div>
          <h4>from</h4>
          <p>{flight.origin}</p>
          <p>{flight.departureTime}</p>
        </div>
        <div>
          <h4>to</h4>
          <p>{flight.destination}</p>
          <p>{flight.arrivalTime}</p>
        </div>
        <div>
          <h4>Fare</h4>
          <p>{flight.fare + "$"}</p>
        </div>
      </div>
    );
  });

  return <>{content}</>;
}

export default FlightCard;
