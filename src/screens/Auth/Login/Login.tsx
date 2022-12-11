import React from "react";
import { Link, useLocation } from "react-router-dom";
import ForgotPassword from "./Forgot/Forgot";
import FormLogin from "./Form-Login/Form-Login";
import "./Login.css";

const Login: React.FC = () => {
  const navigate1 = useLocation();
  const login = navigate1.pathname == "/auth/login";
  return (
    <div className="form-login-wrapper">
      {login ? (
        <div className=" form-login">
          <div className="form-login--title">
            <h1 className="head">Selamat Datang</h1>
            <h1 className="foot">Silahkan masukkan detail anda</h1>
          </div>
          <div className="form-login--content">
            <FormLogin />
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
      ) : (
        <div className="form-forgot-password">
          <ForgotPassword />
        </div>
      )}
    </div>
  );
};

export default Login;
