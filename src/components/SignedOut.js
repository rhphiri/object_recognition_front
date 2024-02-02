import Logo from "./Logo";

const SignedOut = ({ changePage }) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-3 clearfix">
          <Logo />
        </div>
        <div className="col-md-6 d-flex align-items-center justify-content-center">
          <span className="display-6">Object Recognition Application</span>
        </div>
        <div className="col-md-3 d-flex justify-content-end align-items-center">
          <div className="btn-group btn-group-lg float-end">
            <button
              className="btn btn-warning"
              type="button"
              onClick={() => changePage("Sign In")}
            >
              Sign In
            </button>
            <button
              className="btn btn-warning"
              type="button"
              onClick={() => changePage("Register")}
            >
              Register
            </button>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col d-flex align-items-center justify-content-center">
          <div className="mt-4 p-5 bg-danger text-white rounded">
            <h1>You have successfully signed out.</h1>
            <h2>Goodbye and come back soon!</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignedOut;
