import React, { ChangeEvent, useEffect, useState } from "react";
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
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const [btnDisable, setBtnDisable] = useState<boolean>(true);
  const [passwordShown, setPasswordShown] = useState<boolean>(false);
  const [showErrorModal, setShowErrorModal] = useState<boolean>(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setData({
      ...data,
      [e.target.name]: value,
    });
  };

  const btnDisablbeFn = () => {
    if (data.email.length > 0 && data.password.length > 0) {
      return false;
    } else {
      return true;
    }
  };

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

  useEffect(() => {
    const state = btnDisablbeFn();
    setBtnDisable(state);
    console.log("render");
  }, [data.email.length, data.password.length]);

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
              onChange={(e) => handleChange(e)}
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
              id="password-login"
              type={passwordShown ? "text" : "password"}
              onChange={(e) => handleChange(e)}
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
          <AuthButton
            type="submit"
            color={`${btnDisable ? "disable" : "primary"}`}
            size="md"
            disabled={btnDisable}
          >
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
