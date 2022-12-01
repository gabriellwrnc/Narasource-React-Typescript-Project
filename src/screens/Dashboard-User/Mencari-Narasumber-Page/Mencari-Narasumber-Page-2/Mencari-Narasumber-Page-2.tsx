import React, { useState } from "react";
import "./Mencari-Narasumber-Page-2.css";
import DatePicker, { DateObject } from "react-multi-date-picker";
import InputIcon from "react-multi-date-picker/components/input_icon";
import type { Value } from "react-multi-date-picker";
import { Link } from "react-router-dom";

const MencariNarasumberPage2: React.FC = () => {
  const [value, setValue] = useState<Value>(new Date());
  return (
    <div className="mencari-narasumber-wrapper">
      <div className="mencari-left">
        <div className="left-number">2</div>
        <div className="left-desc">
          <div className="left-desc-title">Penjadwalan</div>
          <div className="left-desc-desc">
            Pilih waktu sesuai jam kosong anda.
          </div>
        </div>
      </div>
      <div className="mencari-right">
        <div className="right-form">
          <form action="">
            <div className="penjadwalan-input-wrapper">
              <div className="input-button">
                <span className="mencari-input-label">Pilih Waktu</span>
                <span className="page-numbering">2/5</span>
              </div>
            </div>
            <div className="sesi-input-wrapper">
              <span className="sesi-title">Sesi 1</span>
              <div className="sesi-input-field-wrapper">
                <DatePicker
                  onChange={setValue}
                  format="D MMMM YYYY"
                  containerClassName="sesi-input"
                  render={<InputIcon />}
                  calendarPosition="bottom-center"
                  showOtherDays
                  placeholder="Tanggal"
                />
                ;
              </div>
              <div className="sesi-next-input-field-wrapper">
                <div className="sesi-input-time-mulai">
                  <label htmlFor="custom-time">
                    <div className="sesi-time-field">Jam Mulai</div>
                    <input
                      type="time"
                      name=""
                      id="custom-time"
                      className="time"
                      style={{ display: "none" }}
                    />
                  </label>
                </div>
              </div>
              <div className="sesi-next-input-field-wrapper">
                <div className="sesi-input-time-mulai">
                  <label htmlFor="custom-time">
                    <div className="sesi-time-field">Jam Selesai</div>
                    <input
                      type="time"
                      name=""
                      id="custom-time"
                      className="time"
                      style={{ display: "none" }}
                    />
                  </label>
                </div>
              </div>
            </div>
            <div className="sesi-input-wrapper">
              <span className="sesi-title">Sesi 2</span>
              <div className="sesi-input-field-wrapper">
                <DatePicker
                  onChange={setValue}
                  format="D MMMM YYYY"
                  containerClassName="sesi-input"
                  render={<InputIcon />}
                  calendarPosition="bottom-center"
                  showOtherDays
                  placeholder="Tanggal"
                />
                ;
              </div>
              <div className="sesi-next-input-field-wrapper">
                <div className="sesi-input-time-mulai">
                  <label htmlFor="custom-time">
                    <div className="sesi-time-field">Jam Mulai</div>
                    <input
                      type="time"
                      name=""
                      id="custom-time"
                      className="time"
                      style={{ display: "none" }}
                    />
                  </label>
                </div>
              </div>
              <div className="sesi-next-input-field-wrapper">
                <div className="sesi-input-time-mulai">
                  <label htmlFor="custom-time">
                    <div className="sesi-time-field">Jam Selesai</div>
                    <input
                      type="time"
                      name=""
                      id="custom-time"
                      className="time"
                      style={{ display: "none" }}
                    />
                  </label>
                </div>
              </div>
            </div>
            <div className="sesi-input-wrapper">
              <span className="sesi-title">Sesi 3</span>
              <div className="sesi-input-field-wrapper">
                <DatePicker
                  onChange={setValue}
                  format="D MMMM YYYY"
                  containerClassName="sesi-input"
                  render={<InputIcon />}
                  calendarPosition="bottom-center"
                  showOtherDays
                  placeholder="Tanggal"
                />
                ;
              </div>
              <div className="sesi-next-input-field-wrapper">
                <div className="sesi-input-time-mulai">
                  <label htmlFor="custom-time">
                    <div className="sesi-time-field">Jam Mulai</div>
                    <input
                      type="time"
                      name=""
                      id="custom-time"
                      className="time"
                      style={{ display: "none" }}
                    />
                  </label>
                </div>
              </div>
              <div className="sesi-next-input-field-wrapper">
                <div className="sesi-input-time-mulai">
                  <label htmlFor="custom-time">
                    <div className="sesi-time-field">Jam Selesai</div>
                    <input
                      type="time"
                      name=""
                      id="custom-time"
                      className="time"
                      style={{ display: "none" }}
                    />
                  </label>
                </div>
              </div>
              <Link
                to="/dashboard-user/mencari-narasumber/3"
                className="profile-link"
              >
                <div className="sesi-next-input-btn">
                  <div className="input-button">
                    <div className="mencari-button">Jadwalkan</div>
                  </div>
                </div>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default MencariNarasumberPage2;
