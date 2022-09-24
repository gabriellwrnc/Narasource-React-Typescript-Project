import React, { useState } from "react";
import "./Register.css";
import { Link } from "react-router-dom";
import { PWDRequisite } from "../../../components/Modal";
import { checkServerIdentity } from "tls";

const Register: React.FC = () => {
  const [passwordShown, setPasswordShown] = useState(false);
  const [passwordStrenght, setPasswordStrength] = useState("");
  const [pwdRequisite, setPwdRequisite] = useState(false);
  const [pwdChecks, setPwdChecks] = useState({
    capsLetterCheck: false,
    numberCheck: false,
    pwdLengthCheck: false,
    specialCharCheck: false,
  });
  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPasswordStrength(e.target.value);
  };

  const handleOnFocus = () => {
    setPwdRequisite(true);
  };

  const handleOnBlur = () => {
    setPwdRequisite(false);
  };

  const handleOnKeyUp = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const { value } = e.target as HTMLInputElement;
    const capsLetterCheck = /[A-Z]/.test(value);
    const numberCheck = /[0-9]/.test(value);
    const pwdLengthCheck = value.length >= 8;
    const specialCharCheck = /[!@#$%^&*.,]/.test(value);
    setPwdChecks({
      capsLetterCheck,
      numberCheck,
      pwdLengthCheck,
      specialCharCheck,
    });
  };

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
          <div className="form-register--content-box">
            <label htmlFor="username">Username</label> <br />
            <input
              id="username"
              type="text"
              placeholder="Enter Username"
              required
            />{" "}
            <br />
            <label htmlFor="email">Email</label> <br />
            <input
              id="email"
              type="text"
              placeholder="Enter Email"
              required
            />{" "}
            <br />
            <label htmlFor="password">Password</label> <br />
            <div className="form-register--content-box-password">
              <input
                id="password"
                type={passwordShown ? "text" : "password"}
                placeholder="Enter Password"
                value={passwordStrenght}
                onChange={handleOnChange}
                onFocus={handleOnFocus}
                onBlur={handleOnBlur}
                onKeyUp={handleOnKeyUp}
                required
              />{" "}
              <i
                className={
                  passwordShown ? "fa-solid fa-eye-slash" : "fa-solid fa-eye"
                }
                onClick={togglePassword}
              ></i>
            </div>
            {pwdRequisite ? (
              <PWDRequisite
                capsLetterFlag={pwdChecks.capsLetterCheck ? "valid" : "invalid"}
                numberFlag={pwdChecks.numberCheck ? "valid" : "invalid"}
                pwdLengthFlag={pwdChecks.pwdLengthCheck ? "valid" : "invalid"}
                specialCharFlag={
                  pwdChecks.specialCharCheck ? "valid" : "invalid"
                }
              />
            ) : null}
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
          </div>
        </form>
        <div className="form-register--button">
          <button type="submit" className="btnRegis">
            Register
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;
