import React from "react";
import { Link } from "react-router-dom";
import {
  icon_bca,
  icon_bri,
  icon_cimb,
  icon_gopay,
  icon_ovo,
  icon_shopee,
} from "../../../../assets";
import "./Mencari-Narasumber-Page-4.css";

const MencariNarasumberPage4: React.FC = () => {
  return (
    <div className="mencari-narasumber-wrapper">
      <div className="mencari-left">
        <div className="left-number">4</div>
        <div className="left-desc">
          <div className="left-desc-title-3">Metode Pembayaran</div>
        </div>
      </div>
      <div className="mencari-right">
        <div className="metode-right-form">
          <form action="">
            <div className="rincian-title">
              <span className="page-numbering">4/5</span>
            </div>
            <div className="metode-pembayaran-wrapper">
              <div className="metode-pembayaran-option">
                <span className="metode-option-title">
                  Virtual Account (VA)
                </span>
                <div className="metode-option-wrapper">
                  <div className="metode-option-virtual-wrapper">
                    <label htmlFor="bri">
                      <div className="metode-option-virtual-option">
                        <div className="metode-radio-label">
                          <img src={icon_bri} alt="icon bri" />
                          <span className="metode-radio-nama">Bank BRI</span>
                        </div>
                        <div className="metode-radio-btn">
                          <input
                            type="radio"
                            name="virtual-account"
                            value="bri"
                            id="bri"
                            className="radio-size"
                          />
                        </div>
                      </div>
                    </label>
                  </div>
                  <div className="metode-option-virtual-wrapper">
                    <label htmlFor="bca">
                      <div className="metode-option-virtual-option">
                        <div className="metode-radio-label">
                          <img src={icon_bca} alt="icon bca" />
                          <span className="metode-radio-nama">Bank BCA</span>
                        </div>
                        <div className="metode-radio-btn">
                          <input
                            type="radio"
                            name="virtual-account"
                            value="bca"
                            id="bca"
                            className="radio-size"
                          />
                        </div>
                      </div>
                    </label>
                  </div>
                  <div className="metode-option-virtual-wrapper">
                    <label htmlFor="cimb">
                      <div className="metode-option-virtual-option">
                        <div className="metode-radio-label">
                          <img src={icon_cimb} alt="icon cimb" />
                          <span className="metode-radio-nama">
                            Bank CIMB Niaga
                          </span>
                        </div>
                        <div className="metode-radio-btn">
                          <input
                            type="radio"
                            name="virtual-account"
                            value="cimb"
                            id="cimb"
                            className="radio-size"
                          />
                        </div>
                      </div>
                    </label>
                  </div>
                </div>
              </div>
              <div className="metode-pembayaran-option">
                <span className="metode-option-title">E-Wallet</span>
                <div className="metode-option-wrapper">
                  <div className="metode-option-virtual-wrapper">
                    <label htmlFor="gopay">
                      <div className="metode-option-virtual-option">
                        <div className="metode-radio-label">
                          <img src={icon_gopay} alt="icon gopay" />
                          <span className="metode-radio-nama">GOPAY</span>
                        </div>
                        <div className="metode-radio-btn">
                          <input
                            type="radio"
                            name="virtual-account"
                            value="gopay"
                            id="gopay"
                            className="radio-size"
                          />
                        </div>
                      </div>
                    </label>
                  </div>
                  <div className="metode-option-virtual-wrapper">
                    <label htmlFor="ovo">
                      <div className="metode-option-virtual-option">
                        <div className="metode-radio-label">
                          <img src={icon_ovo} alt="icon ovo" />
                          <span className="metode-radio-nama">OVO</span>
                        </div>
                        <div className="metode-radio-btn">
                          <input
                            type="radio"
                            name="virtual-account"
                            value="ovo"
                            id="ovo"
                            className="radio-size"
                          />
                        </div>
                      </div>
                    </label>
                  </div>
                  <div className="metode-option-virtual-wrapper">
                    <label htmlFor="shopee">
                      <div className="metode-option-virtual-option">
                        <div className="metode-radio-label">
                          <img src={icon_shopee} alt="icon shopee" />
                          <span className="metode-radio-nama">ShopeePay</span>
                        </div>
                        <div className="metode-radio-btn">
                          <input
                            type="radio"
                            name="virtual-account"
                            value="shopee"
                            id="shopee"
                            className="radio-size"
                          />
                        </div>
                      </div>
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <Link
              to="/dashboard-user/mencari-narasumber/4/wait"
              className="profile-link"
            >
              <div className="metode-btn">
                <div className="input-button">
                  <div className="mencari-button">Konfirmasi</div>
                </div>
              </div>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default MencariNarasumberPage4;
