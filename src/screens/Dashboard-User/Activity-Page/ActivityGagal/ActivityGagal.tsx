import React from "react";
import { dot, icon_gagal, juan } from "../../../../assets";
import { AuthButton } from "../../../../components";
import "./ActivityGagal.css";

const ActivityGagal: React.FC = () => {
  const level_access = localStorage.getItem("@level_access");
  return (
    <div className="activity-berlangsung-wrapper">
      <span className="activity-next-title">Status</span>
      <div className="activity-next-content">
        <div className="activity-next-content-left">
          <div className="next-content-left-status">
            <img
              src={icon_gagal}
              alt="icon berlangsung"
              className="icon-activity"
            />
            <div className="next-content-left-text">
              <span className="left-text-title">Gagal</span>
              <span className="title-icon-diterima">(Tidak Ditemukan)</span>
            </div>
          </div>
          <div className="next-content-left-desc">
            <div className="content-left-desc-box">
              <span className="left-desc-box-title">Deskripsi</span>
              <div className="left-desc-box-desc">
                <div className="left-desc-box-desc-content">
                  <div className="left-desc-box-desc-content-dot">
                    <img src={dot} />
                  </div>
                  <div className="left-desc-box-desc-content-content">
                    <span className="left-desc-box-desc-content-content-title">
                      Judul
                    </span>
                    <span className="left-desc-box-desc-content-content-desc">
                      Penelitian Prospek Karir
                    </span>
                  </div>
                </div>
                <div className="left-desc-box-desc-content">
                  <div className="left-desc-box-desc-content-dot">
                    <img src={dot} />
                  </div>
                  <div className="left-desc-box-desc-content-content">
                    <span className="left-desc-box-desc-content-content-title">
                      Tujuan
                    </span>
                    <span className="left-desc-box-desc-content-content-desc">
                      Meneliti apakah profesi ui/ux desainer memiliki prospek
                      karir yang menjanjikan di masa mendatang
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="activity-next-content-right">
          <div className="activity-next-content-right-detail-waktu">
            <div className="activity-next-content-right-left">
              <div className="activity-next-content-right-left-pic">
                <img src={juan} alt="juan pic" />
              </div>
              <div className="activity-next-content-right-left-text">
                <span className="activity-next-content-right-left-kategori">
                  UI/UX Desain
                </span>
                <span className="activity-next-content-right-left-date">
                  17 November 2022
                </span>
              </div>
            </div>
            <div className="activity-next-content-right-right">
              <div className="activity-next-content-right-right-waktu">
                20 Menit
              </div>
              <div className="activity-next-content-right-right-detail">
                13:00 - 13:20 WIB
              </div>
            </div>
          </div>
          {level_access === "narasumber" ? (
            <></>
          ) : (
            <>
              <div className="activity-next-content-right-detail-harga">
                <div className="next-content-right-detail-harga">
                  <div className="next-content-right-detail-harga-text">
                    Pembayaran
                  </div>
                  <div className="next-content-right-detail-harga-harga">
                    RP20K
                  </div>
                </div>
                <div className="next-content-right-detail-btn">
                  <AuthButton size="sm">Coba Lagi</AuthButton>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ActivityGagal;
