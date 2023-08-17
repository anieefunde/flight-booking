import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchFlights,
  getSelectedFlight,
  viewSearchedFlight,
} from "../store/slices/flightSlice";
import FlightImg0 from "../assets/flightImg1.png";
import FlightImg1 from "../assets/FlightImg2.png";
import FlightImg2 from "../assets/FlightImg3.png";
import FlightImg3 from "../assets/FlightImg4.png";
import { useNavigate } from "react-router-dom";

const title = "Pune";
const description = "Mumbai";

function Card() {
  const FlightImg = [
    FlightImg0,
    FlightImg1,
    FlightImg2,
    FlightImg3,
    FlightImg0,
    FlightImg1,
  ];
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(fetchFlights());
  }, []);

  const flights = useSelector((state) => {
    return state.flights;
  });

  console.log(flights);

  const openSelectedFlight = (flightId) => {
    dispatch(getSelectedFlight(flightId));
    navigate("/flights");
  };

  let content = flights.flights.map((flight, index) => {
    return (
      <div
        className="Card"
        style={{ cursor: "pointer" }}
        onClick={() => openSelectedFlight(flight.flightid)}
      >
        <img id="Card-Img" src={FlightImg[index]} alt={"NoImg"} />
        <div className="Card-content">
          <div>
            <p>{flight.destination}</p>
            <p>{flight.origin + "->" + flight.destination}</p>
          </div>
          <div className="Fare-Date">
            <p>{flight.fare}</p>
            <p>{flight.date}</p>
          </div>
        </div>
      </div>
    );
  });

  return (
    <>
      <h2 id="top-flights-title">Top Flights</h2>
      {content}
    </>
  );
}

export default Card;
