import React from "react";
import {
  edit_date_icon,
  edit_date_icon_white,
  icon_pendapatan,
  icon_pendapatan_white,
  search_bar_admin,
} from "../../../assets";
import "./DataPendapatan.css";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import * as faker from "@faker-js/faker";

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip);

const labels = ["January", "February", "March", "April", "May", "June", "July"];

export const data1 = {
  labels,
  datasets: [
    {
      data: [0, 20, 40, 80, 90, 100, 20],
      backgroundColor: "#1d66c5",
    },
  ],
};

export const data2 = {
  labels,
  datasets: [
    {
      data: [0, 20, 40, 80, 90, 100, 20],
      backgroundColor: "#e19c32",
    },
  ],
};

const DataPendapatan: React.FC = () => {
  return (
    <div className="data-pendapatan-wrapper">
      <span className="data-user-title">Analisis</span>
      <div className="data-user-search-bar">
        <span className="data-user-pengaturan">Laporan Analisis</span>
        <div className="data-user-search-bar-table">
          <input type="text" id="search-bar" className="search-bar-admin" />
          <label htmlFor="search-bar">
            <img
              src={search_bar_admin}
              alt="Search Bar Admin"
              className="searchbar-icon"
            />
          </label>
        </div>
      </div>
      <div className="data-pendapatan-static-wrapper">
        <div className="pendapatan-title">
          <span className="pendapatan-title-1">Kunjungan Platform</span>
          <span className="pendapatan-title-2">Total</span>
        </div>
        <div className="data-pendapatan-box">
          <div className="data-pendapatan">
            <div className="pendapatan-box-content">
              <div className="box-content-title">
                <span className="content-title-title">Hari ini</span>
                <img src={edit_date_icon_white} alt="date icon" />
              </div>
              <span className="content-angka">1,200</span>
            </div>
            <div className="pendapatan-box-content-white">
              <div className="box-content-title">
                <span className="content-title-title-black">Minggu ini</span>
                <img src={edit_date_icon} alt="date icon" />
              </div>
              <span className="content-angka-black">10,900</span>
            </div>
            <div className="pendapatan-box-content-white">
              <div className="box-content-title">
                <span className="content-title-title-black">Bulan ini</span>
                <img src={edit_date_icon} alt="date icon" />
              </div>
              <span className="content-angka-black">50,290</span>
            </div>
          </div>
          <div className="data-pendapatan-right">
            <span className="pendapatan-right-text">Pengunjung</span>
            <div className="chart-box">
              <Bar
                data={data1}
                options={{
                  plugins: {
                    title: {
                      display: false,
                    },
                    legend: {
                      display: false,
                    },
                  },
                  maintainAspectRatio: true,
                  responsive: false,
                  scales: {
                    y: {
                      beginAtZero: true,
                      max: 100,
                      min: 0,
                      display: "auto",
                    },
                  },
                }}
              />
              ;
            </div>
          </div>
        </div>
      </div>
      <div className="data-pendapatan-static-wrapper">
        <div className="pendapatan-title">
          <span className="pendapatan-title-1">Pendapatan</span>
          <span className="pendapatan-title-2">Total</span>
        </div>
        <div className="data-pendapatan-box">
          <div className="data-pendapatan-right">
            <span className="pendapatan-right-text">Pengunjung</span>
            <div className="chart-box">
              <Bar
                data={data2}
                options={{
                  plugins: {
                    title: {
                      display: false,
                    },
                    legend: {
                      display: false,
                    },
                  },
                  maintainAspectRatio: true,
                  responsive: false,

                  scales: {
                    y: {
                      beginAtZero: true,
                      max: 100,
                      min: 0,
                      display: "auto",
                    },
                  },
                }}
              />
              ;
            </div>
          </div>
          <div className="data-pendapatan">
            <div className="pendapatan-box-content-pendapatan ">
              <div className="box-content-title">
                <span className="content-title-title">Hari ini</span>
                <img src={icon_pendapatan_white} alt="date icon" />
              </div>
              <span className="content-angka">1,200</span>
            </div>
            <div className="pendapatan-box-content-white">
              <div className="box-content-title">
                <span className="content-title-title-black">Minggu ini</span>
                <img src={icon_pendapatan} alt="date icon" />
              </div>
              <span className="content-angka-black">10,900</span>
            </div>
            <div className="pendapatan-box-content-white">
              <div className="box-content-title">
                <span className="content-title-title-black">Bulan ini</span>
                <img src={icon_pendapatan} alt="date icon" />
              </div>
              <span className="content-angka-black">50,290</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataPendapatan;
