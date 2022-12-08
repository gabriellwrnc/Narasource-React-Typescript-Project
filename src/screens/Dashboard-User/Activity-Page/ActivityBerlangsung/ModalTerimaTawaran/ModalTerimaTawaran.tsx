import { warning } from "../../../../../assets";
import React from "react";
import { Modal } from "../../../../../components";
import "./ModalTerimaTawaran.css";

interface TerimaTawaranModalProps {
  onClose: () => void;
}

const ModalTerimaTawaran: React.FC<TerimaTawaranModalProps> = (props) => {
  return (
    <Modal>
      <div className="logout-validasi-modal">
        <img src={warning} alt="warning-icon" />
        <span className="logout-header">Perhatian</span>
        <span className="edit-desc">
          Apa anda yakin ingin menerima tawaran?
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

export default ModalTerimaTawaran;
