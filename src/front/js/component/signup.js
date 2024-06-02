import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(
      "https://refactored-space-umbrella-v6vqrr4pg4ggfwp97-3001.app.github.dev/signup",
      {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({ email, password }),
      }
    )
      .then((resp) => {
        if (resp.ok) {
          navigate("/login");
        } else {
          throw new Error("Signup failed");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div className="row mb-3 d-flex justify-content-center">
          <div className="col-6">
            <h1 className="mb-3 mt-5" >Sign Up!</h1>
            <input
              type="email"
              value={email}
              className="form-control"
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              required
              aria-label="email"
            />
          </div>
        </div>

        <div className="row mb-3 d-flex justify-content-center">
          <div className="col-6">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="form-control"
              id="inputPassword3"
              placeholder="Password"
              required
              aria-label="password"
            />
          </div>
        </div>

        <div className="row mb-3 d-flex justify-content-center">
          <div className="col-6 d-grid gap-2 col-6 mx-auto">
            <button
           
            className="btn btn-success" type="submit">
              Sign Up
            </button>
          </div>
        </div>

        <div className="row mb-3 d-flex justify-content-center">
          <div className="col-6">
            <Link to="/login">
            Already a member? Log in
            </Link>
          </div>
        </div>

        <div className="row mb-1 d-flex justify-content-center">
          <div className="col-6">
            <Link to="/">
            Go back home
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Signup;
