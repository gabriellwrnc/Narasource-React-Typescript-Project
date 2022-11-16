import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  cancel_show_password,
  email_icon,
  password_icon,
  show_password,
} from "../../../../assets";
import { AuthButton } from "../../../../components";
import { authService } from "../../../../services";
import { LoginRequest } from "../../../../types/Login";
import ModalError from "../Modal-Error/Modal-Error";
import "./Form-Login.css";

const FormLogin: React.FC = () => {
  const navigate = useNavigate();
  const [passwordShown, setPasswordShown] = useState<boolean>(false);
  const [showErrorModal, setShowErrorModal] = useState<boolean>(false);

  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };

  const toggleErrorModal = () => {
    setShowErrorModal((prevState) => !prevState);
  };

  const login = async (e: React.FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();

      const formData = new FormData(e.target as HTMLFormElement);
      const inputObject = Object.fromEntries(formData);

      const resp = await authService.login(inputObject as any as LoginRequest);
      console.log("resp", resp);
      localStorage.setItem("@token", resp.data.access_token);
      navigate("/dashboard-user/home-page"); //ganti
    } catch (error: any) {
      setShowErrorModal(true);
      console.log(error.response);
    }
    // console.log("login");
  };

  return (
    <div className="form-login-component">
      <form onSubmit={(event) => login(event)}>
        <div className="form-login-email">
          <h1 className="input-title lg-input-title">Email</h1>
          <div className="form-login-email-input">
            <label htmlFor="email-login" className="input-icon">
              <img src={email_icon} className="icon" />
            </label>
            <input
              name="email"
              type="email"
              id="email-login"
              className="input-field lg-field"
              placeholder="Masukkan email anda"
            />
          </div>
        </div>
        <div className="form-login-password">
          <h1 className="input-title lg-input-title">Password</h1>
          <div className="form-login-email-input">
            <label htmlFor="password-login" className="input-icon-pass">
              <img src={password_icon} className="icon" />
            </label>
            <input
              name="password"
              type={passwordShown ? "text" : "password"}
              id="password-login"
              className="input-field sm-field"
              placeholder="Masukkan sandi anda"
            />
            <img
              src={passwordShown ? cancel_show_password : show_password}
              className="icon icon-show-pass"
              onClick={togglePassword}
            />
          </div>
        </div>
        <div className="form-login-forgot">
          <Link to="/auth/forgotPassword" className="link forgot">
            Lupa Kata Sandi?
          </Link>
        </div>
        <div className="login-btn">
          <AuthButton type="submit" color="primary" size="md">
            Masuk
          </AuthButton>
        </div>
      </form>
      {showErrorModal ? (
        <ModalError onClose={() => toggleErrorModal()} />
      ) : (
        <></>
      )}
    </div>
  );
};

export default FormLogin;
