import React from "react";
import "./Dashboard-user.css";
import { Outlet, useLocation } from "react-router";
import {
  arrow_left_header,
  arrow_profile,
  arrow_right_header,
  logo_side_bar,
  side_bar_aktivitas,
  side_bar_aktivitas_active,
  side_bar_home,
  side_bar_home_active,
} from "../../assets";
import { Link } from "react-router-dom";

const DashboardUser: React.FC = () => {
  const navigate = useLocation();
  return (
    <div className="dashboard-user-layout">
      <div className="dashboard-side-bar">
        <div className="dashboard-logo">
          <img src={logo_side_bar} className="logo-side-bar" />
        </div>
        <div className="dashboard-side-bar-content">
          <Link to="/dashboard-user/home-page" className="link-dashboard">
            <div
              className={`dashboard-side-bar-logo ${
                navigate.pathname === "/dashboard-user/home-page"
                  ? "active-side-bar"
                  : ""
              }`}
            >
              <img
                src={
                  navigate.pathname === "/dashboard-user/home-page"
                    ? side_bar_home_active
                    : side_bar_home
                }
                className="side-bar-content-logo"
              />
            </div>
            <div className="dashboard-side-bar-text">Beranda</div>
          </Link>
          <Link to="/dashboard-user/activity-page" className="link-dashboard">
            <div
              className={`dashboard-side-bar-logo ${
                navigate.pathname === "/dashboard-user/activity-page"
                  ? "active-side-bar"
                  : ""
              }`}
            >
              <img
                src={
                  navigate.pathname === "/dashboard-user/activity-page"
                    ? side_bar_aktivitas_active
                    : side_bar_aktivitas
                }
                className="side-bar-content-logo"
              />
            </div>
            <div className="dashboard-side-bar-text">Aktivitas</div>
          </Link>
        </div>
      </div>
      <div className="dashboard-header">
        <div className="dashboard-header-left">
          <div className="header-circle-left">
            <img src={arrow_left_header} className="arrow-header" />
          </div>
          <div className="header-circle-right">
            <img src={arrow_right_header} className="arrow-header" />
          </div>
        </div>
        <div className="dashboard-header-right">
          <div className="header-profile">
            <div className="profile-pic"></div>
            <div className="profile-name">Mushonnef</div>
            <div className="profile-arrow">
              <img src={arrow_profile} />
            </div>
          </div>
        </div>
      </div>
      <div className="dashboard-outlet">
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardUser;