import { warning } from "../../../../../assets";
import React from "react";
import { Modal } from "../../../../../components";
import "./ModalTerimaTawaran.css";
import { useNavigate } from "react-router-dom";

interface TerimaTawaranModalProps {
  onClose: () => void;
}

const ModalTerimaTawaran: React.FC<TerimaTawaranModalProps> = (props) => {
  const navigate = useNavigate();
  return (
    <Modal>
      <div className="logout-validasi-modal">
        <img src={warning} alt="warning-icon" />
        <span className="logout-header">Perhatian</span>
        <span className="edit-desc">
          Apa anda yakin ingin menerima tawaran?
        </span>
        <div
          className="logout-valid-btn-yes"
          onClick={() => navigate("/meetings")}
        >
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
