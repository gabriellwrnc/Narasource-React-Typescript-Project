import React from "react";
import { icon_sukses } from "../../../../../assets";
import { Modal } from "../../../../../components";
import "./MenjadiValidasi.css";

interface MenjadiModalProps {
  onClose: () => void;
}

const MenjadiValidasi: React.FC<MenjadiModalProps> = (props) => {
  return (
    <Modal>
      <div className="menjadi-validasi-box">
        <img src={icon_sukses} alt="icon sukses" />
        <span className="menjadi-modal-box-header">Dokumen Terkirim</span>
        <span className="menjadi-modal-box-desc">
          Silakan tunggu pemberitahuan selanjutnya.
        </span>
        <div className="menjadi-modal-box-btn" onClick={() => props.onClose()}>
          Oke
        </div>
      </div>
    </Modal>
  );
};

export default MenjadiValidasi;
