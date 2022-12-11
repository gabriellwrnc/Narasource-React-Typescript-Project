import React from "react";
import { Link } from "react-router-dom";
import {
  edit_date_icon,
  edit_dropdown_icon,
  edit_link_icon,
  input_edit,
} from "../../../../../assets";
import "./EditUser1.css";

const EditUser1: React.FC = () => {
  return (
    <div className="edit-user-1-wrapper">
      <div className="edit-path">
        <span className="edit-path-judul">Data User</span> / User
      </div>
      <span className="edit-user-title">Pengaturan Data User</span>
      <div className="edit-user-box-1">
        <table className="table-component">
          <thead className="table-head">
            <tr className="tr-table-head">
              <td className="td-table-head">No</td>
              <td className="td-table-head">Judul</td>
              <td className="td-table-head">Data</td>
            </tr>
          </thead>
          <tbody>
            <tr className="tr-table-body">
              <td className="td-table-body">1.</td>
              <td className="td-table-body">Nama</td>
              <td className="td-table-body">
                <label htmlFor="nama" className="edit-input-wrapper">
                  <input
                    type="text"
                    id="nama"
                    className="input-field-edit"
                    placeholder="Nama User"
                  />
                  <img
                    src={input_edit}
                    alt="icon edit input"
                    className="input-field-icon"
                  />
                </label>
              </td>
            </tr>
            <tr className="tr-table-body">
              <td className="td-table-body">2.</td>
              <td className="td-table-body">Nama Pengguna</td>
              <td className="td-table-body">
                <label htmlFor="nama-pengguna" className="edit-input-wrapper">
                  <input
                    type="text"
                    id="nama-pengguna"
                    className="input-field-edit"
                    placeholder="Username User"
                  />
                  <img
                    src={input_edit}
                    alt="icon edit input"
                    className="input-field-icon"
                  />
                </label>
              </td>
            </tr>
            <tr className="tr-table-body">
              <td className="td-table-body">3.</td>
              <td className="td-table-body">Foto Profil</td>
              <td className="td-table-body">
                <div className="edit-link">
                  <Link
                    to={"/dashboard-admin/data-user/edit-3"}
                    className="edit-link-text"
                  >
                    Ganti Foto Profil
                  </Link>
                  <img src={edit_link_icon} alt="arrow link" />
                </div>
              </td>
            </tr>
            <tr className="tr-table-body">
              <td className="td-table-body">4.</td>
              <td className="td-table-body">Email</td>
              <td className="td-table-body">
                <label htmlFor="nama-pengguna" className="edit-input-wrapper">
                  <input
                    type="text"
                    id="nama-pengguna"
                    className="input-field-edit"
                    placeholder="user@email.com"
                  />
                  <img
                    src={input_edit}
                    alt="icon edit input"
                    className="input-field-icon"
                  />
                </label>
              </td>
            </tr>
            <tr className="tr-table-body">
              <td className="td-table-body">5.</td>
              <td className="td-table-body">Kata Sandi</td>
              <td className="td-table-body">
                <div className="edit-link">
                  <Link
                    to={"/dashboard-admin/data-user/edit-2"}
                    className="edit-link-text"
                  >
                    Ganti Kata Sandi
                  </Link>
                  <img src={edit_link_icon} alt="arrow link" />
                </div>
              </td>
            </tr>
            <tr className="tr-table-body">
              <td className="td-table-body">6.</td>
              <td className="td-table-body">Tanggal Lahir</td>
              <td className="td-table-body">
                <label htmlFor="nama-pengguna" className="edit-input-wrapper">
                  <input
                    type="text"
                    id="nama-pengguna"
                    className="input-field-edit"
                    placeholder="1 Januari 2022"
                  />
                  <img
                    src={edit_date_icon}
                    alt="icon edit input"
                    className="input-field-icon"
                  />
                </label>
              </td>
            </tr>
            <tr className="tr-table-body">
              <td className="td-table-body">7.</td>
              <td className="td-table-body">Jenis Kelamin</td>
              <td className="td-table-body">
                <label htmlFor="nama-pengguna" className="edit-input-wrapper">
                  <input
                    type="text"
                    id="nama-pengguna"
                    className="input-field-edit"
                    placeholder="Laki-laki"
                  />
                  <img
                    src={edit_dropdown_icon}
                    alt="icon edit input"
                    className="input-field-icon"
                  />
                </label>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="edit-user-save">
        <Link to={"/dashboard-admin/data-user"} className="profile-link">
          <div className="btn-simpan-edit">Simpan</div>
        </Link>
        <Link to={"/dashboard-admin/data-user"} className="profile-link">
          <div className="btn-batal-edit">Batal</div>
        </Link>
      </div>
    </div>
  );
};

export default EditUser1;
