import React, { ChangeEvent, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { email_icon } from "../../../../assets";
import { AuthButton } from "../../../../components";
import "./Forgot.css";
import ModalForgotSuccess from "./ModalForgotSukses/ForgotSukses";

const ForgotPassword: React.FC = () => {
  const [showModalSukses, setShowModalSukses] = useState<boolean>(false);

  const [data, setData] = useState({
    forgot: "",
  });
  const [btnDisable, setBtnDisable] = useState<boolean>(true);
  const [email, setEmail] = useState<string>("");

  const toggleModalSukses = () => {
    setShowModalSukses((prevState) => !prevState);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setData({
      ...data,
      [e.target.name]: value,
    });
  };

  const btnDisablbeFn = () => {
    if (data.forgot.length) {
      return false;
    } else {
      return true;
    }
  };
  useEffect(() => {
    const state = btnDisablbeFn();
    setBtnDisable(state);
  }, [data.forgot.length]);
  return (
    <div className="forgot">
      <div className="form-login--title">
        <h1 className="head">Lupa Kata Sandi?</h1>
        <h1 className="foot-forgot">
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
              onChange={(e) => {
                setEmail(e.target.value);
                handleChange(e);
              }}
              value={email}
              type="email"
              id="email"
              name="forgot"
              className="input-field lg-field"
              placeholder="Masukkan email anda"
            />
          </div>
        </div>
      </div>
      <div className="forgot-btn" onClick={() => toggleModalSukses()}>
        <AuthButton
          disabled={btnDisable}
          size="md"
          color={`${btnDisable ? "disable" : "primary"}`}
        >
          Reset Sandi
        </AuthButton>
      </div>
      <div className="forgot-back-btn">
        <Link to="/auth/login" className="link forgot-back">
          Kembali
        </Link>
      </div>
      {showModalSukses ? (
        <ModalForgotSuccess onClose={() => toggleModalSukses()} />
      ) : (
        <></>
      )}
    </div>
  );
};

export default ForgotPassword;
