import React, { useState } from "react";
import "./Register.css";
import { Link } from "react-router-dom";

const Register: React.FC = () => {
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };

  return (
    <div className="form-register">
      <div className="form-register--title">
        <h1>Register</h1>
      </div>
      <div className="form-register--content">
        <form action="">
          <label>Username</label> <br />
          <input type="text" placeholder="Enter Username" required /> <br />
          <label>Email</label> <br />
          <input type="text" placeholder="Enter Email" required /> <br />
          <label>Password</label> <br />
          <input
            type={passwordShown ? "text" : "password"}
            placeholder="Enter Password"
            required
          />{" "}
          <br />
          <input type="checkbox" onClick={togglePassword} /> Show Password
          <br />
          <label>Confirm Password</label> <br />
          <input
            type="password"
            placeholder="Enter Password Confirmation"
            required
          />{" "}
          <br />
          <p>
            Already have an account? <Link to="/auth/login">Login</Link>
          </p>
        </form>
        <div className="form-register--button">
          <button type="submit" className="btn">
            Register
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;
