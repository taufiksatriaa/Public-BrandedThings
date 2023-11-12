import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { urlName } from "../src/static";
const AddUser = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // console.log(categoryId, "iniii");
      setIsLoading(true);
      const access_token = localStorage.getItem("access_token");
      const { data } = await axios.post(
        `${urlName}add-user`,
        {
          username,
          email,
          password,
          phoneNumber,
          address,
        },
        {
          headers: { 
            Authorization: `Bearer ${access_token}`,
          },
        }
      );

      navigate(`/`);
    } catch (error) {
      setError(error);
      console.log(error.message);
    } finally {
      setIsLoading(false);
    }
  };
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
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="email">Email:</label>
                      <input
                        type="email"
                        className="form-control"
                        name="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="password">Password:</label>
                      <input
                        type="password"
                        className="form-control"
                        name="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="phoneNumber">Phone Number:</label>
                      <input
                        type="tel"
                        className="form-control"
                        name="phoneNumber"
                        id="phoneNumber"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="address">Address:</label>
                      <input
                        className="form-control"
                        name="address"
                        id="address"
                        rows="4"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                      ></input>
                    </div>
                    <div className="d-grid gap-2">
                      <button
                        onClick={handleSubmit}
                        className="btn btn-primary"
                        type="button"
                      >
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
