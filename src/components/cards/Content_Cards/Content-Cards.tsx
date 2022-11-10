import React from "react";
import "./Content-Card.css";
import { FiArrowRight } from "react-icons/fi";

export interface ContentCardsProps {
  judul: string;
  kategori: string;
  gambar: "mobile" | "frontend" | "backend" | "UI/UX";
}

const ContentCards: React.FC<ContentCardsProps> = (props) => {
  const { judul, kategori, gambar } = props;
  var class_img;

  if (gambar == "frontend") {
    class_img = "frontend-img";
  } else if (gambar == "mobile") {
    class_img = "mobile-img";
  } else if (gambar == "UI/UX") {
    class_img = "uiux-img";
  } else if (gambar == "backend") {
    class_img = "backend-img";
  }

  return (
    <div>
      <div className="content-box">
        <div className={class_img}></div>
        <div className="box-content">
          <div className="content-box-title">
            <p>{judul}</p>
          </div>
          <div className="content-box-kategori">
            <p>{kategori}</p>
          </div>
          <button className="content-box-detail">
            <span>Selengkapnya</span>
            <FiArrowRight className="content-box-arrow" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContentCards;
