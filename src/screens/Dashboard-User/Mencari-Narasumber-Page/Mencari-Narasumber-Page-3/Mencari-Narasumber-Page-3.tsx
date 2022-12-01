import React from "react";
import { Link } from "react-router-dom";
import { time_rincian } from "../../../../assets";
import "./Mencari-Narasumber-Page-3.css";

const MencariNarasumberPage3: React.FC = () => {
  return (
    <div className="mencari-narasumber-wrapper">
      <div className="mencari-left">
        <div className="left-number">3</div>
        <div className="left-desc">
          <div className="left-desc-title-3">Rincian Pembayaran</div>
        </div>
      </div>
      <div className="mencari-right">
        <div className="rincian-right-form">
          <form action="">
            <div className="rincian-title">
              <span className="page-numbering">3/5</span>
            </div>
            <div className="rincian-box">
              <div className="rincian-box-title">UI/UX Desain</div>
              <div className="rincian-box-jumlah-sesi">3 Sesi</div>
              <div className="rincian-box-total-pembayaran-wrapper">
                <div className="rincian-box-total-pembayaran">
                  <div className="total-pembayaran-left">
                    <span className="total-pembayaran-tanggal">
                      17 November 2022
                    </span>
                    <div className="total-pembayaran-waktu-wrapper">
                      <img
                        src={time_rincian}
                        alt="icon time"
                        className="icon-rincian"
                      />
                      <span className="total-pembayaran-waktu">
                        13:00 WIB - 13:20 WIB
                      </span>
                    </div>
                  </div>
                  <div className="total-pembayaran-right">
                    <span className="total-pembayaran">RP20K</span>
                  </div>
                </div>
                <div className="rincian-box-total-pembayaran">
                  <div className="total-pembayaran-left">
                    <span className="total-pembayaran-tanggal">
                      18 November 2022
                    </span>
                    <div className="total-pembayaran-waktu-wrapper">
                      <img
                        src={time_rincian}
                        alt="icon time"
                        className="icon-rincian"
                      />
                      <span className="total-pembayaran-waktu">
                        16:00 WIB - 16:20 WIB
                      </span>
                    </div>
                  </div>
                  <div className="total-pembayaran-right">
                    <span className="total-pembayaran">RP20K</span>
                  </div>
                </div>
                <div className="rincian-box-total-pembayaran">
                  <div className="total-pembayaran-left">
                    <span className="total-pembayaran-tanggal">
                      19 November 2022
                    </span>
                    <div className="total-pembayaran-waktu-wrapper">
                      <img
                        src={time_rincian}
                        alt="icon time"
                        className="icon-rincian"
                      />
                      <span className="total-pembayaran-waktu">
                        20:00 WIB - 20:20 WIB
                      </span>
                    </div>
                  </div>
                  <div className="total-pembayaran-right">
                    <span className="total-pembayaran">RP20K</span>
                  </div>
                </div>
              </div>
              <div className="rincin-box-total-tagihan">
                <span className="total-tagihan-text">Total Tagihan</span>
                <span className="total-tagihan-jumlah">60K</span>
              </div>
            </div>
            <Link
              to="/dashboard-user/mencari-narasumber/4"
              className="profile-link"
            >
              <div className="rincian-btn">
                <div className="input-button">
                  <div className="mencari-button">Lanjutkan</div>
                </div>
              </div>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default MencariNarasumberPage3;
