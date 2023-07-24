import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchFlights } from '../store/slices/flightSlice';
import FlightImg0 from '../assets/flightImg1.png'
import FlightImg1 from '../assets/FlightImg2.png'
import FlightImg2 from '../assets/FlightImg3.png'
import FlightImg3 from '../assets/FlightImg4.png'

const title = "Pune"
const description = "Mumbai"

function Card() {

    const FlightImg = [FlightImg0, FlightImg1, FlightImg2, FlightImg3];
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchFlights())
    }, [])

    const flights = useSelector((state) => {
        return state.flights
    })

    console.log(flights);
    let content = flights.flights.map((flight, index) => {
        return (
            <div className='Card'>
                <img id='Card-Img' src={FlightImg[index]} alt={"NoImg"} />
                <div className='Card-content'>
                    <div>
                        <p >{flight.destination}</p>
                        <p >{flight.origin + "->" + flight.destination}</p>
                    </div>
                    <div className='Fare-Date'>
                        <p>{flight.fare}</p>
                        <p>{flight.date}</p>
                    </div>
                </div>
            </div>
        )
    })

    return (
        <>
            <h2 >Top Flights</h2>
            {content}
        </>
    )

}

export default Card
