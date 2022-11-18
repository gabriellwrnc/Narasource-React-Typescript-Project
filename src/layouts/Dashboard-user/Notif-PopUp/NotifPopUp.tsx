import React from "react";
import { notif_welcome } from "../../../assets";
import "./NotifPopUp.css";

const NotifPopUp: React.FC = () => {
  return (
    <div className="notif-popup-layout">
      <div className="notif-box">
        <div className="notif-logo">
          <img src={notif_welcome} alt="welcome logo" />
        </div>
        <div className="notif-desc-box">
          <h1 className="notif-title">Selamat Datang</h1>
          <h1 className="notif-desc">Kamu telah terdaftar pada NaraSource</h1>
          <h1 className="notif-date">Hari ini, 17:49</h1>
        </div>
      </div>
      <div className="notif-box">
        <div className="notif-logo">
          <img src={notif_welcome} alt="welcome logo" />
        </div>
        <div className="notif-desc-box">
          <h1 className="notif-title">Selamat Datang</h1>
          <h1 className="notif-desc">Kamu telah terdaftar pada NaraSource</h1>
          <h1 className="notif-date">Hari ini, 17:49</h1>
        </div>
      </div>
      <div className="notif-box">
        <div className="notif-logo">
          <img src={notif_welcome} alt="welcome logo" />
        </div>
        <div className="notif-desc-box">
          <h1 className="notif-title">Selamat Datang</h1>
          <h1 className="notif-desc">Kamu telah terdaftar pada NaraSource</h1>
          <h1 className="notif-date">Hari ini, 17:49</h1>
        </div>
      </div>
    </div>
  );
};

export default NotifPopUp;
