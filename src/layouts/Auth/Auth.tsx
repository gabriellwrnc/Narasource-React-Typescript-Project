import React from "react";
import "./Auth.css";
import { Outlet } from "react-router";
import logo from "./Assets/Logo.png";

const Auth: React.FC = () => {
  return (
    <div className="auth-layout">
      <div className="auth-layout--form">
        <Outlet />
      </div>
      <div className="auth-layout--logo">
        <img src={logo} alt="NaraQ" id="auth-logo" />
        <h1 className="auth-slogan">#WawancaraTanpaKhawatirDitolak</h1>
      </div>
    </div>
  );
};

export default Auth;
