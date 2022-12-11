import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./EditPorto.css";

const EditPorto: React.FC = () => {
  const [filePortoName, setFilePortoName] = useState<string>("");
  const handleChangePorto = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e);
    if (!e.target.files) return;
    setFilePortoName(e.target.files[0].name);
  };
  return (
    <div className="edit-user-2-wrapper">
      <div className="edit-path">
        <span className="edit-path-judul">Data User</span> /{" "}
        <span className="edit-path-judul">Narasumber</span> / Portofolio
      </div>
      <span className="edit-user-title">Pengaturan Data Narasumber</span>
      <div className="edit-cv-box">
        <label htmlFor="porto">
          <div className="custom-label-file-edit">
            {filePortoName === "" ? (
              <div className="custom-btn-file">Pilih File</div>
            ) : (
              <div className="custom-file-name">{filePortoName}</div>
            )}
          </div>
          <input
            type="file"
            id="porto"
            style={{ display: "none" }}
            onChange={(e) => handleChangePorto(e)}
          />
        </label>
      </div>
      <div className="edit-user-save">
        <Link
          to={"/dashboard-admin/data-narsum/edit-1"}
          className="profile-link"
        >
          <div className="btn-simpan-edit">Simpan</div>
        </Link>
        <Link
          to={"/dashboard-admin/data-narsum/edit-1"}
          className="profile-link"
        >
          <div className="btn-batal-edit">Batal</div>
        </Link>
      </div>
    </div>
  );
};

export default EditPorto;
