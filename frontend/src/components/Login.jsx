import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { userlogin } from "../JS/userSlice/userSlice";
import "./Login.css";

function Login() {
  const navigate = useNavigate();
  const [login, setLogin] = useState({
    email: "",
    password: "",
  });
  const dispatch = useDispatch();

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!login.email || !login.password) {
      alert("Please fill in both fields");
      return;
    }
    dispatch(userlogin(login));
    navigate("/profil");
  };

  return (
    <div className="login-page">
      <div className="login-wrapper">
        <h2 className="login-title">Please login</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            className="login-input"
            placeholder="Email Address"
            required
            autoFocus
            onChange={(e) => setLogin({ ...login, email: e.target.value })}
          />
          <input
            type="password"
            className="login-input"
            placeholder="Password"
            required
            onChange={(e) => setLogin({ ...login, password: e.target.value })}
          />

          <div className="login-checkbox">
            <input type="checkbox" id="rememberMe" name="rememberMe" />
            <label htmlFor="rememberMe">Remember me</label>
          </div>

          <button className="login-button" type="submit">
            Login
          </button>
        </form>

        <p className="login-register">
          Don't have an account? <Link to="/register">Register now</Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
