import React, { useEffect, useState } from "react";
import bg from "../assets/bg.jpg";
import icici from "../assets/icici.png";
import logo from "../assets/logo.png";
import { fetchFlights, viewSearchedFlight } from "../store/slices/flightSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Flightss from "./Flightss";
import flight_logo from "../assets/flight-logo-img.png";

function Booking({ searchedFlight, setSearchedFlight }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  let { flightSearchedFlag } = useSelector((state) => {
    return state.flights;
  });
  // const [flightDetected, setFlightDetected] = useState(false)
  console.log(flightSearchedFlag);
  console.log(
    searchedFlight.from + searchedFlight.destination + searchedFlight.date
  );
  console.log(typeof searchedFlight.date);
  const handleViewSearch = () => {
    if (
      searchedFlight.from !== "" &&
      searchedFlight.destination !== "" &&
      searchedFlight.date !== ""
    ) {
      dispatch(viewSearchedFlight(searchedFlight));
      navigate("/flights");
      // setFlightDetected(true)
      // flightSearchedFlag = true
      console.log(flightSearchedFlag);
    } else {
      alert("Enter Source and destination");
    }
  };

  // useEffect(() => {
  //     dispatch(fetchFlights())
  //     dispatch(viewSearchedFlight(searchedFlight))
  //     setSearchedFlight({
  //         from: "",
  //         destination: "",
  //         date: ""
  //     })
  // }, [])

  // const flights = useSelector((state) => {
  //     return state.flights
  // })

  let content = (
    <div className="container">
      <img src={bg} alt="Background Image" />

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
            type="text"
            placeholder="From"
            onChange={(e) =>
              setSearchedFlight({ ...searchedFlight, from: e.target.value })
            }
          />
          <input
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

  // let content2 = <div className="container">
  //     <img src={bg} alt="Background Image" />

  //     <div className="overlay">
  //         <div className='overlay-title'>
  //             <img style={{ height: '60px', width: '60px', marginRight: '10px' }} src={logo} alt="" />
  //             <h3>Flight Booking</h3>
  //         </div>
  //         <img src={icici} id='icici-img' alt="" />
  //         <div className="search-box">
  //             <input type="text" placeholder="From" onChange={(e) => setSearchedFlight({ ...searchedFlight, from: e.target.value })} />
  //             <input type="text" placeholder="Destination" onChange={(e) => setSearchedFlight({ ...searchedFlight, destination: e.target.value })} />
  //             <input type="date" placeholder="Select Date" onChange={(e) => setSearchedFlight({ ...searchedFlight, date: e.target.value })} />
  //             <button onClick={handleViewSearch} type="button">Search</button>
  //         </div>
  //         <div className="searchedFlights-below ">
  //             {
  //                 flights.flights.map((flight, index) => {
  //                     return (
  //                         <div className="flights-container">

  //                             <div className="flights-Img">
  //                                 <img src={flight_logo} alt="" />
  //                             </div>
  //                             <div className="flight-origin">
  //                                 <div className="origin">
  //                                     {flight.origin}
  //                                 </div>
  //                                 <div className="dept-time">
  //                                     {flight.departureTime}
  //                                 </div>
  //                             </div>
  //                             <div className="flight-destination">
  //                                 <div className="destination">
  //                                     {flight.destination}
  //                                 </div>
  //                                 <div className="arrival-time">
  //                                     {flight.arrivalTime}
  //                                 </div>
  //                             </div>
  //                             <div className="flight-fare">
  //                                 {flight.fare}
  //                             </div>
  //                             <div className="flight-book-button">
  //                                 <button >
  //                                     Book
  //                                 </button>
  //                             </div>
  //                         </div>
  //                     )
  //                 })
  //             }
  //         </div>

  //     </div>
  // </div>
  return <>{content}</>;
}

export default Booking;
