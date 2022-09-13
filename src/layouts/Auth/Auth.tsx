import React from "react";
import { Outlet } from "react-router-dom";
import "./Auth.css";
import img from "../assets/img.jpg";

const Auth: React.FC = () => {
  return (
    <div className="auth-layout">
      <div className="auth-layout--illustration">
        <div className="illustration-img">
          <img src={img} alt="Illustration" />
        </div>
      </div>
      <div className="auth-layout--form">
        <Outlet />
      </div>
    </div>
  );
};

export default Auth;
