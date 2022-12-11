import React from "react";
import { warning } from "../../../../assets";
import { Modal } from "../../../../components";
import "./ValidasiAcc.css";

interface AccModalProps {
  onClose: () => void;
  onAcc: () => void;
}

const ValidasiAcc: React.FC<AccModalProps> = (props) => {
  return (
    <Modal>
      <div className="logout-validasi-modal">
        <img src={warning} alt="warning-icon" />
        <span className="logout-header">Perhatian</span>
        <span className="edit-desc">
          Apakah anda yakin ingin menyetujui pendaftaran?
        </span>
        <div className="logout-valid-btn-yes" onClick={() => props.onAcc()}>
          Ya
        </div>
        <div className="logout-valid-btn-no" onClick={() => props.onClose()}>
          Belum
        </div>
      </div>
    </Modal>
  );
};

export default ValidasiAcc;
