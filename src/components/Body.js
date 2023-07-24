import React from 'react'
import SL1 from '../assets/SL1.png'
import SL2 from '../assets/SL2.png'
import SL3 from '../assets/SL3.png'
import SL4 from '../assets/SL4.png'
import Footer from './Footer'
import About from './About'

function Body() {
    return (
        <div className="offers">
            <h2 className="title">Offers</h2>
            <div className="image-container">
                <img src={SL1} alt="Offer 1" />
                <img src={SL2} alt="Offer 2" />
                <img src={SL3} alt="Offer 3" />
                <img src={SL4} alt="Offer 4" />
            </div>
        </div>
    )
}

export default Body
