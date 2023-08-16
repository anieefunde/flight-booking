import React, { useEffect, useState } from "react";
import flight_logo from "../assets/flight-logo-img.png";
import { useDispatch, useSelector } from "react-redux";
import {
  bookFlight,
  fetchFlights,
  viewSearchedFlight,
} from "../store/slices/flightSlice";
import { useNavigate } from "react-router-dom";
import Modal from "react-modal";
import { AiFillCloseCircle } from "react-icons/ai";

function Flightss({ searchedFlight, setSearchedFlight }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [bookThisFlight, setBookThisFlight] = useState({});
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [passengerDetails, setPassengerDetails] = useState({
    passengerName: "",
    seats: "",
  });

  const openModal = () => {
    setModalIsOpen(true);
  };
  const closeModal = () => {
    setModalIsOpen(false);
  };

  const loggedIn = useSelector((state) => {
    return state.users.loggedIn;
  });
  const loggedUser = useSelector((state) => {
    return state.users.loggedUser;
  });

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
    if (loggedIn === false) {
      navigate("/Login");
    } else if (loggedIn === true && modalIsOpen === false) {
      openModal();

      const wantedFlightToBook = flights.flights.find((flight) => {
        return flight.flightid == flightid;
      });

      setBookThisFlight(wantedFlightToBook);
      console.log(bookThisFlight);
    }

    // else {
    //   console.log(flightid);

    //   const wantedFlightToBook = flights.flights.find((flight) => {
    //     return flight.flightid == flightid;
    //   });

    //   const finalFlightToBook = {
    //     ...wantedFlightToBook,
    //     username: loggedUser.username,
    //     passengerName: passengerDetails.passengerName,
    //     seats: passengerDetails.seats,
    //   };

    //   console.log(wantedFlightToBook);
    //   setBookThisFlight(finalFlightToBook);
    //   dispatch(bookFlight(finalFlightToBook));
    //   console.log(flights.bookedFlights);
    //   alert("Flight Booked Succesfully");
    //   navigate("/Profile");
    // }
  };

  const bookMyFlight = () => {
    const finalFlightToBook = {
      ...bookThisFlight,
      username: loggedUser.username,
      passengerName: passengerDetails.passengerName,
      seats: passengerDetails.seats,
    };

    // console.log(wantedFlightToBook);
    setBookThisFlight(finalFlightToBook);
    dispatch(bookFlight(finalFlightToBook));
    console.log(flights.bookedFlights);
    alert("Flight Booked Succesfully");
    navigate("/Profile");
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

  const customModalStyles = {
    content: {
      width: "40%",
      height: "60%",
      margin: "auto",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      marginTop: "100px",
    },
  };

  return (
    <>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
        style={customModalStyles}
      >
        <AiFillCloseCircle onClick={closeModal} id="CloseModalBtn" />
        <h2>Enter Passenger Details</h2>
        <input
          onChange={(e) =>
            setPassengerDetails({
              ...passengerDetails,
              passengerName: e.target.value,
            })
          }
          type="text"
          placeholder="Enter Full Name"
        />
        <input
          onChange={(e) =>
            setPassengerDetails({ ...passengerDetails, seats: e.target.value })
          }
          type="number"
          placeholder="Enter No of Seats"
        />
        <button onClick={bookMyFlight}>Book</button>
      </Modal>
      <h2 className="Best-Flights">Best Flights</h2>
      {content}
    </>
  );
}

export default Flightss;
