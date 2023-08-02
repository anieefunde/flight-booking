import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import ProfileCard from './ProfileCard';
import { FaPlane } from 'react-icons/fa'
import { BiArrowBack } from 'react-icons/bi'

function Profile() {

    const loggedUser = useSelector((state) => {
        return state.users.loggedUser;
    })

    const [showBookingDetails, setShowBookingDetails] = useState(false);
    const [myBookingDetails, setMyBookingDetails] = useState({})

    const bookings = loggedUser.Bookings;
    console.log(loggedUser);

    const handleCheckBookingDetails = (seat) => {
        console.log(seat);
        setShowBookingDetails(true)

        const wantedBookingDetails = bookings.find(booking => {
            return booking.seatNo === seat;
        })
        console.log(wantedBookingDetails);
        setMyBookingDetails(wantedBookingDetails)
    }

    const handleCloseBookingDetails = () => {
        setShowBookingDetails(false)
    }

    return (
        <>
            <ProfileCard />
            <div className="Profile">
                {showBookingDetails ? <BiArrowBack onClick={handleCloseBookingDetails} id='back-arrow' /> : ''}
                <h3> Booking Information</h3>
                {
                    showBookingDetails

                        ?

                        // <ul className="booking-details">
                        //     <li>Passenger Name :{myBookingDetails.passengerName}</li>
                        //     <li>Seat No :{myBookingDetails.seatNo}</li>
                        //     <li>Origin : {myBookingDetails.origin}</li>
                        //     <li>Destination : {myBookingDetails.destination}</li>
                        //     <li>Departure Time :{myBookingDetails.departureTime}</li>
                        //     <li>Arrival Time :{myBookingDetails.arrivalTime}</li>
                        //     <li>Date : {myBookingDetails.date}</li>
                        // </ul>

                        <div className="booking-details">
                            <div className="Booking-Labels">
                                <h4 >Passenger Name : </h4>
                                <p className='bd-data'>{myBookingDetails.passengerName}</p>
                            </div>
                            <div className="Booking-Labels">
                                <h4 >Seat No : </h4>
                                <p className='bd-data'>{myBookingDetails.seatNo}</p>
                            </div>
                            <div className="Booking-Labels">
                                <h4 >Starting From : </h4>
                                <p className='bd-data'>{myBookingDetails.origin}</p>
                            </div>
                            <div className="Booking-Labels">
                                <h4 >Departure Time : </h4>
                                <p className='bd-data'>{myBookingDetails.departureTime}</p>
                            </div>
                            <div className="Booking-Labels">
                                <h4 >Destination : </h4>
                                <p className='bd-data'>{myBookingDetails.destination}</p>
                            </div>
                            <div className="Booking-Labels">
                                <h4 >Arrival Time : </h4>
                                <p className='bd-data'>{myBookingDetails.arrivalTime}</p>
                            </div>
                            <div className="Booking-Labels">
                                <h4 >Date : </h4>
                                <p className='bd-data'>{myBookingDetails.date}</p>
                            </div>
                        </div>

                        :
                        bookings.map((booking, index) =>
                        (
                            <div onClick={() => handleCheckBookingDetails(booking.seatNo)} className="bookingCard">
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
                        )
                        )
                }
            </div>
        </>

    )
}

export default Profile


//     < div className = 'Profile' >
//         <h3 className='Bookings-Heading'>My Bookings</h3>
// {
//     bookings.map((booking, index) => {
//         return (

//             <div onClick={handleBookingDetailsCheck(booking.seatNo)} className="booking-card-container">
//                 <div className="bookings-card">
//                     <div className="leaveFrom">
//                         <h3 className="origin">{booking.origin}</h3>
//                         <p>{booking.departureTime}</p>
//                     </div>
//                     <FaPlane />
//                     <div className="goingTo">
//                         <h3 className="destination">{booking.destination}</h3>
//                         <p>{booking.arrivalTime}</p>
//                     </div>
//                 </div>
//             </div>

//         )
//     })
// }
