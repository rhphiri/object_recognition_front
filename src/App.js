import { useState } from "react";
import SignIn from "./components/SignIn";
import SignedOut from "./components/SignedOut";
import Register from "./components/Register";
import RegisterErrors from "./components/RegisterErrors";
import WrongCredentials from "./components/WrongCredentials";
import HomePage from "./components/HomePage";
import LoggedIn from "./components/LoggedIn";

function App() {
  const [page, setPage] = useState("Home Page");
  const [userDetails, setUserDetails] = useState({});

  const changePage = (page_title) => {
    setPage(page_title);
  };

  const inputUserDetails = (obj) => {
    setUserDetails(obj);
  };

  if (page === "Home Page") {
    return <HomePage changePage={changePage} />;
  } else if (page === "Sign In") {
    return (
      <SignIn changePage={changePage} inputUserDetails={inputUserDetails} />
    );
  } else if (page === "Register") {
    return (
      <Register changePage={changePage} inputUserDetails={inputUserDetails} />
    );
  } else if (page === "Register Errors") {
    return <RegisterErrors changePage={changePage} />;
  } else if (page === "Logged In") {
    return (
      <LoggedIn
        changePage={changePage}
        userDetails={userDetails}
        inputUserDetails={inputUserDetails}
      />
    );
  } else if (page === "Signed Out") {
    return <SignedOut changePage={changePage} />;
  } else {
    return <WrongCredentials changePage={changePage} />;
  }
}

export default App;
