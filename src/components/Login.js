import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FcGoogle } from 'react-icons/fc';
import popular_airlines from '../assets/popular_airlines.png'
import { useDispatch, useSelector } from 'react-redux';
import { makeUserLoggedIn, addLoggedUserDetails, fetchUsers } from '../store/slices/usersSlice';
function Login({ stateToReRenderNavbarOnly, setStateToReRenderNavbarOnly }) {

    const dispatch = useDispatch();

    const navigate = useNavigate();

    const loggedIn = useSelector((state) => {
        return state.users.loggedIn;
    })

    const users = useSelector((state) => {
        return state.users
    })

    const loggedUser = useSelector((state) => {
        return state.users.loggedUser
    })

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    useEffect(() => {
        dispatch(fetchUsers())
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(fetchUsers())
        // Handle login logic here (e.g., API calls, authentication)
        console.log('Username:', username);
        console.log('Password:', password);
        console.log(users);

        const userFound = users.users.find(user => {
            return user.username === username && user.password === password
        })
        console.log(userFound);

        if (userFound) {
            // setStateToReRenderNavbarOnly(true)
            dispatch(makeUserLoggedIn())
            dispatch(addLoggedUserDetails(userFound))
            navigate('/flights')
            // loggedIn = true
            // loggedUser = userFound

            console.log(loggedIn);
            console.log(loggedUser);
        }
    };

    return (
        <div className="login-container">
            <form onSubmit={handleSubmit}>
                <h3>Login</h3>
                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit">Login</button>
                <Link>New user?Signup</Link>

                <div className="google-login">
                    <FcGoogle className='google-icon' />
                    Login with Google
                </div>


            </form>
            <img id='pop_airlines' src={popular_airlines} alt="" />
        </div>
    )
}

export default Login
