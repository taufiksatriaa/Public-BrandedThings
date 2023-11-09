import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation or input checking can be added here.

    setIsLoading(true);

    try {
      const response = await axios.post("http://localhost:3000/login", {
        email,
        password,
      });

      // Handle the login success here, e.g., store the user's token and redirect.
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

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
                  <button className="btn btn-primary" type="submit">
                    Login
                    {isLoading ? "Logging in..." : "Login"}
                  </button>
                </div>
              </form>
              {error && <p>Login failed. Please check your credentials.</p>}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
