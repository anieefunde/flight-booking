import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { registerNewUser } from "../store/slices/usersSlice";

const SignUp = () => {
  const [newUser, setNewUser] = useState({
    name: "",
    city: "",
    mobile: "",
    username: "",
    password: "",
  });

  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const [IsRegistered, setIsregistered] = useState(false);
  const dispatch = useDispatch();

  const validate = (Values) => {
    const errors = {};
    if (!Values.name) {
      errors.Name = "Please provide the name";
    } else if (!Values.city) {
      errors.City = "Please Provide City Name";
    } else if (!Values.mobile) {
      errors.Mobile = "Please enter mobile no";
    } else if (!Values.username) {
      errors.Username = "Enter username";
    } else if (!Values.password) {
      errors.Password = "Please enter password";
    }
    return errors;
  };

  const handleSignUp = () => {
    //logic
    setFormErrors(validate(newUser));
    if (
      newUser.name !== "" &&
      newUser.city !== "" &&
      newUser.mobile !== "" &&
      newUser.username !== "" &&
      newUser.password !== ""
    ) {
      dispatch(registerNewUser(newUser));
      console.log(newUser);
      setNewUser({
        name: "",
        city: "",
        mobile: "",
        username: "",
        password: "",
      });

      setIsregistered(true);
      setTimeout(() => {
        setIsregistered(false);
      }, 2000);
    }
  };
  return (
    <div className="sign-up">
      <h3>ENTER DETAILS TO REGISTER</h3>
      {IsRegistered ? <p>Account Created</p> : <></>}
      <input
        type="text"
        value={newUser.name}
        onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
        placeholder="Enter your name"
        className="signup-details"
      />
      <p className="formErrors">{formErrors.Name}</p>
      <input
        type="text"
        value={newUser.city}
        onChange={(e) => setNewUser({ ...newUser, city: e.target.value })}
        placeholder="Enter your city"
        className="signup-details"
      />
      <p className="formErrors">{formErrors.City}</p>
      <input
        type="number"
        value={newUser.mobile}
        onChange={(e) => setNewUser({ ...newUser, mobile: e.target.value })}
        placeholder="Enter your mobile"
        className="signup-details"
      />
      <p className="formErrors">{formErrors.Mobile}</p>
      <input
        type="text"
        value={newUser.username}
        onChange={(e) => setNewUser({ ...newUser, username: e.target.value })}
        placeholder="Enter username"
        className="signup-details"
      />
      <p className="formErrors">{formErrors.Username}</p>
      <input
        type="password"
        value={newUser.password}
        onChange={(e) => setNewUser({ ...newUser, password: e.target.value })}
        placeholder="Enter password"
        className="signup-details"
      />
      <p className="formErrors">{formErrors.Password}</p>
      <button onClick={handleSignUp} className="SignUpBtn">
        SIGN UP
      </button>
    </div>
  );
};

export default SignUp;
