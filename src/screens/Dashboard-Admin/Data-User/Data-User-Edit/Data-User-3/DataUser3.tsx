import React from "react";
import "./DataUser4.css";
import { frontend } from "../../../../../assets";
import { Link } from "react-router-dom";
const DataUser4: React.FC = () => {
  return (
    <div className="data-user-3-wrapper">
      <div className="edit-path">
        <span className="edit-path-judul">Data User</span> /{" "}
        <span className="edit-path-judul">User</span> / Ganti Foto Profil
      </div>
      <span className="edit-user-title">Pengaturan Data User</span>
      <div className="edit-foto-box">
        <div className="foto-user">
          <img src={frontend} alt="foto user" />
        </div>
        <div className="pilih-foto-user">
          <label htmlFor="pilih-foto" className="pilih-file-foto">
            Pilih File
          </label>
          <input type="file" id="pilih-foto" hidden />
          <span className="foto-name">Tidak ada file</span>
        </div>
      </div>
      <div className="edit-user-save">
        <Link to={"/dashboard-admin/data-user/edit-1"} className="profile-link">
          <div className="btn-simpan-edit">Simpan</div>
        </Link>
        <Link to={"/dashboard-admin/data-user/edit-1"} className="profile-link">
          <div className="btn-batal-edit">Batal</div>
        </Link>
      </div>
    </div>
  );
};

export default DataUser4;
