import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { urlName } from "../src/static";
// urlName;
const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation or input checking can be added here.

    setIsLoading(true);

    try {
      const { data } = await axios.post(`${urlName}login`, {
        email,
        password,
      });
      //   console.log(data);
      //   dapatkan access_token
      // simpan dalam localstorage
      // console.log("behasil login");
      localStorage.setItem("access_token", data.access_token);
      navigate("/product");
      // Handle the login success here, e.g., store the user's token and redirect.
    } catch (error) {
      //   console.log(error.data.message);
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };
  //   if (isLoading) return <p>Loading....</p>;
  //   if (error) return <p>Error fetching, please try again later</p>;
  {
    return (
      <>
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
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="password" className="form-label">
                      Password
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      id="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                  <div className="d-grid gap-2">
                    <button
                      onClick={handleSubmit}
                      className="btn btn-primary"
                      type="submit"
                    >
                      Login
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
};
export default Login;
