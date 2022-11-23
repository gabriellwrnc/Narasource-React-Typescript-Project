import React, { useState } from "react";
import { cancel_show_password, show_password } from "../../../../assets";
import { AuthButton } from "../../../../components";
import "./GantiSandi.css";

const GantiSandi: React.FC = () => {
  const [passwordShown, setPasswordShown] = useState<boolean>(false);
  const [passwordNewShown, setPasswordNewShown] = useState<boolean>(false);
  const [konfirmasiPasswordNewShown, setKonfirmasiPasswordNewShown] =
    useState<boolean>(false);

  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };

  const togglePasswordNew = () => {
    setPasswordNewShown(!passwordNewShown);
  };

  const toggleKonfirmasiPasswordNew = () => {
    setKonfirmasiPasswordNewShown(!konfirmasiPasswordNewShown);
  };
  return (
    <div className="ganti-sandi-wrapper">
      <div className="ganti-sandi-form-wrapper">
        <form action="">
          <div className="ganti-sandi-input-wrapper">
            <label htmlFor="sandi-lama" className="ganti-sandi-input-label">
              Sandi Lama
            </label>
            <div className="ganti-sandi-input-field-wrapper">
              <input
                type={passwordShown ? "text" : "password"}
                id="sandi-lama"
                className="ganti-sandi-input-field sm-field"
                placeholder="Masukkan sandi lama"
              />
              <img
                src={passwordShown ? cancel_show_password : show_password}
                className="icon-ganti icon-show-pass-ganti"
                onClick={togglePassword}
              />
            </div>
          </div>
          <div className="ganti-sandi-input-wrapper">
            <label htmlFor="sandi-baru" className="ganti-sandi-input-label">
              Sandi Baru
            </label>
            <div className="ganti-sandi-input-field-wrapper">
              <input
                type={passwordNewShown ? "text" : "password"}
                id="sandi-baru"
                className="ganti-sandi-input-field sm-field"
                placeholder="Masukkan sandi baru"
              />
              <img
                src={passwordNewShown ? cancel_show_password : show_password}
                className="icon-ganti icon-show-pass-ganti"
                onClick={togglePasswordNew}
              />
            </div>
          </div>
          <div className="ganti-sandi-input-wrapper">
            <label
              htmlFor="konfirmasi-sandi-baru"
              className="ganti-sandi-input-label"
            >
              Konfirmasi Sandi Baru
            </label>
            <div className="ganti-sandi-input-field-wrapper">
              <input
                type={konfirmasiPasswordNewShown ? "text" : "password"}
                id="konfirmasi-sandi-baru"
                className="ganti-sandi-input-field sm-field"
                placeholder="Masukkan ulang sandi baru"
              />
              <img
                src={
                  konfirmasiPasswordNewShown
                    ? cancel_show_password
                    : show_password
                }
                className="icon-ganti icon-show-pass-ganti"
                onClick={toggleKonfirmasiPasswordNew}
              />
            </div>
          </div>
          <div className="ganti-sandi-btn">
            <AuthButton
              onClick={() => {
                alert("button simpan clicked");
              }}
              size="sm"
            >
              Simpan
            </AuthButton>
          </div>
        </form>
      </div>
    </div>
  );
};

export default GantiSandi;
