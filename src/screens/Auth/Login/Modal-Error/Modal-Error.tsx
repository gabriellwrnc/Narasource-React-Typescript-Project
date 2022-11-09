import React from "react";
import "./Modal-Error.css";
import { error_icon } from "../../../../assets";
import { AuthButton, Modal } from "../../../../components";

interface ErrorModalProps {
  onClose: () => void;
}

const ModalError: React.FC<ErrorModalProps> = (props) => {
  return (
    <Modal>
      <div className="modal-error-box">
        <div className="modal-error-icon">
          <img src={error_icon} className="modal-icon" />
        </div>
        <div className="modal-error-title">
          <h1>Authentikasi Gagal</h1>
        </div>
        <div className="modal-error-desc">
          <p>Email atau sandi yang anda masukkan salah</p>
        </div>
        <div className="modal-error-btn">
          <AuthButton
            onClick={() => props.onClose()}
            type="submit"
            color="primary"
            size="md"
          >
            Coba Lagi
          </AuthButton>
        </div>
      </div>
    </Modal>
  );
};

export default ModalError;
