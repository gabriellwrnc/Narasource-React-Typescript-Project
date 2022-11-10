import React from "react";
import "./Modals.css";

interface ModalsProps {
  children: React.ReactNode;
}

const Modal: React.FC<ModalsProps> = (props) => {
  return (
    <div className="modal-wrapper">
      <div className="modal-centered">{props.children}</div>
    </div>
  );
};

export default Modal;
