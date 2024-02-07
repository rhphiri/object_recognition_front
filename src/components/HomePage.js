import Logo from "./Logo";

const HomePage = ({ changePage }) => {
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
          <div className="btn-group btn-group-lg ">
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
            <h1>Welcome to the Object Recognition App.</h1>
            <p>
              This application was designed to recognise objects within an image
              with the help of an artificial intelligence called Clarifai.
            </p>
            <p>
              All you have to do is enter the url of the image you want to be
              analysed, press Detect and this app will do the rest.
            </p>
            <p>
              In order to make use of this application, create an account. It is
              completely free.
            </p>
            <p>No credit card required.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
