import React, { useState } from "react";
import { notif_belum, notif_sudah, notif_welcome } from "../../../assets";
import "./NotifPopUp.css";

const NotifPopUp: React.FC = () => {
  const [notifBelum, setNotifBelum] = useState<boolean>(true);
  const [notifSudah, setNotifSudah] = useState<boolean>(false);

  const toggleBelum = () => {
    setNotifBelum(true);
    setNotifSudah(false);
  };

  const toggleSudah = () => {
    setNotifBelum(false);
    setNotifSudah(true);
  };

  return (
    <div className="notif-popup-layout">
      <div className="notif-title-box">Notifikasi</div>
      <div className="notif-sorting">
        <div
          className={`notif-belum ${notifBelum ? "notif-active-sorting" : ""}`}
          onClick={() => toggleBelum()}
        >
          Belum dibaca
        </div>
        <div
          className={`notif-sudah ${notifSudah ? "notif-active-sorting" : ""}`}
          onClick={() => toggleSudah()}
        >
          Sudah dibaca
        </div>
      </div>
      {notifBelum ? (
        <div className="notif-box">
          <img src={notif_belum} alt="notif belum" />
          <div className="notif-box-left">
            <span className="notif-title-header">Tawaran Masuk</span>
            <span className="notif-title-desc">
              Customer mengajukan permintaan wawancara.
            </span>
            <span className="notif-title-date">Hari ini, 17:49</span>
          </div>
        </div>
      ) : (
        <></>
      )}

      {notifSudah ? (
        <>
          <div className="notif-box">
            <img
              src={notif_sudah}
              alt="notif sudah"
              className="icon-notif-sudah"
            />
            <div className="notif-box-left">
              <span className="notif-title-header">
                Penelitian Prospek Karir
              </span>
              <span className="notif-title-desc">
                Selamat, Narasumber menerima tawaran.
              </span>
              <span className="notif-title-date">Hari ini, 17:49</span>
            </div>
          </div>
          <div className="notif-box">
            <img
              src={notif_sudah}
              alt="notif sudah"
              className="icon-notif-sudah"
            />
            <div className="notif-box-left">
              <span className="notif-title-header">SELAMAT DATANG</span>
              <span className="notif-title-desc">
                Kamu telah terdaftar pada NaraSource.
              </span>
              <span className="notif-title-date">Hari ini, 17:49</span>
            </div>
          </div>
        </>
      ) : (
        <></>
      )}
    </div>
  );
};

export default NotifPopUp;
