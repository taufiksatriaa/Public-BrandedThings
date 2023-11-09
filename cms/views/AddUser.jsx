const AddUser = () => {
  return (
    <>
      <section
        id="form-register"
        className="d-flex justify-content-center align-items-center"
        style={{ height: "100vh" }}
      >
        <div className="container">
          <div className="row justify-content-center mt-5">
            <div className="col-md-6">
              <div className="card">
                <div className="card-body">
                  <h2 className="card-title">Add-User</h2>
                  <form action="/" method="post">
                    <div className="form-group">
                      <label htmlFor="username">Username:</label>
                      <input
                        type="text"
                        className="form-control"
                        name="username"
                        id="username"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="email">Email:</label>
                      <input
                        type="email"
                        className="form-control"
                        name="email"
                        id="email"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="password">Password:</label>
                      <input
                        type="password"
                        className="form-control"
                        name="password"
                        id="password"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="phoneNumber">Phone Number:</label>
                      <input
                        type="tel"
                        className="form-control"
                        name="phoneNumber"
                        id="phoneNumber"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="address">Address:</label>
                      <input
                        className="form-control"
                        name="address"
                        id="address"
                        rows="4"
                      ></input>
                    </div>
                    <div className="d-grid gap-2">
                      <button className="btn btn-primary" type="button">
                        Add User
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AddUser;
