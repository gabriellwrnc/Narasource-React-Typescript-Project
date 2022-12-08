import React from "react";
import { Link } from "react-router-dom";
import { warning } from "../../../../../assets";
import { Modal } from "../../../../../components";
import "./EditValidasi.css";

interface EditModalProps {
  onClose: () => void;
}

const EditValidasi: React.FC<EditModalProps> = (props) => {
  return (
    <Modal>
      <div className="logout-validasi-modal">
        <img src={warning} alt="warning-icon" />
        <span className="logout-header">Perhatian</span>
        <span className="edit-desc">
          Perubahan akan disimpan Apakah anda ingin melanjutkan?
        </span>
        <div className="logout-valid-btn-yes" onClick={() => props.onClose()}>
          Ya
        </div>
        <div className="logout-valid-btn-no" onClick={() => props.onClose()}>
          Belum
        </div>
      </div>
    </Modal>
  );
};

export default EditValidasi;
