import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  frontend,
  icon_petunjuk,
  icon_syarat,
  icon_tentang_kami,
  menjadi_narasumber,
} from "../../../../assets";
import "./AkunSaya.css";
import Petunjuk from "./Petunjuk-Component/Petunjuk";
import Syarat from "./Syarat-Component/Syarat";
import Tentang from "./Tentang-Component/Tentang";

const AkunSaya: React.FC = () => {
  const [petunjukActive, setPetunjukActive] = useState<boolean>(true);
  const [tentangActive, setTentangActive] = useState<boolean>(false);
  const [syaratActive, setSyaratActive] = useState<boolean>(false);

  const togglePetunjuk = () => {
    setPetunjukActive(true);
    setTentangActive(false);
    setSyaratActive(false);
  };

  const toggleTentang = () => {
    setPetunjukActive(false);
    setTentangActive(true);
    setSyaratActive(false);
  };

  const toggleSyarat = () => {
    setPetunjukActive(false);
    setTentangActive(false);
    setSyaratActive(true);
  };

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
        <div className="akun-saya-option" onClick={() => togglePetunjuk()}>
          {petunjukActive ? (
            <div className="akun-saya-option-petunjuk-active"></div>
          ) : (
            <></>
          )}
          <div className="option-icon-container">
            <img src={icon_petunjuk} alt="Icon Petunjuk" />
          </div>
          <span className="option-desc">Petunjuk</span>
        </div>
        <div className="akun-saya-option" onClick={() => toggleTentang()}>
          {tentangActive ? (
            <div className="akun-saya-option-tentang-active"></div>
          ) : (
            <></>
          )}
          <div className="option-icon-container">
            <img src={icon_tentang_kami} alt="Icon Tentang Kami" />
          </div>
          <span className="option-desc">Tentang Kami</span>
        </div>
        <div className="akun-saya-option" onClick={() => toggleSyarat()}>
          {syaratActive ? (
            <div className="akun-saya-option-syarat-active"></div>
          ) : (
            <></>
          )}

          <div className="option-icon-container">
            <img src={icon_syarat} alt="Icon Syarat & Ketentuan" />
          </div>
          <span className="option-desc">Syarat & Ketentuan</span>
        </div>
      </div>
      <div className="akun-saya-option-content">
        {petunjukActive ? <Petunjuk /> : <></>}
        {syaratActive ? <Syarat /> : <></>}
        {tentangActive ? <Tentang /> : <></>}
      </div>
    </div>
  );
};

export default AkunSaya;
