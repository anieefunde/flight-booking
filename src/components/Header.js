import React from 'react'
import logo from '../assets/logo.png'
import { Link } from 'react-router-dom'
import Body from './Body'
import ixigo from '../assets/ixigo.png'
import login from '../assets/login.png'
import { BsAirplane } from 'react-icons/bs'
import { ImProfile } from 'react-icons/im'
function Header() {

    return (
        <nav className="navbar">
            <div className="navbar-left">
                <div className="menu-icon">
                    {/* Replace this with your desired menu icon */}
                    {/* <span id='Menu-Icon'>☰ </span> */}
                    <Link to={'/'}> <img src={ixigo} style={{ height: "40px", width: '100px', marginLeft: '10px' }} /></Link>
                </div>
                <div className="nav-left-menu">
                    <p className='nav-left-menu-item'> <BsAirplane /></p>
                    <Link className='flights-link' to={'flights'}> <p className='nav-left-menu-item'>Flights</p></Link>
                </div>

            </div>
            <div className="navbar-right">
                <ul className="navbar-links">
                    <li><BsAirplane /> </li>
                    <li><Link to={'/Booking'}> Booking</Link> </li>
                    <li> <ImProfile /></li>
                    <li> <Link to={'/Login'}>  Login</Link></li>
                </ul>
            </div>
        </nav>
    )
}

export default Header
