import React from "react";
import { success_icon } from "../../../../../assets";
import { AuthButton, Modal } from "../../../../../components";
import "./ForgotSukses.css";

interface SuccessModalProps {
  onClose: () => void;
}

const ModalForgotSuccess: React.FC<SuccessModalProps> = (props) => {
  return (
    <Modal>
      <div className="modal-error-box">
        <div className="modal-error-icon">
          <img src={success_icon} className="modal-icon" />
        </div>
        <div className="modal-error-title">
          <h1>Sukses</h1>
        </div>
        <div className="modal-error-desc">
          <p>Permintaan reset sandi telah terkirim. Silakan cek email anda.</p>
        </div>
        <div className="modal-error-btn">
          <AuthButton
            onClick={() => props.onClose()}
            type="submit"
            color="primary"
            size="md"
          >
            Oke
          </AuthButton>
        </div>
      </div>
    </Modal>
  );
};

export default ModalForgotSuccess;
