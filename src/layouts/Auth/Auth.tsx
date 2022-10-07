import React, { useState } from "react";
import "./Auth.css";
import { Outlet, useLocation, useNavigate } from "react-router";
import { logo } from "../../assets";

const Auth: React.FC = () => {
  const navigate = useLocation();
  const rightNone =
    navigate.pathname == "/auth/login"
      ? "wrapper-logo-slogan--right d-none"
      : "wrapper-logo-slogan--right";
  const leftNone =
    navigate.pathname == "/auth/register"
      ? "wrapper-logo-slogan--left d-none"
      : "wrapper-logo-slogan--left";
  return (
    <div className="auth-layout">
      <div className="auth-layout--left">
        {navigate.pathname == "/auth/register" ? <Outlet /> : <></>}
        <div className={leftNone}>
          <img src={logo} alt="NaraQ" id="auth-logo" className="logo-auth" />
          <h1 className="auth-slogan">#WawancaraTanpaKhawatirDitolak</h1>
        </div>
      </div>
      <div className="auth-layout--right">
        {navigate.pathname == "/auth/login" ? <Outlet /> : <></>}
        <div className={rightNone}>
          <img src={logo} alt="NaraQ" id="auth-logo" className="logo-auth" />
          <h1 className="auth-slogan">#WawancaraTanpaKhawatirDitolak</h1>
        </div>
      </div>
    </div>
  );
};

export default Auth;
