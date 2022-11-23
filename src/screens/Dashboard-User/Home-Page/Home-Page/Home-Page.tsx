import React, { useState } from "react";
import { CircledButton, ContentCard } from "../../../../components";
import "./Home-Page.css";
import { AiOutlineSearch } from "react-icons/ai";
import ModalSearch from "./ModalSearch/ModalSearch";
import { illustration_img, mencari_narasumber } from "../../../../assets";
import { Link } from "react-router-dom";

const HomePage: React.FC = () => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const toggleModal = () => {
    setShowModal((prevState) => !prevState);
  };

  const [activeButton, setActiveButton] = useState<boolean>(true);
  const [popularActive, setPopularActive] = useState<boolean>(true);
  const [sortingActive, setSortingActive] = useState<boolean>(false);
  const togglePopular = () => {
    setPopularActive((prevState) => !prevState);
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
        <div className="action-popular-btn">
          <div className="popular-btn-option">
            <span
              className={`${
                activeButton && popularActive
                  ? "popular-active"
                  : "primary-color"
              }`}
              onClick={() => {
                setPopularActive(true);
                setSortingActive(false);
              }}
            >
              Popular
            </span>
          </div>
          <div className="popular-btn-option">
            <span
              className={`${
                activeButton && sortingActive
                  ? "popular-active"
                  : "primary-color"
              }`}
              onClick={() => {
                setPopularActive(false);
                setSortingActive(true);
              }}
            >
              A - Z
            </span>
          </div>
        </div>
        <div className="action-search-btn" onClick={() => toggleModal()}>
          <CircledButton>
            <AiOutlineSearch className="circled-icon" />
          </CircledButton>
        </div>
      </div>
      <div className="home-page-content">
        <ContentCard
          judul="UI/UX"
          kategori="Teknologi"
          gambar="UI/UX"
          link="/dashboard-user/home-page/article-page"
        />
        <ContentCard
          judul="Frontend"
          kategori="Teknologi"
          gambar="frontend"
          link="/dashboard-user/home-page/article-page"
        />
        <ContentCard
          judul="Backend"
          kategori="Teknologi"
          gambar="backend"
          link="/dashboard-user/home-page/article-page"
        />
        <ContentCard
          judul="Mobile"
          kategori="Teknologi"
          gambar="mobile"
          link="/dashboard-user/home-page/article-page"
        />
        <div className="content-box-next">
          <i className="fa-solid fa-arrow-right arrow-next"></i>
        </div>
      </div>
      <Link to={"/dashboard-user/mencari-narasumber/1"} className="btn-mencari">
        <div className="button-mulai-mencari">
          <img
            src={mencari_narasumber}
            alt="mencari narasumber"
            className="icon-mencari"
          />
          <div className="mencari-narasumber">
            <h1>Mulai Mencari Narasumber</h1>
          </div>
        </div>
      </Link>
      {showModal ? (
        <ModalSearch
          link="/dashboard-user/home-page/result-page"
          onClose={() => toggleModal()}
        />
      ) : (
        <></>
      )}
    </div>
  );
};

export default HomePage;
