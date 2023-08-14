import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProfileCard from "./ProfileCard";
import { FaPlane } from "react-icons/fa";
import { BiArrowBack } from "react-icons/bi";
import { cancelBooking, showBookings } from "../store/slices/flightSlice";

function Profile() {
  const loggedUser = useSelector((state) => {
    return state.users.loggedUser;
  });

  const dispatch = useDispatch();

  // console.log(bookingsDetails);
  const bookingsDetails = useSelector((state) => {
    return state.flights.bookings;
  });

  console.log(bookingsDetails);

  const [showBookingDetails, setShowBookingDetails] = useState(false);
  const [myBookingDetails, setMyBookingDetails] = useState({});

  useEffect(() => {
    dispatch(showBookings());
  }, [showBookingDetails]);
  // const bookings = loggedUser.Bookings;
  // console.log(loggedUser);

  const handleCheckBookingDetails = (username, flightid) => {
    console.log(username);
    dispatch(showBookings());
    setShowBookingDetails(true);

    const wantedBookingDetails = bookingsDetails.find((booking) => {
      return booking.username === username && booking.flightid == flightid;
    });
    console.log(wantedBookingDetails);
    setMyBookingDetails(wantedBookingDetails);
  };

  const handleCloseBookingDetails = () => {
    setShowBookingDetails(false);
  };

  const deleteBooking = (booking) => {
    dispatch(cancelBooking(booking));
    alert("Booking Cancelled");
    setShowBookingDetails(false);
    // window.location.reload(true); // Refresh the entire html page
  };

  return (
    <>
      <ProfileCard />
      <div className="Profile">
        {showBookingDetails ? (
          <BiArrowBack onClick={handleCloseBookingDetails} id="back-arrow" />
        ) : (
          ""
        )}
        <h3> Booking Information</h3>
        {showBookingDetails ? (
          <div className="booking-details">
            {/* <div className="Booking-Labels">
              <h4>Passenger Name : </h4>
              <p className="bd-data">{myBookingDetails.passengerName}</p>
            </div>
            <div className="Booking-Labels">
              <h4>Seat No : </h4>
              <p className="bd-data">{myBookingDetails.seatNo}</p>
            </div> */}
            <div className="Booking-Labels">
              <h4>Starting From : </h4>
              <p className="bd-data">{myBookingDetails.origin}</p>
            </div>
            <div className="Booking-Labels">
              <h4>Departure Time : </h4>
              <p className="bd-data">{myBookingDetails.departureTime}</p>
            </div>
            <div className="Booking-Labels">
              <h4>Destination : </h4>
              <p className="bd-data">{myBookingDetails.destination}</p>
            </div>
            <div className="Booking-Labels">
              <h4>Arrival Time : </h4>
              <p className="bd-data">{myBookingDetails.arrivalTime}</p>
            </div>
            <div className="Booking-Labels">
              <h4>Date : </h4>
              <p className="bd-data">{myBookingDetails.date}</p>
            </div>
            <button
              id="cancelBooking"
              onClick={() => deleteBooking(myBookingDetails)}
            >
              cancel
            </button>
          </div>
        ) : (
          bookingsDetails.map((booking, index) => {
            if (loggedUser.username == booking.username) {
              return (
                <div
                  onClick={() =>
                    handleCheckBookingDetails(
                      booking.username,
                      booking.flightid
                    )
                  } //seatNo in place of username
                  className="bookingCard"
                >
                  <div className="leaveFrom">
                    <h3>{booking.origin}</h3>
                    <p>{booking.departureTime}</p>
                  </div>
                  <FaPlane />
                  <div className="goingTo">
                    <h3>{booking.destination}</h3>
                    <p>{booking.arrivalTime}</p>
                  </div>
                </div>
              );
            }
          })
        )}
      </div>
    </>
  );
}

export default Profile;
