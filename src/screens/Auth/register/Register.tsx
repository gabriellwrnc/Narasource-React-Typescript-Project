import React, { ChangeEvent, useEffect, useState } from "react";
import "./Register.css";
import { Link } from "react-router-dom";
import { PWDRequisite } from "../../../components/Modal";
import { checkServerIdentity } from "tls";

const Register: React.FC = () => {
  //sesuai kebutuhan backend
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    password: "",
    confPassword: "",
  });

  const [agree, setAgree] = useState<boolean>(true);
  const [btnDisable, setBtnDisable] = useState<boolean>(true);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setData({
      ...data,
      [e.target.name]: value,
    });
  };

  const btnDisablbeFn = () => {
    if (
      data.firstName.length > 0 &&
      data.lastName.length > 0 &&
      data.email.length > 0 &&
      data.phoneNumber.length &&
      data.password.length > 0 &&
      data.confPassword.length > 0
    ) {
      return false;
    } else {
      return true;
    }
  };

  useEffect(() => {
    const state = btnDisablbeFn();
    setBtnDisable(state);
    console.log("render");
  }, [
    data.firstName.length,
    data.lastName.length,
    data.email.length,
    data.phoneNumber.length,
    data.password.length,
    data.confPassword.length,
  ]);

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
            <label htmlFor="firstname">First Name</label> <br />
            <input
              id="firstName"
              name="firstName"
              onChange={handleChange}
              type="text"
              placeholder="Enter firstName"
              required
            />{" "}
            <br />
            <label htmlFor="lastName">Last Name</label> <br />
            <input
              id="lastName"
              name="lastName"
              onChange={handleChange}
              type="text"
              placeholder="Enter lastName"
              required
            />{" "}
            <br />
            <label htmlFor="email">Email</label> <br />
            <input
              id="email"
              name="email"
              onChange={handleChange}
              type="text"
              placeholder="Enter Email"
              required
            />{" "}
            <br />
            <label htmlFor="phoneNumber">Phone Number</label> <br />
            <input
              id="phoneNumber"
              name="phoneNumber"
              onChange={handleChange}
              type="text"
              placeholder="Enter phoneNumber"
              required
            />{" "}
            <br />
            <label htmlFor="password">Password</label> <br />
            <div className="form-register--content-box-password">
              <input
                id="password"
                name="password"
                type={passwordShown ? "text" : "password"}
                placeholder="Enter Password"
                value={passwordStrenght}
                onChange={(e) => {
                  handleChange(e);
                  handleOnChange(e);
                }}
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
              name="confPassword"
              onChange={handleChange}
              type="password"
              placeholder="Enter Password Confirmation"
              required
            />{" "}
            <br />
            <input type="checkbox" name="" />
            <p>
              Already have an account? <Link to="/auth/login">Login</Link>
            </p>
          </div>
        </form>
        <div className="form-register--button">
          <button
            type="submit"
            className={`btnRegis ${btnDisable ? "" : "btnRegis--active"}`}
            disabled={btnDisable}
          >
            Register
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;
