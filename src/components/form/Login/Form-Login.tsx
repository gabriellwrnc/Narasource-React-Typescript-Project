import React, { useState } from "react";
import {
  cancel_show_password,
  email_icon,
  password_icon,
  show_password,
} from "../../../assets";
import AuthButton from "../../buttons/Auth_Buttons/AuthButton";
import "./Form-Login.css";

const FormLogin: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [passwordShown, setPasswordShown] = useState<boolean>(false);

  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };

  return (
    <div className="form-login-component">
      <form action="">
        <div className="form-login-email">
          <h1 className="input-title">Email</h1>
          <div className="form-login-email-input">
            <label htmlFor="email" className="input-icon">
              <img src={email_icon} className="icon" />
            </label>
            <input
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              type="email"
              id="email"
              className="input-field"
              placeholder="Masukkan email anda"
            />
          </div>
        </div>
        <div className="form-login-password">
          <h1 className="input-title">Password</h1>
          <div className="form-login-email-input">
            <label htmlFor="password" className="input-icon-pass">
              <img src={password_icon} className="icon" />
            </label>
            <input
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              type={passwordShown ? "text" : "password"}
              id="password"
              className="input-field"
              placeholder="Masukkan sandi anda"
            />
            <img
              src={passwordShown ? cancel_show_password : show_password}
              className="icon icon-show-pass"
              onClick={togglePassword}
            />
          </div>
        </div>
        <div className="login-btn">
          <AuthButton type="primary" size="md">
            Masuk
          </AuthButton>
        </div>
      </form>
    </div>
  );
};

export default FormLogin;
