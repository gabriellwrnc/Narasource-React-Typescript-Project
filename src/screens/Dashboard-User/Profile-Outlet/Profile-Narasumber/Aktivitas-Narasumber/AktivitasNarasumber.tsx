import React, { useState } from "react";
import { useQuery } from "react-query";
import { no_activity } from "../../../../../assets";
import { ActivityCards } from "../../../../../components";
import { getActivity } from "../../../../../services/user";
import "./AktivitasNarasumber.css";

const AktivitasNarasumber: React.FC = () => {
  const activities = useQuery("activities", getActivity);
  const [berlangsungActive, setBerlangsungActive] = useState<boolean>();
  const [gagalActive, setGagalActive] = useState<boolean>();
  const [suksesActive, setSuksesActive] = useState<boolean>();

  const toggleBtnBerlangsung = () => {
    setBerlangsungActive(true);
    setGagalActive(false);
    setSuksesActive(false);
  };

  const toggleBtnGagal = () => {
    setBerlangsungActive(false);
    setGagalActive(true);
    setSuksesActive(false);
  };

  const toggleBtnSukses = () => {
    setBerlangsungActive(false);
    setGagalActive(false);
    setSuksesActive(true);
  };
  return (
    <div className="activity-narasumber-page-wrapper">
      {/* <div className="activity-none">
        <img src={no_activity} alt="no activity" />
        <span className="activity-none-text">Belum Ada Aktivitas</span>
      </div> */}
      <div className="activity-page-action">
        <div className="activity-sorting-btn">
          <div
            className={`${
              berlangsungActive ? "sorting-active" : "sorting-btn-option"
            }`}
            onClick={() => {
              toggleBtnBerlangsung();
            }}
          >
            <span
              className={`${berlangsungActive ? "active-color" : "info-color"}`}
            >
              Berlangsung
            </span>
          </div>
          <div
            className={`${
              gagalActive ? "sorting-active" : "sorting-btn-option"
            }`}
            onClick={() => {
              toggleBtnGagal();
            }}
          >
            <span
              className={`${gagalActive ? "active-color" : "warning-color"}`}
            >
              Gagal
            </span>
          </div>
          <div
            className={`${
              suksesActive ? "sorting-active" : "sorting-btn-option"
            }`}
            onClick={() => {
              toggleBtnSukses();
            }}
          >
            <span
              className={`${suksesActive ? "active-color" : "success-color"}`}
            >
              Sukses
            </span>
          </div>
        </div>
      </div>
      <div className="activity-narasumber-content">
        {activities.data?.data.map((activities) => {
          let kondisi: any;
          if (activities.status === "0") {
            kondisi = "berlangsung";
          } else if (activities.status === "1") {
            kondisi = "sukses";
          } else if (activities.status === "2") {
            kondisi = "gagal";
          }

          let show: any;
          if (activities.status === "0" && berlangsungActive === true) {
            show = true;
          } else if (activities.status === "1" && gagalActive === true) {
            show = true;
          } else if (activities.status === "2" && suksesActive === true) {
            show = true;
          }
          return (
            <>
              <ActivityCards
                kondisi={kondisi}
                kategori={activities.category}
                jenis={activities.title}
                tanggal="11 Oktober 2022"
                waktu="11:00 WIB"
                display={show}
              />
            </>
          );
        })}
      </div>
    </div>
  );
};

export default AktivitasNarasumber;
