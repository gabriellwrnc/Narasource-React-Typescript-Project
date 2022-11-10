import React, { useState } from "react";
import { CircledButton, ContentCard } from "../../../../components";
import "./Home-Page.css";
import { AiOutlineSearch } from "react-icons/ai";
import ModalSearch from "./ModalSearch/ModalSearch";
import { illustration_img } from "../../../../assets";

const HomePage: React.FC = () => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const toggleModal = () => {
    setShowModal((prevState) => !prevState);
  };

  return (
    <div className="home-page-wrapper">
      <div className="home-page-illustration">
        <div className="illustration-img"></div>
        <div className="illustration-text">
          <p>
            Wawancara <br />
            Kapanpun, Dimanapun <br />
            Dengan <span className="illustration-text-bold">NaraSource</span>
          </p>
        </div>
      </div>
      <div className="home-page-action">
        <div className="action-popular-btn"></div>
        <div className="action-search-btn" onClick={() => toggleModal()}>
          <CircledButton>
            <AiOutlineSearch className="circled-icon" />
          </CircledButton>
        </div>
      </div>
      <div className="home-page-content">
        <ContentCard judul="UI/UX" kategori="Teknologi" gambar="UI/UX" />
        <ContentCard judul="Frontend" kategori="Teknologi" gambar="frontend" />
        <ContentCard judul="Backend" kategori="Teknologi" gambar="backend" />
        <ContentCard judul="Mobile" kategori="Teknologi" gambar="mobile" />
        <div className="content-box-next">
          <i className="fa-solid fa-arrow-right arrow-next"></i>
        </div>
      </div>
      {showModal ? <ModalSearch onClose={() => toggleModal()} /> : <></>}
    </div>
  );
};

export default HomePage;
