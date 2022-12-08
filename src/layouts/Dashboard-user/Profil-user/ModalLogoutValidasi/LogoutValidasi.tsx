import React from "react";
import { Link } from "react-router-dom";
import { warning } from "../../../../assets";
import { Modal } from "../../../../components";
import "./LogoutValidasi.css";

interface LogoutModalProps {
  onClose: () => void;
  onLogout: () => void;
}

const LogoutValidasi: React.FC<LogoutModalProps> = (props) => {
  return (
    <Modal>
      <div className="logout-validasi-modal">
        <img src={warning} alt="warning-icon" />
        <span className="logout-header">Perhatian</span>
        <span className="logout-desc">
          Apakah anda yakin ingin keluar akun?
        </span>
        <div className="logout-valid-btn-yes" onClick={() => props.onLogout()}>
          Ya
        </div>
        <div className="logout-valid-btn-no" onClick={() => props.onClose()}>
          Belum
        </div>
      </div>
    </Modal>
  );
};

export default LogoutValidasi;
