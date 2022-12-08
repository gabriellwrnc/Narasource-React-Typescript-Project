import React, { useState } from "react";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import {
  arrow_profile,
  arrow_profile_red,
  close_blue,
  hamburber,
  icon_aktivitas_narasumber,
  icon_akun,
  icon_edit,
  icon_edit_narasumber,
  icon_logout,
  icon_rating_narasumber,
  icon_reset,
  profile_narasumber,
  show_pendapatan,
} from "../../../assets";
import LogoutValidasi from "./ModalLogoutValidasi/LogoutValidasi";
import "./ProfileUser.css";

const ProfileUser: React.FC = () => {
  const navigate = useLocation();
  const move = useNavigate();
  const [sideBar, setSideBar] = useState<boolean>(false);
  const [showModalLogout, serShowModalLogout] = useState<boolean>(false);

  const toggleModalLogout = () => {
    serShowModalLogout((prevState) => !prevState);
  };

  const toggleSideBar = () => {
    setSideBar(!sideBar);
  };

  const toLogin = () => {
    localStorage.removeItem("@level_access");
    localStorage.removeItem("@token");
    move("/auth/login");
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
            Profil
          </span>
          <img
            src={sideBar ? hamburber : close_blue}
            className={`profile-close ${sideBar ? "hamburber-postion" : ""}`}
            onClick={() => toggleSideBar()}
          />
        </div>
        {navigate.pathname.includes(
          "/dashboard-user/profil-user/profile-narasumber"
        ) ? (
          <>
            {sideBar ? (
              <></>
            ) : (
              <>
                <div className="sidebar-narasumber">
                  <div className="sidebar-narasumber-left">
                    <img src={profile_narasumber} alt="pic narasumber" />
                  </div>
                  <div className="sidebar-narasumber-right">
                    <span className="nama-narasumber">Gabriel D Lawrence</span>

                    <div className="pendapatan-narasumber">
                      <span className="pendapatan-text">Total Pendapatan</span>
                      <img
                        src={show_pendapatan}
                        alt="show pendapatan"
                        className="show-pendapatan"
                      />
                    </div>
                    <span className="total-pendapatan-narasumber">
                      Rp. 2.800.000
                    </span>
                  </div>
                </div>
                <span className="akun-narasumber-text">Akun Narasumber</span>
              </>
            )}

            <div className="sidebar-content">
              <Link
                to="/dashboard-user/profil-user/profile-narasumber/aktivitas"
                className="link-profile-sidebar"
              >
                <div
                  className={`sidebar-content-value ${
                    navigate.pathname.includes(
                      "/dashboard-user/profil-user/profile-narasumber/aktivitas"
                    )
                      ? "profile-sidebar-active"
                      : "none"
                  }`}
                >
                  <img
                    src={icon_aktivitas_narasumber}
                    alt="icon akun"
                    className="profile-icon-akun"
                  />
                  {sideBar ? (
                    <></>
                  ) : (
                    <div>
                      <div className="value-name">Aktivitas</div>
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
                to="/dashboard-user/profil-user/profile-narasumber/rating"
                className="link-profile-sidebar"
              >
                <div
                  className={`sidebar-content-value ${
                    navigate.pathname.includes(
                      "/dashboard-user/profil-user/profile-narasumber/rating"
                    )
                      ? "profile-sidebar-active"
                      : "none"
                  }`}
                >
                  <img
                    src={icon_rating_narasumber}
                    alt="icon akun"
                    className="profile-icon-akun"
                  />
                  {sideBar ? (
                    <></>
                  ) : (
                    <div>
                      <div className="value-name">Rating</div>
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
                to="/dashboard-user/profil-user/profile-narasumber/edit-berkas"
                className="link-profile-sidebar"
              >
                <div
                  className={`sidebar-content-value ${
                    navigate.pathname.includes(
                      "/dashboard-user/profil-user/profile-narasumber/edit-berkas"
                    )
                      ? "profile-sidebar-active"
                      : "none"
                  }`}
                >
                  <img
                    src={icon_edit_narasumber}
                    alt="icon akun"
                    className="profile-icon-akun"
                  />
                  {sideBar ? (
                    <></>
                  ) : (
                    <div>
                      <div className="value-name">Edit Berkas</div>
                      <img
                        src={arrow_profile}
                        alt="icon arrow"
                        className="profile-icon-arrow"
                      />
                    </div>
                  )}
                </div>
              </Link>
            </div>
          </>
        ) : (
          <>
            <div className="sidebar-content">
              <Link
                to="/dashboard-user/profil-user/akun"
                className="link-profile-sidebar"
              >
                <div
                  className={`sidebar-content-value ${
                    navigate.pathname.includes(
                      "/dashboard-user/profil-user/akun"
                    )
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
                    navigate.pathname.includes(
                      "/dashboard-user/profil-user/edit"
                    )
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
                    navigate.pathname.includes(
                      "/dashboard-user/profil-user/reset"
                    )
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
          </>
        )}

        {showModalLogout ? (
          <LogoutValidasi
            onLogout={() => toLogin()}
            onClose={() => toggleModalLogout()}
          />
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
