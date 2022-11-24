import React from "react";
import { error_icon, success_icon } from "../../../../assets";
import { AuthButton, Modal } from "../../../../components";
import "./ModalSuccess.css";

interface SuccessModalProps {
  onClose: () => void;
}

const ModalSuccess: React.FC<SuccessModalProps> = (props) => {
  return (
    <Modal>
      <div className="modal-error-box">
        <div className="modal-error-icon">
          <img src={success_icon} className="modal-icon" />
        </div>
        <div className="modal-error-title">
          <h1>Registrasi Berhasil</h1>
        </div>
        <div className="modal-error-desc">
          <p>Silakan login menggunakan akun yang telah terdaftar.</p>
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

export default ModalSuccess;
