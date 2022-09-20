import React from "react";
import "./Modal.css";

interface ModalProps {
  title: string;
  visible: boolean;
  onClose: () => void;
  onSubmit: () => void;
  children?: React.ReactNode;
  closeText?: string;
  submiText?: string;
}

const Modal: React.FC<ModalProps> = (props) => {
  const { title, children, onClose, visible, onSubmit } = props;
  if (!visible) return <></>;

  const closeText = props.closeText ? props.closeText : "Close";
  const submitText = props.submiText ? props.submiText : "Submit";

  return (
    <>
      <div className="modal-wrapper">
        <div className="modal-box">
          <div className="modal-box-header">
            <div className="modal-box-title">
              <h3>{title}</h3>
            </div>
            <div className="modal-box-close">
              <button onClick={() => onClose()}>X</button>
            </div>
          </div>
          <div className="modal-box-content">{children}</div>
          <div className="modal-box-footer">
            <button onClick={() => onClose()}>{closeText}</button>
            <button onClick={() => onSubmit()}>{submitText}</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
