import React, { useState } from "react";
import { Link } from "react-router-dom";
import { cancel_show_password, show_password } from "../../../../../assets";
import "./EditUser2.css";

const EditUser2: React.FC = () => {
  const [passwordShown, setPasswordShown] = useState<boolean>(false);
  const [passwordNewShown, setPasswordNewShown] = useState<boolean>(false);
  const [passwordConfrim, setPasswordConfrim] = useState<boolean>(false);

  const togglePassword = () => {
    setPasswordShown((prev) => !prev);
  };

  const toggleNewPassword = () => {
    setPasswordNewShown((prev) => !prev);
  };

  const toggleConf = () => {
    setPasswordConfrim((prev) => !prev);
  };

  return (
    <div className="edit-user-2-wrapper">
      <div className="edit-path">
        <span className="edit-path-judul">Data User</span> /{" "}
        <span className="edit-path-judul">User</span> / Ganti Sandi
      </div>
      <span className="edit-user-title">Pengaturan Data User</span>
      <div className="edit-user-box-2">
        <label htmlFor="sandi-lama" className="label-edit-sandi">
          Sandi Lama
        </label>
        <div className="input-edit-wrapper">
          <input
            type={passwordShown ? "text" : "password"}
            id="sandi-lama"
            className="input-edit-field"
          />
          <img
            src={passwordShown ? cancel_show_password : show_password}
            onClick={() => togglePassword()}
            alt="password icon"
            className="password-icon-edit"
          />
        </div>
        <label htmlFor="sandi-baru" className="label-edit-sandi">
          Sandi Baru
        </label>
        <div className="input-edit-wrapper">
          <input
            type={passwordNewShown ? "text" : "password"}
            id="sandi-baru"
            className="input-edit-field"
          />
          <img
            src={passwordNewShown ? cancel_show_password : show_password}
            onClick={() => toggleNewPassword()}
            alt="password icon"
            className="password-icon-edit"
          />
        </div>
        <label htmlFor="konfirmasi-sandi-baru" className="label-edit-sandi">
          Konfirmasi Sandi Baru
        </label>
        <div className="input-edit-wrapper">
          <input
            type={passwordConfrim ? "text" : "password"}
            id="konfirmasi-sandi-baru"
            className="input-edit-field"
          />
          <img
            src={passwordConfrim ? cancel_show_password : show_password}
            onClick={() => toggleConf()}
            alt="password icon"
            className="password-icon-edit"
          />
        </div>
      </div>
      <div className="edit-user-save">
        <Link to={"/dashboard-admin/data-user/edit-1"} className="profile-link">
          <div className="btn-simpan-edit">Simpan</div>
        </Link>
        <Link to={"/dashboard-admin/data-user/edit-1"} className="profile-link">
          <div className="btn-batal-edit">Batal</div>
        </Link>
      </div>
    </div>
  );
};

export default EditUser2;
