import React, { useState } from "react";
import { change_pic, frontend } from "../../../../assets";
import { AuthButton } from "../../../../components";
import "./EditProfile.css";
import EditValidasi from "./ModalEditValidasi/EditValidasi";

const EditProfile: React.FC = () => {
  const [showModalEdit, setShowModalEdit] = useState<boolean>(false);

  const toggleModalEdit = () => {
    setShowModalEdit((prevState) => !prevState);
  };

  return (
    <div className="edit-profile-wrapper">
      <div className="edit-profile-pic-wrapper">
        <div className="edit-profile-picture">
          <img src={frontend} alt="Prof Image" className="edit-profile-pic" />
        </div>
        <div
          className="edit-profile-change-pic"
          onClick={() => {
            alert("Change pic clicked");
          }}
        >
          <img src={change_pic} alt="change_pic" />
        </div>
      </div>
      <div className="edit-profile-form-wrapper">
        {/* <form action=""> */}
        <div className="edit-profile-input-wrapper">
          <label htmlFor="edit-nama" className="edit-profile-input-label">
            Nama
          </label>
          <input
            type="text"
            id="edit-nama"
            className="edit-profile-input-field"
            placeholder="Masukkan nama baru"
          />
        </div>
        <div className="edit-profile-input-wrapper">
          <label htmlFor="edit-tanggal" className="edit-profile-input-label">
            Tanggal lahir
          </label>
          <input
            type="date"
            id="edit-tanggal"
            className="edit-profile-input-field"
            placeholder="Masukkan tanggal lahir baru"
          />
        </div>
        <div className="edit-profile-input-radio-wrapper">
          <label htmlFor="edit-tanggal" className="edit-profile-input-label">
            Jenis Kelamin
          </label>
          <div className="edit-radio-wrapper">
            <div className="radio-option">
              <input
                type="radio"
                id="laki-laki"
                name="jenis-kelamin"
                value={"laki-laki"}
                className="radio-field"
              />
              <label htmlFor="laki-laki" className="radio-value">
                Laki-laki
              </label>
            </div>
            <div className="radio-option">
              <input
                type="radio"
                id="perempuan"
                name="jenis-kelamin"
                value={"perempuan"}
                className="radio-field"
              />
              <label htmlFor="perempuan" className="radio-value">
                Perempuan
              </label>
            </div>
          </div>
        </div>
        <div className="edit-profile-btn" onClick={() => toggleModalEdit()}>
          <AuthButton size="sm">Simpan</AuthButton>
        </div>
        {/* </form> */}
      </div>
      {showModalEdit ? (
        <EditValidasi onClose={() => toggleModalEdit()} />
      ) : (
        <></>
      )}
    </div>
  );
};

export default EditProfile;
