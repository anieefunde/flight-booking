import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser, removeLoggedUserDetails } from '../store/slices/usersSlice';
import { useNavigate } from 'react-router-dom';


function MenuIcon() {
    const [isExpanded, setIsExpanded] = useState(false);

    const dispatch = useDispatch();

    const navigate = useNavigate();

    const toggleExpanded = () => {
        setIsExpanded(!isExpanded);
    };

    const loggedIn = useSelector((state) => {
        return state.users.loggedIn;
    })

    const loggedUser = useSelector((state) => {
        return state.users.loggedUser
    })

    console.log(loggedIn);
    console.log(loggedUser);

    const handlelogout = () => {
        dispatch(logoutUser())
        dispatch(removeLoggedUserDetails())
        navigate('/')
        console.log(loggedIn);
        console.log(loggedUser);
    }

    const handleProfileClick = () => {
        navigate('/Profile')
    }

    return (
        <div className="hamburger-icon" onClick={toggleExpanded}>
            <div className={`icon ${isExpanded ? 'open' : ''}`} />
            {isExpanded && (
                <div className="options">
                    <div onClick={handleProfileClick} className="option">Profile</div>
                    <div className="option" onClick={handlelogout}>Logout</div>
                </div>
            )}
        </div>
    )
}

export default MenuIcon
