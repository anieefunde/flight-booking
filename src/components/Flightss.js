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
import SortByPanel from "./SortByPanel";

function Flightss({ searchedFlight, setSearchedFlight }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [bookThisFlight, setBookThisFlight] = useState({});
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [passengerDetails, setPassengerDetails] = useState({
    passengerName: "",
    seats: "",
  });

  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const validate = (values) => {
    const errors = {};

    if (!values.passengerName) {
      errors.PassengerName = "Please enter passenger name";
    } else if (!values.seats) {
      errors.Seats = "Please enter no of seats";
    }

    return errors;
  };
  // sorting logic

  const [currentSort, setCurrentSort] = useState("");

  const handleSortChange = (option) => {
    setCurrentSort(option);
    // Perform your sorting logic here based on the selected option
  };

  // sorting logic end

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

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      // console.log(validUser);
    }
  }, [formErrors]);

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
  };

  const bookMyFlight = () => {
    const finalFlightToBook = {
      ...bookThisFlight,
      username: loggedUser.username,
      passengerName: passengerDetails.passengerName,
      seats: passengerDetails.seats,
    };
    setFormErrors(validate(passengerDetails));
    if (
      passengerDetails.passengerName !== "" &&
      passengerDetails.seats !== ""
    ) {
      setBookThisFlight(finalFlightToBook);
      dispatch(bookFlight(finalFlightToBook));
      console.log(flights.bookedFlights);
      alert("Flight Booked Succesfully");
      navigate("/Profile");
    }
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
        <div className="flight-date">
          <div className="date">{flight.date}</div>
        </div>
        <div className="flight-fare">{flight.fare} $</div>
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

  return flights.flights.length !== 0 ? (
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
        <p className="formErrors">{formErrors.PassengerName}</p>
        <input
          onChange={(e) =>
            setPassengerDetails({ ...passengerDetails, seats: e.target.value })
          }
          type="number"
          placeholder="Enter No of Seats"
        />
        <p className="formErrors">{formErrors.Seats}</p>
        <button onClick={bookMyFlight}>Book</button>
      </Modal>

      <h2 className="Best-Flights">Best Flights</h2>

      {/* if flights are savailable then only it will show sort option */}
      {flights.flights.length !== 0 && (
        <SortByPanel onSortChange={handleSortChange} />
      )}

      {content}
    </>
  ) : (
    <h2 style={{ textAlign: "center", color: "red" }}>No Flights Available</h2>
  );
}

export default Flightss;
