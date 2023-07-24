import React from 'react'

function Footer() {
    return (
        <footer className="footer">
            <div className="quick-links">
                <h3>Quick Links</h3>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Flights</a></li>
                    <li><a href="#">Hotels</a></li>
                    <li><a href="#">About Us</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </div>
            <div className="services">
                <h3>Services</h3>
                <ul>
                    <li><a href="#">Flight Booking</a></li>
                    <li><a href="#">Hotel Booking</a></li>
                    <li><a href="#">Car Rental</a></li>
                    <li><a href="#">Travel Insurance</a></li>
                </ul>
            </div>
            <div className="about-us">
                <h3>About Us</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div className="social-media">
                <h3>Follow Us</h3>
                <div className="icons">
                    {/* Add your social media icons here */}
                    <a href="#"><i className="fab fa-facebook"></i></a>
                    <a href="#"><i className="fab fa-twitter"></i></a>
                    <a href="#"><i className="fab fa-instagram"></i></a>
                </div>
            </div>
            <div className="download-options">
                <h3>Download our app</h3>
                <div className="icons">
                    {/* Add your Google Play and iOS icons here */}
                    <a href="#"><i className="fab fa-google-play"></i></a>
                    <a href="#"><i className="fab fa-apple"></i></a>
                </div>
            </div>
        </footer>
    )
}

export default Footer
