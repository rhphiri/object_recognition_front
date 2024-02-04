import Logo from "./Logo";
import { useState } from "react";

const SERVER_URL = "https://object-recognition-app.onrender.com";

const Register = ({ changePage, inputUserDetails }) => {
  const [firstName, setFirstName] = useState("");
  const [firstNameError, setFirstNameError] = useState(false);

  const [surname, setSurname] = useState("");
  const [surnameError, setSurnameError] = useState(false);

  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(false);

  const [firstPassword, setFirstPassword] = useState("");
  const [firstPasswordError, setFirstPasswordError] = useState(false);
  const [showPassword1, setShowPassword1] = useState(false);

  const [secondPassword, setSecondPassword] = useState("");
  const [secondPasswordError, setSecondPasswordError] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);

  function storeFirstName(event) {
    setFirstName(event.target.value);
    setFirstNameError(false);
  }

  function storeSurname(event) {
    setSurname(event.target.value);
    setSurnameError(false);
  }

  function storeEmail(event) {
    setEmail(event.target.value);
    setEmailError(false);
  }

  function storeFirstPassword(event) {
    setFirstPassword(event.target.value);
    setFirstPasswordError(false);
  }

  function storeSecondPassword(event) {
    setSecondPassword(event.target.value);
    setSecondPasswordError(false);
  }

  function hasNumber(str) {
    return /\d/.test(str);
  }

  function hasSpecialCharacters(str) {
    return /[`!@#$%^&*()_\-+={}\[\];:"\\|,.<>\/?~]/.test(str);
  }

  function isEmailValid(str) {
    const emailRegex = /^[a-zA-Z0-9._]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(str);
  }

  function isPasswordValid(str) {
    const passwordRegex = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/;
    return passwordRegex.test(str);
  }

  function submitForm() {
    fetch(`${SERVER_URL}/register`, {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        first_name: firstName,
        surname: surname,
        email: email,
        password: secondPassword,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.id === null) {
          changePage("Register Errors");
        } else {
          changePage("Logged In");
          inputUserDetails(data);
        }
      })
      .catch((error) => changePage("Register Errors"));
  }

  function validateDetails() {
    if (firstName === "") {
      setFirstNameError(true);
      return;
    } else if (surname === "") {
      setSurnameError(true);
      return;
    } else if (email === "") {
      setEmailError(true);
      return;
    } else if (firstPassword === "") {
      setFirstPasswordError(true);
      return;
    } else if (secondPassword === "") {
      setSecondPasswordError(true);
      return;
    } else if (firstPassword !== secondPassword) {
      setSecondPasswordError(true);
      return;
    } else if (
      hasNumber(firstName) ||
      hasSpecialCharacters(firstName) ||
      hasNumber(surname) ||
      hasSpecialCharacters(surname)
    ) {
      changePage("Register Errors");
    } else if (
      !isEmailValid(email) ||
      !isPasswordValid(firstPassword) ||
      !isPasswordValid(secondPassword)
    ) {
      changePage("Register Errors");
    } else {
      submitForm();
    }
  }

  function validateByEnter(event) {
    if (event.key === "Enter") {
      validateDetails();
    }
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-3 clearfix">
          <Logo />
        </div>
        <div className="col-md-6 d-flex align-items-center justify-content-center clearfix">
          <span className="display-6">Object Recognition Application</span>
        </div>
        <div className="col-md-3 d-flex justify-content-end align-items-center">
          <button
            className="btn btn-warning"
            type="button"
            onClick={() => changePage("Sign In")}
          >
            Sign In
          </button>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <div className="mb-3 mt-3">
            <label htmlFor="first_name" className="form-label">
              First Name:
            </label>
            <input
              type="text"
              className="form-control"
              id="first_name"
              placeholder="Enter your first name"
              name="first_name"
              onChange={storeFirstName}
            />
            {firstNameError ? <p>Please fill in your first name.</p> : <p></p>}
          </div>
          <div className="mb-3 mt-3">
            <label htmlFor="surname" className="form-label">
              Surname:
            </label>
            <input
              type="text"
              className="form-control"
              id="surname"
              placeholder="Enter your surname"
              name="surname"
              onChange={storeSurname}
            />
            {surnameError ? <p>Please fill in your surname.</p> : <p></p>}
          </div>
          <div className="mb-3 mt-3">
            <label htmlFor="email" className="form-label">
              Email:
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Enter email"
              name="email"
              onChange={storeEmail}
            />
            {emailError ? <p>Please fill in your email.</p> : <p></p>}
          </div>
          <div className="mb-3">
            <label htmlFor="pwd" className="form-label">
              Password:
            </label>
            <p>
              Password must have at least one uppercase letter, one lowercase
              letter, one number and at least 8 characters long.
            </p>
            <input
              type={showPassword1 ? "text" : "password"}
              className="form-control"
              id="pwd1"
              placeholder="Enter password"
              name="pswd"
              onChange={storeFirstPassword}
            />
            <label for="check">Show Password</label>
            <input
              id="check"
              type="checkbox"
              value={showPassword1}
              onChange={() => setShowPassword1((prev) => !prev)}
            />
            {firstPasswordError ? <p>Please enter your password.</p> : <p></p>}
          </div>
          <div className="mb-3">
            <label htmlFor="pwd" className="form-label">
              Re-enter password:
            </label>
            <input
              type={showPassword2 ? "text" : "password"}
              className="form-control"
              id="pwd2"
              placeholder="Re-enter password"
              name="pswd"
              onKeyDown={validateByEnter}
              onChange={storeSecondPassword}
            />
            <label for="check">Show Password</label>
            <input
              id="check"
              type="checkbox"
              value={showPassword2}
              onChange={() => setShowPassword2((prev) => !prev)}
            />
            {secondPasswordError ? (
              <p>
                Please re-enter your password. Make sure it is identical to the
                first one.
              </p>
            ) : (
              <p></p>
            )}
          </div>
          <button
            type="submit"
            className="btn btn-danger"
            onClick={validateDetails}
          >
            Register
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;
