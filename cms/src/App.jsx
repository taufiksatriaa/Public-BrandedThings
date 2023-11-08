import { useState } from "react";

// import "./App.css";

function App() {
  return (
    <>
      {/* form login */}
      <section>
        <div
          id="form-login"
          className="d-flex justify-content-center align-items-center bg-secondary bg-gradient"
          style={{ height: "100vh" }}
        >
          <div
            className="card card text-dark bg-light mb-3"
            style={{ width: "18rem" }}
          >
            <div className="card-body">
              <form>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email
                  </label>
                  <input type="email" className="form-control" id="email" />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                  />
                </div>
                <div className="d-grid gap-2">
                  <button className="btn btn-primary" type="button">
                    Login
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      {/* end form login */}
      // {/* <!-- add-user --> */}
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
                    <br />
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
      {/* <!-- add-product --> */}
      <section
        id="form-AddProduct"
        className="d-flex justify-content-center align-items-center"
        style={{ height: "100vh" }}
      >
        <div className="container">
          <h1>Add Product</h1>
          <div className="card">
            <div className="card-body">
              <form action="process-add-product.php" method="POST">
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">
                    Product Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    name="name"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="description" className="form-label">
                    Description
                  </label>
                  <textarea
                    className="form-control"
                    id="description"
                    name="description"
                    required
                  ></textarea>
                </div>
                <div className="mb-3">
                  <label htmlFor="price" className="form-label">
                    Price
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    id="price"
                    name="price"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="stock" className="form-label">
                    Stock
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    id="stock"
                    name="stock"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="imgUrl" className="form-label">
                    Image URL
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="imgUrl"
                    name="imgUrl"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="categoryId" className="form-label">
                    Category ID
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    id="categoryId"
                    name="categoryId"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="authorId" className="form-label">
                    Author ID
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    id="authorId"
                    name="authorId"
                    required
                  />
                </div>
                <button type="submit" className="btn btn-primary">
                  Add Product
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
