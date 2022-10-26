import React from "react";
import { Link, useLocation } from "react-router-dom";
import { FormLogin } from "../../../components";
import ForgotPassword from "../Forgot/Forgot";
import "./Login.css";

const Login: React.FC = () => {
  const navigate1 = useLocation();
  const login = navigate1.pathname == "/auth/login";
  const forgot = navigate1.pathname == "/auth/forgotPassword";
  return (
    <div className="form-login-wrapper">
      <div className={` form-login ${login ? <></> : "d-none"}`}>
        <div className="form-login--title">
          <h1 className="head">Selamat Datang</h1>
          <h1 className="foot">Silahkan masukkan detail anda</h1>
        </div>
        <div className="form-login--content">
          <div className="form-login--content-login">
            <FormLogin />
          </div>
        </div>
        <div className="form-login--footer">
          <p className="akun">Belum punya akun ?</p>
          <p className="daftar">
            <Link to="/auth/register" className="link">
              Daftar
            </Link>
          </p>
        </div>
      </div>
      <div className={` form-forgot-password ${forgot ? <></> : "d-none"}`}>
        <ForgotPassword />
      </div>
    </div>
  );
};

export default Login;
