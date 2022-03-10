import React from "react";
import { useState } from "react";
import api from "../API/_APILink";

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handelSignUp = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post("/api/v1/registration/", {
        name: name,
        username: username,
        email: email,
        password: password,
      });
    } catch (err) {
      console.log("error " + err);
    }
  };

  return (
    <div className="form-container sign-up-container">
      <form>
        <h1>Create Account</h1>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="button" onClick={(e) => handelSignUp(e)}>
          Sign Up
        </button>
      </form>
    </div>
  );
}

export default Signup;
