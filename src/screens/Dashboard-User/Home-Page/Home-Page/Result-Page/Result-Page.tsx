import React, { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { CircledButton, ContentCard } from "../../../../../components";
import ModalSearch from "../ModalSearch/ModalSearch";
import "./Result-Page.css";

const ResultPage: React.FC = () => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const toggleModal = () => {
    setShowModal((prevState) => !prevState);
  };
  return (
    <div>
      <div className="result-page-action">
        <div className="action-popular-btn">
          <div className="popular-btn-option">
            <span className="popular-active">Popular</span>
          </div>
          <div className="popular-btn-option">
            <span className="primary-color">A - Z</span>
          </div>
        </div>
        <div className="action-search-btn" onClick={() => toggleModal()}>
          <CircledButton>
            <AiOutlineSearch className="circled-icon" />
          </CircledButton>
        </div>
      </div>
      {showModal ? (
        <ModalSearch
          link="/dashboard-user/home-page/result-page"
          onClose={() => toggleModal()}
        />
      ) : (
        <></>
      )}
      <div className="result-page-content">
        <ContentCard
          judul="UI/UX"
          kategori="Teknologi"
          gambar="UI/UX"
          link="/dashboard-user/home-page/article-page"
        />
        <ContentCard
          judul="UI/UX"
          kategori="Teknologi"
          gambar="UI/UX"
          link="/dashboard-user/home-page/article-page"
        />
        <ContentCard
          judul="UI/UX"
          kategori="Teknologi"
          gambar="UI/UX"
          link="/dashboard-user/home-page/article-page"
        />
        <ContentCard
          judul="UI/UX"
          kategori="Teknologi"
          gambar="UI/UX"
          link="/dashboard-user/home-page/article-page"
        />
        <ContentCard
          judul="UI/UX"
          kategori="Teknologi"
          gambar="UI/UX"
          link="/dashboard-user/home-page/article-page"
        />
        <ContentCard
          judul="UI/UX"
          kategori="Teknologi"
          gambar="UI/UX"
          link="/dashboard-user/home-page/article-page"
        />
        <ContentCard
          judul="UI/UX"
          kategori="Teknologi"
          gambar="UI/UX"
          link="/dashboard-user/home-page/article-page"
        />
        <ContentCard
          judul="UI/UX"
          kategori="Teknologi"
          gambar="UI/UX"
          link="/dashboard-user/home-page/article-page"
        />
        <ContentCard
          judul="UI/UX"
          kategori="Teknologi"
          gambar="UI/UX"
          link="/dashboard-user/home-page/article-page"
        />
        <ContentCard
          judul="UI/UX"
          kategori="Teknologi"
          gambar="UI/UX"
          link="/dashboard-user/home-page/article-page"
        />
        <ContentCard
          judul="UI/UX"
          kategori="Teknologi"
          gambar="UI/UX"
          link="/dashboard-user/home-page/article-page"
        />
        <ContentCard
          judul="UI/UX"
          kategori="Teknologi"
          gambar="UI/UX"
          link="/dashboard-user/home-page/article-page"
        />
        <ContentCard
          judul="UI/UX"
          kategori="Teknologi"
          gambar="UI/UX"
          link="/dashboard-user/home-page/article-page"
        />
        <ContentCard
          judul="UI/UX"
          kategori="Teknologi"
          gambar="UI/UX"
          link="/dashboard-user/home-page/article-page"
        />
        <ContentCard
          judul="UI/UX"
          kategori="Teknologi"
          gambar="UI/UX"
          link="/dashboard-user/home-page/article-page"
        />
        <ContentCard
          judul="UI/UX"
          kategori="Teknologi"
          gambar="UI/UX"
          link="/dashboard-user/home-page/article-page"
        />
      </div>
    </div>
  );
};

export default ResultPage;
