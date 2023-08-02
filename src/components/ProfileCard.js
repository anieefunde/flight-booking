import React from 'react'
import ProfileImg from '../assets/ProfileImg.png'
import Background from '../assets/ProfileBg.png'
import { useSelector } from 'react-redux';

function ProfileCard() {
    const loggedUser = useSelector((state) => {
        return state.users.loggedUser;
    })

    return (
        <div className="ProfileCard">
            <img id='BackgroundImgProfile' src={Background} alt="" />
            <div className="ProfileDetails">
                <div >
                    <h2 className="ProfileName">{loggedUser.name}</h2>
                    <h3 className="MyBookings">My Bookings  </h3>
                </div>
                <div className="ProfileImage">
                    <img src={ProfileImg} alt="" />
                </div>
            </div>
        </div>
    )
}

export default ProfileCard
