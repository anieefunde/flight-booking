import React from 'react'
import logo from '../assets/logo.png'
import { Link } from 'react-router-dom'
import Body from './Body'


function Header() {

    return (
        <nav className="navbar">
            <div className="navbar-left">
                <div className="menu-icon">
                    {/* Replace this with your desired menu icon */}
                    <span>☰ Fly-Up</span>
                </div>
                <div className="logo">
                    {/* Replace this with your logo */}
                    <Link to={'/'}><img src={logo} alt="Flight Booking Logo" /></Link>
                </div>
            </div>
            <div className="navbar-right">
                <ul className="navbar-links">
                    {/* <li><a href="#">Booking</a></li>
                    <li><a href="#">Login</a></li> */}
                    <li><Link to={'/Booking'}>Booking</Link> </li>
                    <li> <Link to={'/Login'}>Login</Link></li>
                </ul>
            </div>
        </nav>
    )
}

export default Header
