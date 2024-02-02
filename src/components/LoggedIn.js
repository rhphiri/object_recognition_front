import Logo from "./Logo";
import { useState } from "react";
import ImageRecognition from "./ImageRecognition";

const SERVER_URL = "http://localhost:3001";

const LoggedIn = ({ changePage, userDetails, inputUserDetails }) => {
  const [imageUrl, setImageUrl] = useState("");
  const [errorMessage, setErrorMessage] = useState(false);

  const onInputChange = (event) => {
    setImageUrl(event.target.value);
  };

  const contactAPI = () => {
    fetch(`${SERVER_URL}/loggedin`, {
      method: "put",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        id: userDetails.id,
        picture_url: imageUrl,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.picture_url === null) {
          setErrorMessage(true);
        } else {
          let updatedUserobj = Object.assign({}, userDetails, data);
          inputUserDetails(updatedUserobj);
        }
      })
      .catch((error) => console.log);
  };

  const submitByEnter = (event) => {
    if (event.key === "Enter") {
      contactAPI();
    }
  };

  const onButtonSubmit = () => {
    contactAPI();
  };

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
            onClick={() => changePage("Signed Out")}
          >
            Sign Out
          </button>
        </div>
      </div>
      <div className="row">
        <div className="col d-flex align-items-center justify-content-center">
          <div>
            <h1>Hi, {userDetails.first_name}</h1>
            {errorMessage ? (
              <h3>
                Something went wrong when analysing your image. Please try
                again.
              </h3>
            ) : (
              <h3 id="message">
                The number of pictures you have submitted for analysis thus far
                is {userDetails.entries}
              </h3>
            )}
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col d-flex align-items-center justify-content-center">
          <div className="input-group mt-3 mb-3">
            <input
              type="text"
              className="form-control"
              onChange={onInputChange}
              onKeyDown={submitByEnter}
              placeholder="Enter image url"
            />
            <button
              className="btn btn-danger"
              type="button"
              onClick={onButtonSubmit}
            >
              Detect
            </button>
          </div>
        </div>
      </div>
      {userDetails.boundingBoxesData ? (
        <ImageRecognition imageUrl={imageUrl} userDetails={userDetails} />
      ) : (
        <p></p>
      )}
    </div>
  );
};

export default LoggedIn;
