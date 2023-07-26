import React, { useEffect } from 'react'
import flight_logo from '../assets/flight-logo-img.png'
import { useDispatch, useSelector } from 'react-redux'
import { fetchFlights, viewSearchedFlight } from '../store/slices/flightSlice';


function Flightss({ searchedFlight, setSearchedFlight }) {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(viewSearchedFlight(searchedFlight))
    }, [])

    const flights = useSelector((state) => {
        return state.flights
    })




    let content = flights.flights.map((flight, index) => {
        return (
            <div className="flights-container">

                <div className="flights-Img">
                    <img src={flight_logo} alt="" />
                </div>
                <div className="flight-origin">
                    <div className="origin">
                        {flight.origin}
                    </div>
                    <div className="dept-time">
                        {flight.departureTime}
                    </div>
                </div>
                <div className="flight-destination">
                    <div className="destination">
                        {flight.destination}
                    </div>
                    <div className="arrival-time">
                        {flight.arrivalTime}
                    </div>
                </div>
                <div className="flight-fare">
                    {flight.fare}
                </div>
                <div className="flight-book-button">
                    <button >
                        Book
                    </button>
                </div>
            </div>
        )
    })


    return (
        <>
            <h2 className='Best-Flights'>Best Flights</h2>
            {content}
        </>



    )
}

export default Flightss
