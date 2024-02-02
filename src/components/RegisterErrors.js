const RegisterErrors = ({ changePage }) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col d-flex justify-content-center align-items-center">
          <div className="mt-4 p-5 bg-danger text-white rounded">
            <h2>Error!</h2>
            <h3>
              One or more issues have been identified with the details you have
              submitted.
            </h3>
            <ol className="list-group list-group-numbered">
              <li className="list-group-item">
                Check to see that no field has been left blank.
              </li>
              <li className="list-group-item">
                The first name and surname should not contain numbers or special
                characters.
              </li>
              <li className="list-group-item">
                Your email is either invalid or is already in our database.
              </li>
              <li className="list-group-item">
                The password should contain at least one number and one
                uppercase letter and one lowercase letter and be at least 8
                characters long.
              </li>
              <li className="list-group-item">
                The first password should be identical to the second password.
              </li>
            </ol>
            <p>Once you have fixed these issues then you can submit.</p>
            <button
              type="button"
              className="btn btn-secondary"
              onClick={() => changePage("Register")}
            >
              Go back to register
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterErrors;
