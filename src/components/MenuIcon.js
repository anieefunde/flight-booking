import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser, removeLoggedUserDetails } from '../store/slices/usersSlice';


function MenuIcon() {
    const [isExpanded, setIsExpanded] = useState(false);

    const dispatch = useDispatch();

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

        console.log(loggedIn);
        console.log(loggedUser);
    }

    return (
        <div className="hamburger-icon" onClick={toggleExpanded}>
            <div className={`icon ${isExpanded ? 'open' : ''}`} />
            {isExpanded && (
                <div className="options">
                    <div className="option">Profile</div>
                    <div className="option" onClick={handlelogout}>Logout</div>
                </div>
            )}
        </div>
    )
}

export default MenuIcon
