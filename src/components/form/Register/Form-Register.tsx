import React, { useState } from "react";
import {
  cancel_show_password,
  email_icon,
  password_icon,
  person,
  show_password,
} from "../../../assets";
import AuthButton from "../../buttons/Auth_Buttons/AuthButton";
import "./Form-Register.css";

const FormRegister: React.FC = () => {
  const [password, setPassword] = useState<string>("");
  const [passwordShown, setPasswordShown] = useState<boolean>(false);
  const [passwordConfirm, setPasswordConfirm] = useState<string>("");
  const [passwordConfirmShown, setPasswordConfirmShown] =
    useState<boolean>(false);

  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };
  const togglePasswordConfirm = () => {
    setPasswordConfirmShown(!passwordConfirmShown);
  };
  return (
    <div className="form-register-component">
      <form action="">
        <div className="form-regis-nama">
          <h1 className="input-title sm-input-title">Nama</h1>
          <div className="form-regis-input">
            <label htmlFor="nama" className="input-icon-regis">
              <img src={person} className="icon-regis" />
            </label>
            <input
              id="nama"
              type="text"
              className="input-field-regis lg-field-regis"
              placeholder="Masukkan nama anda"
            />
          </div>
        </div>
        <div className="form-regis-nama-pengguna mt-form">
          <h1 className="input-title sm-input-title">Nama Pengguna</h1>
          <div className="form-regis-input">
            <label htmlFor="namaPengguna" className="input-icon-regis">
              <img src={person} className="icon-regis" />
            </label>
            <input
              id="namaPengguna"
              type="text"
              className="input-field-regis lg-field-regis"
              placeholder="Masukkan nama pengguna"
            />
          </div>
        </div>
        <div className="form-regis-email mt-form">
          <h1 className="input-title sm-input-title">Email</h1>
          <div className="form-regis-input">
            <label htmlFor="email" className="input-icon-regis">
              <img src={email_icon} className="icon-regis" />
            </label>
            <input
              id="email"
              type="email"
              className="input-field-regis lg-field-regis"
              placeholder="Masukkan nama pengguna"
            />
          </div>
        </div>
        <div className="form-regis-email mt-form">
          <h1 className="input-title sm-input-title">Kata Sandi</h1>
          <div className="form-regis-input">
            <label htmlFor="password" className="input-icon-regis">
              <img src={password_icon} className="icon-regis" />
            </label>
            <input
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              type={passwordShown ? "text" : "password"}
              id="password"
              className="input-field-regis sm-field-regis"
              placeholder="Masukkan sandi anda"
            />
            <img
              src={passwordShown ? cancel_show_password : show_password}
              className="icon icon-show-pass-regis"
              onClick={togglePassword}
            />
          </div>
        </div>
        <div className="form-regis-email mt-form">
          <h1 className="input-title sm-input-title">Konfirmasi Kata Sandi</h1>
          <div className="form-regis-input">
            <label htmlFor="password" className="input-icon-regis">
              <img src={password_icon} className="icon-regis" />
            </label>
            <input
              onChange={(e) => setPasswordConfirm(e.target.value)}
              value={passwordConfirm}
              type={passwordConfirmShown ? "text" : "password"}
              id="password"
              className="input-field-regis sm-field-regis"
              placeholder="Masukkan ulang sandi anda"
            />
            <img
              src={passwordConfirmShown ? cancel_show_password : show_password}
              className="icon icon-show-pass-regis"
              onClick={togglePasswordConfirm}
            />
          </div>
        </div>
        <div className="form-regis-terms">
          <input type="checkbox" id="terms" className="terms" />
          <label htmlFor="terms">
            Saya telah membaca dan menyetujui{" "}
            <a href="" className="terms-anchor">
              Persyaratan & Kebijakan
            </a>{" "}
            dari pihak NaraSource.
          </label>
        </div>
        <div className="register-btn">
          <AuthButton type="primary" size="sm">
            Daftar
          </AuthButton>
        </div>
      </form>
    </div>
  );
};

export default FormRegister;
