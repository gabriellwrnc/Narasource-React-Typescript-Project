import React from "react";
import { warning } from "../../../../assets";
import { Modal } from "../../../../components";
import "./ValidasiHapus.css";

interface HapusModalProps {
  onClose: () => void;
}

const ValidasiHapus: React.FC<HapusModalProps> = (props) => {
  return (
    <Modal>
      <div className="logout-validasi-modal">
        <img src={warning} alt="warning-icon" />
        <span className="logout-header">Perhatian</span>
        <span className="edit-desc">
          Apakah anda yakin ingin menghapus data ini?
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

export default ValidasiHapus;
