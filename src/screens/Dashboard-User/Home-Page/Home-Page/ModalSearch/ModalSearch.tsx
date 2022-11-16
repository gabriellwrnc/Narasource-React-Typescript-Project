import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { Link } from "react-router-dom";
import { AuthButton, Modal } from "../../../../../components";
import "./ModalSearch.css";

interface SearchModalProps {
  onClose?: () => void;
  link: string;
}

const ModalSearch: React.FC<SearchModalProps> = (props) => {
  return (
    <Modal>
      <div className="modal-search-wrapper">
        <div className="modal-search-input">
          <div className="modal-search-input-label">
            <label htmlFor="modal-search">
              <AiOutlineSearch className="modal-search-icon" />
            </label>
          </div>
          <div className="modal-search-input-field">
            <input
              type="text"
              id="modal-search"
              placeholder="Silahkan Ketik Disini"
              className="modal-search-field"
            ></input>
          </div>
        </div>
        <Link to={props.link}>
          <AuthButton color="transparent" size="sm">
            Cari
          </AuthButton>
        </Link>
      </div>
    </Modal>
  );
};

export default ModalSearch;
