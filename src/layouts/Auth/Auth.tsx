import React, { useState } from "react";
import "./Auth.css";
import { Outlet, useLocation, useNavigate } from "react-router";
import { logo } from "../../assets";

const Auth: React.FC = () => {
  const navigate = useLocation();
  const rightNone =
    navigate.pathname != "/auth/register"
      ? "wrapper-logo-slogan--right d-none"
      : "wrapper-logo-slogan--right";
  const leftNone =
    navigate.pathname == "/auth/register"
      ? "wrapper-logo-slogan--left d-none"
      : "wrapper-logo-slogan--left";
  console.log("rightNone", rightNone);
  console.log("leftNone", leftNone);

  const test = navigate.pathname != "/auth/register";
  console.log("test", test);
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
        {test ? <Outlet /> : <></>}
        <div className={rightNone}>
          <img src={logo} alt="NaraQ" id="auth-logo" className="logo-auth" />
          <h1 className="auth-slogan">#WawancaraTanpaKhawatirDitolak</h1>
        </div>
      </div>
    </div>
  );
};

export default Auth;
