import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./Login.css";

const Login: React.FC = () => {
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };

  return (
    <div className="form-login">
      <div className="form-login--title">
        <h1>Login</h1>
      </div>
      <div className="form-login--content">
        <form action="">
          <label>Username</label> <br />
          <input type="text" placeholder="Enter Username" required /> <br />
          <label>Password</label> <br />
          <input
            type={passwordShown ? "text" : "password"}
            placeholder="Enter Password"
            required
          />{" "}
          <br />
          <input type="checkbox" onClick={togglePassword} /> Show Password
          <br />
          <p className="form-login--description">
            Don't have an account? <Link to="/auth/register">Register</Link>
          </p>
        </form>
        <div className="form-login--button">
          <button type="submit" className="btn">
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
