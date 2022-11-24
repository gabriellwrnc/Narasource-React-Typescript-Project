import React from "react";
import { Link } from "react-router-dom";
import {
  frontend,
  icon_petunjuk,
  icon_syarat,
  icon_tentang_kami,
  menjadi_narasumber,
} from "../../../../assets";
import "./AkunSaya.css";

const AkunSaya: React.FC = () => {
  return (
    <div className="akun-saya-wrapper">
      <div className="akun-saya-picture">
        <img
          src={frontend}
          alt="Prof Image"
          className="akun-saya-profile-pic"
        />
      </div>
      <span className="akun-saya-nama">Mushonnef Anwar</span>
      <span className="akun-saya-total">Total Wawancara : 7</span>
      <Link
        to="/dashboard-user/profil-user/menjadi-narasumber"
        className="profile-link"
      >
        <div className="akun-saya-btn-daftar">
          <img src={menjadi_narasumber} alt="icon menjadi narasumber" />
          <span className="akun-saya-btn-desc">Menjadi Narasumber</span>
        </div>
      </Link>
      <div className="akun-saya-option-container">
        <div className="akun-saya-option">
          <div
            className="option-icon-container"
            onClick={() => {
              alert("Petunjuk button clicked");
            }}
          >
            <img src={icon_petunjuk} alt="Icon Petunjuk" />
          </div>
          <span className="option-desc">Petunjuk</span>
        </div>
        <div className="akun-saya-option">
          <div
            className="option-icon-container"
            onClick={() => {
              alert("Tentang Kami button clicked");
            }}
          >
            <img src={icon_tentang_kami} alt="Icon Tentang Kami" />
          </div>
          <span className="option-desc">Tentang Kami</span>
        </div>
        <div className="akun-saya-option">
          <div
            className="option-icon-container"
            onClick={() => {
              alert("Syarat & Ketentuan button clicked");
            }}
          >
            <img src={icon_syarat} alt="Icon Syarat & Ketentuan" />
          </div>
          <span className="option-desc">Syarat & Ketentuan</span>
        </div>
      </div>
    </div>
  );
};

export default AkunSaya;
