import React from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import {
  active_data_list,
  active_data_narasumber,
  active_data_pendapatan,
  active_data_user,
  icon_data_list,
  icon_data_narasumber,
  icon_data_pendapatan,
  icon_data_user,
  sidebar_admin_logo,
} from "../../assets";
import "./DashboardAdmin.css";

const DashboardAdmin: React.FC = () => {
  const navigate = useLocation();
  return (
    <div className="dashboard-admin-layout">
      <div className="dashboard-admin-sidebar">
        <div className="sidebar-admin-logo">
          <img src={sidebar_admin_logo} alt="sidebar admin logo" />
        </div>
        <div className="sidebar-admin-content">
          <Link to={"/dashboard-admin/data-user"} className="link-none">
            <div
              className={`admin-content-box ${
                navigate.pathname.includes("/dashboard-admin/data-user")
                  ? "admin-content-active"
                  : ""
              }`}
            >
              <img
                src={
                  navigate.pathname.includes("/dashboard-admin/data-user")
                    ? active_data_user
                    : icon_data_user
                }
                alt="icon data user"
              />
              <span className="admin-content-name">Data User</span>
            </div>
          </Link>
          <Link to={"/dashboard-admin/data-narasumber"} className="link-none">
            <div
              className={`admin-content-box ${
                navigate.pathname.includes("/dashboard-admin/data-narasumber")
                  ? "admin-content-active"
                  : ""
              }`}
            >
              <img
                src={
                  navigate.pathname.includes("/dashboard-admin/data-narasumber")
                    ? active_data_narasumber
                    : icon_data_narasumber
                }
                alt="icon data user"
              />
              <span className="admin-content-name">Data Narasumber</span>
            </div>
          </Link>
          <Link to={"/dashboard-admin/data-pendapatan"} className="link-none">
            <div
              className={`admin-content-box ${
                navigate.pathname.includes("/dashboard-admin/data-pendapatan")
                  ? "admin-content-active"
                  : ""
              }`}
            >
              <img
                src={
                  navigate.pathname.includes("/dashboard-admin/data-pendapatan")
                    ? active_data_pendapatan
                    : icon_data_pendapatan
                }
                alt="icon data user"
              />
              <span className="admin-content-name">Pendapatan</span>
            </div>
          </Link>
          <Link
            to={"/dashboard-admin/data-list-kategori"}
            className="link-none"
          >
            <div
              className={`admin-content-box ${
                navigate.pathname.includes(
                  "/dashboard-admin/data-list-kategori"
                )
                  ? "admin-content-active"
                  : ""
              }`}
            >
              <img
                src={
                  navigate.pathname.includes(
                    "/dashboard-admin/data-list-kategori"
                  )
                    ? active_data_list
                    : icon_data_list
                }
                alt="icon data user"
              />
              <span className="admin-content-name">List Kategori</span>
            </div>
          </Link>
        </div>
        <div className="sidebar-admin-footer">ADMIN</div>
      </div>
      <div className="dashboard-admin-outlet">
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardAdmin;
