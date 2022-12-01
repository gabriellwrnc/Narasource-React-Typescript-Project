import React from "react";
import { Link } from "react-router-dom";
import { success_icon } from "../../../../assets";
import "./Mencari-Narasumber-Page-5.css";

const MencariNarasumberPage5: React.FC = () => {
  return (
    <div className="mencari-narasumber-wrapper">
      <div className="mencari-left">
        <div className="left-number">5</div>
        <div className="left-desc">
          <div className="left-desc-title">Konfirmasi</div>
          <div className="left-desc-5">
            Pembayaran telah terkonfirmasi. Silakan cek notifikasi secara
            berkala.
          </div>
        </div>
      </div>
      <div className="mencari-right">
        <div className="rincian-title">
          <span className="page-numbering">5/5</span>
        </div>
        <div className="konfirmasi-wrapper">
          <div className="konfirmasi-top">
            <img src={success_icon} className="konfirmasi-icon" />
            <span className="konfirmasi-top-text">Pembayaran Sukses</span>
          </div>
          <div className="konfirmasi-bottom">
            <Link to="/dashboard-user/activity-page" className="profile-link">
              <div className="sesi-next-input-btn">
                <div className="input-button">
                  <div className="mencari-button">Halaman Aktivitas</div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MencariNarasumberPage5;
