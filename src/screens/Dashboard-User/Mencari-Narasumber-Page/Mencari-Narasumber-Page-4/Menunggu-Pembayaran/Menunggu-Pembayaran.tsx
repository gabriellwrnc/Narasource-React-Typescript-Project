import React from "react";
import { icon_salin } from "../../../../../assets";
import "./Menunggu-Pembayaran.css";

const MenungguPembayaran: React.FC = () => {
  return (
    <div className="mencari-narasumber-wrapper">
      <div className="mencari-left">
        <div className="left-number">4</div>
        <div className="left-desc">
          <div className="left-desc-title-3">Metode Pembayaran</div>
        </div>
      </div>
      <div className="mencari-right">
        <div className="menunggu-pembayaran-wrapper">
          <div className="rincian-title">
            <span className="page-numbering">4/5</span>
          </div>
          <div className="menunggu-pembayaran-content-wrapper">
            <span className="menunggu-title">Batas Akhir Pembayaran</span>
            <div className="menunggu-batas-wrapper">
              <div className="menunggu-batas-left">
                <span className="batas-tanggal">Kamis, 17 November 2022</span>
                <span className="batas-waktu">10.30 WIB</span>
              </div>
              <div className="menunggu-batas-right">24:00:00</div>
            </div>
          </div>
          <div className="menunggu-pembayaran-virtual-wrapper">
            <span className="menunggu-title">BRI Virtual Account</span>
            <div className="menunggu-batas-wrapper">
              <div className="menunggu-batas-left">
                <span className="batas-tanggal">Nomor Virtual Account</span>
                <span className="batas-waktu">8878800001231230</span>
              </div>
              <div className="menunggu-batas-salin">
                <span>Salin</span>
                <img src={icon_salin} alt="icon salin" />
              </div>
            </div>
            <div className="menunggu-total-pembayaran">
              <div className="menunggu-batas-left">
                <span className="batas-tanggal">Total Pembayaran</span>
                <span className="total-pembayaran">Rp 60.000</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenungguPembayaran;
