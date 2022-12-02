import React, { useState } from "react";
import { ActivityCards, CircledButton } from "../../../components";
import "./Activity-Page.css";
import { AiOutlineCalendar, AiOutlineSearch } from "react-icons/ai";
import { useQuery } from "react-query";
import { getActivity } from "../../../services/user";

const ActivityPage: React.FC = () => {
  const activities = useQuery("activities", getActivity);
  const [sortingActive, setSortingActive] = useState<boolean>();
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
  // console.log("berlangsung", berlangsungActive);
  // console.log("gagal", gagalActive);
  // console.log("sukses", suksesActive);
  return (
    <div className="activity-page-wrapper">
      <div className="activity-page-action">
        <div className="activity-calendar-btn">
          <CircledButton>
            <AiOutlineCalendar className="circled-icon" />
          </CircledButton>
        </div>
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
        <div className="activity-search-btn">
          <CircledButton>
            <AiOutlineSearch className="circled-icon" />
          </CircledButton>
        </div>
      </div>
      <div className="activity-content">
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

export default ActivityPage;
