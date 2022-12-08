import React, { useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import {
  arrow_profile,
  arrow_profile_red,
  close_blue,
  hamburber,
  icon_akun,
  icon_edit,
  icon_logout,
  icon_reset,
} from "../../../assets";
import LogoutValidasi from "./ModalLogoutValidasi/LogoutValidasi";
import "./ProfileUser.css";

const ProfileUser: React.FC = () => {
  const navigate = useLocation();
  const [sideBar, setSideBar] = useState<boolean>(false);
  const [showModalLogout, serShowModalLogout] = useState<boolean>(false);

  const toggleModalLogout = () => {
    serShowModalLogout((prevState) => !prevState);
  };

  const toggleSideBar = () => {
    setSideBar(!sideBar);
  };

  return (
    <div
      className={`profile-user-layout ${
        sideBar ? "profile-user-layout-close" : ""
      }  `}
    >
      <div className="profile-sidebar">
        <div
          className={` profile-sidebar-header ${
            sideBar ? "sidebar-close" : ""
          }`}
        >
          <span className={`${sideBar ? "d-none" : "sidebar-header-title"}`}>
            Profile
          </span>
          <img
            src={sideBar ? hamburber : close_blue}
            className={`profile-close ${sideBar ? "hamburber-postion" : ""}`}
            onClick={() => toggleSideBar()}
          />
        </div>
        <div className="sidebar-content">
          <Link
            to="/dashboard-user/profil-user/akun"
            className="link-profile-sidebar"
          >
            <div
              className={`sidebar-content-value ${
                navigate.pathname.includes("/dashboard-user/profil-user/akun")
                  ? "profile-sidebar-active"
                  : "none"
              }`}
            >
              <img
                src={icon_akun}
                alt="icon akun"
                className="profile-icon-akun"
              />
              {sideBar ? (
                <></>
              ) : (
                <div>
                  <div className="value-name">Akun Saya</div>
                  <img
                    src={arrow_profile}
                    alt="icon arrow"
                    className="profile-icon-arrow"
                  />
                </div>
              )}
            </div>
          </Link>
          <Link
            to="/dashboard-user/profil-user/edit"
            className="link-profile-sidebar"
          >
            <div
              className={`sidebar-content-value ${
                navigate.pathname.includes("/dashboard-user/profil-user/edit")
                  ? "profile-sidebar-active"
                  : "none"
              }`}
            >
              <img
                src={icon_edit}
                alt="icon akun"
                className="profile-icon-akun"
              />
              {sideBar ? (
                <></>
              ) : (
                <div>
                  <div className="value-name">Edit Profil</div>
                  <img
                    src={arrow_profile}
                    alt="icon arrow"
                    className="profile-icon-arrow"
                  />
                </div>
              )}
            </div>
          </Link>
          <Link
            to="/dashboard-user/profil-user/reset"
            className="link-profile-sidebar"
          >
            <div
              className={`sidebar-content-value ${
                navigate.pathname.includes("/dashboard-user/profil-user/reset")
                  ? "profile-sidebar-active"
                  : "none"
              }`}
            >
              <img
                src={icon_reset}
                alt="icon akun"
                className="profile-icon-akun"
              />
              {sideBar ? (
                <></>
              ) : (
                <div>
                  <div className="value-name">Ganti Sandi</div>
                  <img
                    src={arrow_profile}
                    alt="icon arrow"
                    className="profile-icon-arrow"
                  />
                </div>
              )}
            </div>
          </Link>
          <div
            className={`sidebar-content-value`}
            onClick={() => toggleModalLogout()}
          >
            <img
              src={icon_logout}
              alt="icon akun"
              className="profile-icon-akun"
            />
            {sideBar ? (
              <></>
            ) : (
              <div>
                <div className="value-name-red">Logout</div>
                <img
                  src={arrow_profile_red}
                  alt="icon arrow"
                  className="profile-icon-arrow-red"
                />
              </div>
            )}
          </div>
        </div>
        {showModalLogout ? (
          <LogoutValidasi onClose={() => toggleModalLogout()} />
        ) : (
          <></>
        )}
      </div>
      <div className="profile-outlet">
        <Outlet />
      </div>
    </div>
  );
};

export default ProfileUser;
