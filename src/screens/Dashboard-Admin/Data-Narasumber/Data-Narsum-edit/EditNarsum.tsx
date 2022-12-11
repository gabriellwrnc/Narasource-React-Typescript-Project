import React from "react";
import { Link } from "react-router-dom";
import {
  edit_date_icon,
  edit_dropdown_icon,
  edit_link_icon,
  input_edit,
} from "../../../../assets";
import "./EditNarsum.css";

const EditNarsum: React.FC = () => {
  return (
    <div className="edit-user-1-wrapper">
      <div className="edit-path">
        <span className="edit-path-judul">Data Narasumber</span> / Narasumber
      </div>
      <span className="edit-user-title">Pengaturan Data Narasumber</span>
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
              <td className="td-table-body">Tingkat Pendidikan</td>
              <td className="td-table-body">
                <label htmlFor="nama" className="edit-input-wrapper">
                  <input
                    type="text"
                    id="nama"
                    className="input-field-edit"
                    placeholder="Sarjana"
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
              <td className="td-table-body">Nama Sekolah/Kampus</td>
              <td className="td-table-body">
                <label htmlFor="nama-pengguna" className="edit-input-wrapper">
                  <input
                    type="text"
                    id="nama-pengguna"
                    className="input-field-edit"
                    placeholder="Universitas Indonesia"
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
              <td className="td-table-body">Bidang yang didalami</td>
              <td className="td-table-body">
                <div className="edit-link">
                  <Link
                    to={"/dashboard-admin/data-narsum/edit-bidang"}
                    className="edit-link-text"
                  >
                    Edit Bidang
                  </Link>
                  <img src={edit_link_icon} alt="arrow link" />
                </div>
              </td>
            </tr>
            <tr className="tr-table-body">
              <td className="td-table-body">4.</td>
              <td className="td-table-body">Curriculum Vitae</td>
              <td className="td-table-body">
                <div className="edit-link">
                  <Link
                    to={"/dashboard-admin/data-narsum/edit-cv"}
                    className="edit-link-text"
                  >
                    Edit CV
                  </Link>
                  <img src={edit_link_icon} alt="arrow link" />
                </div>
              </td>
            </tr>
            <tr className="tr-table-body">
              <td className="td-table-body">5.</td>
              <td className="td-table-body">Portofolio</td>
              <td className="td-table-body">
                <div className="edit-link">
                  <Link
                    to={"/dashboard-admin/data-narsum/edit-porto"}
                    className="edit-link-text"
                  >
                    Edit Portofolio
                  </Link>
                  <img src={edit_link_icon} alt="arrow link" />
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="edit-user-save">
        <Link to={"/dashboard-admin/data-narasumber"} className="profile-link">
          <div className="btn-simpan-edit">Simpan</div>
        </Link>
        <Link to={"/dashboard-admin/data-narasumber"} className="profile-link">
          <div className="btn-batal-edit">Batal</div>
        </Link>
      </div>
    </div>
  );
};

export default EditNarsum;
