import React, { useState } from "react";
import { Link } from "react-router-dom";
import { email_icon } from "../../../assets";
import { AuthButton } from "../../../components";
import "./Forgot.css";

const ForgotPassword: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  return (
    <div className="forgot">
      <div className="form-login--title">
        <h1 className="head">Lupa Kata Sandi?</h1>
        <h1 className="foot">
          Mohon masukan email yang terdaftar pada aplikasi NaraQ.
        </h1>
      </div>
      <div className="form-forgot-content">
        <div className="form-login-email">
          <h1 className="input-title lg-input-title">Email</h1>
          <div className="form-login-email-input">
            <label htmlFor="email" className="input-icon">
              <img src={email_icon} className="icon" />
            </label>
            <input
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              type="email"
              id="email"
              className="input-field lg-field"
              placeholder="Masukkan email anda"
            />
          </div>
        </div>
      </div>
      <div className="forgot-btn">
        <AuthButton size="md" type="primary">
          Reset Sandi
        </AuthButton>
      </div>
      <div className="forgot-back-btn">
        <Link to="/auth/login" className="link forgot-back">
          Kembali
        </Link>
      </div>
    </div>
  );
};

export default ForgotPassword;
