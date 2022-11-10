import React from "react";
import { ActivityCards, CircledButton } from "../../../components";
import "./Activity-Page.css";
import { AiOutlineCalendar, AiOutlineSearch } from "react-icons/ai";

const ActivityPage: React.FC = () => {
  return (
    <div className="activity-page-wrapper">
      <div className="activity-page-action">
        <div className="activity-calendar-btn">
          <CircledButton>
            <AiOutlineCalendar className="circled-icon" />
          </CircledButton>
        </div>
        <div className="activity-sorting-btn">
          <div className="sorting-active">
            <span className="info-color ">Berlangsung</span>
          </div>
          <div className="sorting-btn-option">
            <span className="warning-color">Gagal</span>
          </div>
          <div className="sorting-btn-option">
            <span className="success-color">Sukses</span>
          </div>
        </div>
        <div className="activity-search-btn">
          <CircledButton>
            <AiOutlineSearch className="circled-icon" />
          </CircledButton>
        </div>
      </div>
      <div className="activity-content">
        <div className="activity-content-left">
          <ActivityCards
            kondisi="berlangsung"
            kategori="UI/UX"
            jenis="Konsultasi Karir"
            tanggal="11 Oktober 2022"
            waktu="11:00 WIB"
          />
          <ActivityCards
            kondisi="gagal"
            kategori="Mobile Developer"
            jenis="Pencarian Data Skripsi"
            tanggal="12 Oktober 2022"
            waktu="11:00 WIB"
          />
          <ActivityCards
            kondisi="sukses"
            kategori="Frontend"
            jenis="Pelebaran Bisnis"
            tanggal="12 Desember 2022"
            waktu="13.30 WIB"
          />
        </div>
        <div className="activity-content-right">
          <ActivityCards
            kondisi="berlangsung"
            kategori="UI/UX"
            jenis="Konsultasi Karir"
            tanggal="12 Oktober 2022"
            waktu="11:00 WIB"
          />
          <ActivityCards
            kondisi="gagal"
            kategori="Mobile Developer"
            jenis="Pencarian Data Skripsi"
            tanggal="14 Oktober 2022"
            waktu="11:00 WIB"
          />
          <ActivityCards
            kondisi="sukses"
            kategori="Frontend"
            jenis="Pelebaran Bisnis"
            tanggal="12 Desember 2022"
            waktu="13.30 WIB"
          />
        </div>
      </div>
    </div>
  );
};

export default ActivityPage;
