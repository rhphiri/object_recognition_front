import Logo from "./Logo";
import { useState } from "react";

const SERVER_URL = "https://object-recognition-app.onrender.com";

const SignIn = ({ changePage, inputUserDetails }) => {
  const [emailEntered, setEmailEntered] = useState("");
  const [passwordEntered, setPasswordEntered] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  function storeEmail(event) {
    setEmailEntered(event.target.value);
  }

  function storePassword(event) {
    setPasswordEntered(event.target.value);
  }

  function submitDetails() {
    fetch(`${SERVER_URL}/signin`, {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: emailEntered,
        password: passwordEntered,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (data.id === null && data.first_name === null) {
          changePage("Wrong Credentials");
        } else {
          inputUserDetails(data);
          changePage("Logged In");
        }
      })
      .catch((error) => console.log);
  }

  function submitByEnter(event) {
    if (event.key === "Enter") {
      submitDetails();
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
            onClick={() => changePage("Register")}
          >
            Register
          </button>
        </div>
      </div>
      <div className="row">
        <div className="col">
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
          </div>
          <div className="mb-3">
            <label htmlFor="pwd" className="form-label">
              Password:
            </label>
            <input
              type={showPassword ? "text" : "password"}
              className="form-control"
              id="pwd"
              placeholder="Enter password"
              name="pswd"
              onKeyDown={submitByEnter}
              onChange={storePassword}
            />
            <label for="check">Show Password</label>
            <input
              id="check"
              type="checkbox"
              value={showPassword}
              onChange={() => setShowPassword((prev) => !prev)}
            />
          </div>
          <button
            type="submit"
            className="btn btn-danger"
            onClick={submitDetails}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
