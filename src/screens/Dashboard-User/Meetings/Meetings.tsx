import React from "react";
import { logo_meetings, zoom_layout } from "../../../assets";
import Timer from "../Mencari-Narasumber-Page/Mencari-Narasumber-Page-4/Menunggu-Pembayaran/Timer/Timer";
import "./Meetings.css";

const Meetings: React.FC = () => {
  const level_access = localStorage.getItem("@level_access");
  return (
    <div className="meetings-layout">
      <div className="meetings-timer">
        <img src={logo_meetings} alt="logo meetings" />
        <div className="meetings-judul-box">
          <span className="meetings-judul-activity">
            Penelitian Prospek Karir
          </span>
          <span className="meetings-judul-kategori">UI/UX Design</span>
        </div>
        <div className="meetings-timer-countdown">
          <Timer
            totalSec="3"
            navigation={
              level_access === "narasumber"
                ? "/dashboard-user/activity-page/sukses"
                : "/dashboard-user/activity-page/sukses"
            }
          />
        </div>
      </div>
      <img src={zoom_layout} alt="" />
      {/* <div className="meetings-screen"></div> */}
    </div>
  );
};

export default Meetings;
