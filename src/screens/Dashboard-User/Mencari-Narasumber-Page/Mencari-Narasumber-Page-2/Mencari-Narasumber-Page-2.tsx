import React, { useState } from "react";
import "./Mencari-Narasumber-Page-2.css";
import DatePicker, { DateObject } from "react-multi-date-picker";
import InputIcon from "react-multi-date-picker/components/input_icon";
import type { Value } from "react-multi-date-picker";
import { Link } from "react-router-dom";
import { time_sesi } from "../../../../assets";

const MencariNarasumberPage2: React.FC = () => {
  const [value, setValue] = useState<Value>(new Date());
  const jumlahSesi = localStorage.getItem("@jumlah_sesi");
  const stringSesi = Number(jumlahSesi);
  const [clickMulai, setClickMulai] = useState<boolean>(false);
  const [clickSelesai, setClickSelesai] = useState<boolean>(false);

  const toggleSelesai = () => {
    setClickSelesai((prevState) => !prevState);
  };

  const toggleMulai = () => {
    setClickMulai((prevState) => !prevState);
  };
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
            {[...Array(stringSesi)].map((sesi, index) => {
              index += 1;
              return (
                <div key={index} className="sesi-input-wrapper">
                  <span className="sesi-title">Sesi {index}</span>
                  <div className="sesi-input-field-wrapper" key={index}>
                    <DatePicker
                      key={index}
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
                  <div className="sesi-next-input-field-wrapper" key={index}>
                    <div className="sesi-input-time-mulai" key={index}>
                      <label htmlFor="custom-time" key={index}>
                        {clickMulai ? (
                          <input
                            key={index}
                            type="time"
                            name=""
                            id="custom-time"
                            className="time"
                          />
                        ) : (
                          <>
                            <div
                              key={index}
                              className="sesi-time-field-selesai"
                              onClick={() => toggleMulai()}
                            >
                              Jam Mulai
                              <img
                                src={time_sesi}
                                alt="time sesi"
                                className="icon-timesesi-selesai"
                              />
                            </div>
                          </>
                        )}
                      </label>
                    </div>
                  </div>
                  <div className="sesi-next-input-field-wrapper" key={index}>
                    <div className="sesi-input-time-mulai" key={index}>
                      <label htmlFor="custom-time">
                        {clickSelesai ? (
                          <input
                            key={index}
                            type="time"
                            name=""
                            id="custom-timea"
                            className="time"
                          />
                        ) : (
                          <>
                            <div
                              key={index}
                              className="sesi-time-field"
                              onClick={() => toggleSelesai()}
                            >
                              Jam Selesai
                              <img
                                src={time_sesi}
                                alt="time sesi"
                                className="icon-timesesi"
                              />
                            </div>
                          </>
                        )}
                      </label>
                    </div>
                  </div>
                </div>
              );
            })}
            <Link
              to={"/dashboard-user/mencari-narasumber/3"}
              className="profile-link"
            >
              <div className="sesi-next-input-btn">
                <div className="mencari-button">Jadwalkan</div>
              </div>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default MencariNarasumberPage2;
