import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FcGoogle } from 'react-icons/fc';
import popular_airlines from '../assets/popular_airlines.png'
function Login() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle login logic here (e.g., API calls, authentication)
        console.log('Username:', username);
        console.log('Password:', password);
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
