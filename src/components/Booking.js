import React from 'react'

function Booking() {
    return (
        <div className="booking">
            <h2 className="title">Book Your Flight</h2>
            <div className="search-container">
                <div className="search-group">
                    <label htmlFor="from">From:</label>
                    <input type="text" id="from" placeholder="Departure location" />
                </div>
                <div className="search-group">
                    <label htmlFor="to">To:</label>
                    <input type="text" id="to" placeholder="Destination location" />
                </div>
                <div className="search-group">
                    <label htmlFor="date">Date:</label>
                    <input type="date" id="date" />
                </div>
                <button className="search-button">Search</button>
            </div>
        </div>
    )
}

export default Booking
