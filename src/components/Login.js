import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FcGoogle } from "react-icons/fc";
import popular_airlines from "../assets/popular_airlines.png";
import { useDispatch, useSelector } from "react-redux";
import {
  makeUserLoggedIn,
  addLoggedUserDetails,
  fetchUsers,
} from "../store/slices/usersSlice";
function Login({ stateToReRenderNavbarOnly, setStateToReRenderNavbarOnly }) {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const [validUser, setValidUser] = useState({
    username: "",
    password: "",
  });

  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [wrongUser, setWrongUser] = useState(false);

  const loggedIn = useSelector((state) => {
    return state.users.loggedIn;
  });

  const users = useSelector((state) => {
    return state.users;
  });

  const loggedUser = useSelector((state) => {
    return state.users.loggedUser;
  });

  useEffect(() => {
    dispatch(fetchUsers());
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(validUser);
    }
  }, [formErrors]);

  const validate = (values) => {
    const errors = {};

    if (!values.username) {
      errors.Username = "Please enter username";
    } else if (!values.password) {
      errors.Password = "Please enter password";
    }

    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(validUser));
    dispatch(fetchUsers());
    // Handle login logic here (e.g., API calls, authentication)
    console.log("Username:", validUser.username);
    console.log("Password:", validUser.password);
    console.log(users);

    let userFound = users.users.find((user) => {
      return (
        user.username === validUser.username &&
        user.password === validUser.password
      );
    });
    console.log(userFound);

    if (userFound) {
      dispatch(makeUserLoggedIn());
      dispatch(addLoggedUserDetails(userFound));
      navigate("/flights");

      console.log(loggedIn);
      console.log(loggedUser);
    } else if (
      !userFound &&
      validUser.username !== "" &&
      validUser.password !== ""
    ) {
      setWrongUser(true);
      setValidUser({
        username: "",
        password: "",
      });
      setTimeout(() => {
        setWrongUser(false);
      }, 2000);
    }
  };

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit}>
        <h3>Login</h3>
        <input
          type="text"
          placeholder="Username"
          value={validUser.username}
          onChange={(e) =>
            setValidUser({ ...validUser, username: e.target.value })
          }
        />
        <p className="formErrors">{formErrors.Username}</p>

        <input
          type="password"
          placeholder="Password"
          value={validUser.password}
          onChange={(e) =>
            setValidUser({ ...validUser, password: e.target.value })
          }
        />

        <p className="formErrors">{formErrors.Password}</p>
        <p>
          {wrongUser ? (
            <p id="WrongIDPass">Wrong username or password</p>
          ) : (
            <p></p>
          )}
        </p>
        <button type="submit">Login</button>
        <Link>New user?Signup</Link>

        <div className="google-login">
          <FcGoogle className="google-icon" />
          Login with Google
        </div>
      </form>
      <img id="pop_airlines" src={popular_airlines} alt="" />
    </div>
  );
}

export default Login;
