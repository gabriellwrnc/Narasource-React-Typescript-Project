import React from "react";
import { Link } from "react-router-dom";
import { FormLogin } from "../../../components";
import "./Login.css";

const Login: React.FC = () => {
  return (
    <div className="form-login-wrapper">
      <div className="form-login">
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
    </div>
  );
};

export default Login;
