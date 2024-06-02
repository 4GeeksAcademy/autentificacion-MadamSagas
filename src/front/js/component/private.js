import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const Private = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const token = sessionStorage.getItem("jwt-token");
    if (!token) {
      navigate("/login");
      return;
    }

    const fetchUser = async () => {
      const resp = await fetch(
        "https://refactored-space-umbrella-v6vqrr4pg4ggfwp97-3001.app.github.dev/private",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (resp.ok) {
        const data = await resp.json();
        setUser(data);
      } else {
        sessionStorage.removeItem("jwt-token");
        navigate("login");
      }
    };
    fetchUser();
  }, [navigate]);

  if (!user) {
    return <div>Loding </div>;
  }

  return (
    <div className="container">
      <div className="row">
        <div className="row">
          <h1>Welcome {user.email}</h1>
          <button
            className="btn btn-primary"
            onClick={() => {
              sessionStorage.removeItem("jwt-token");
              navigate("/login");
            }}
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Private;
