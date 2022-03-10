import React, { useState, useEffect } from "react";
import _APILink from "../API/_APILink";
import axios from "axios";
import api from "../API/_APILink";
import { useNavigate } from "react-router";

function Signin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  let navigate = useNavigate();
  useEffect(() => {
    localStorage.setItem("isAuthenticated", JSON.stringify(isAuthenticated));
    localStorage.setItem("userId", JSON.stringify(isAuthenticated));
  }, [isAuthenticated]);

  const handleSignIn = async (e) => {
    e.preventDefault();
    try {
      // make axios post request
      const response = await axios.get("http://localhost:8080/", {
        // Axios looks for the `auth` option, and, if it is set, formats a
        // basic auth header for you automatically.
        auth: {
          username: "malikou",
          password: "password",
        },
      });
      if (response.data) {
        setIsAuthenticated(true);
      }
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="form-container sign-in-container">
      <form>
        <h1>Sign in</h1>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <a href="#">Forgot your password?</a>
        <button
          className="button"
          onClick={(e) => {
            handleSignIn(e);
          }}
        >
          Sign In
        </button>
      </form>
    </div>
  );
}

export default Signin;
