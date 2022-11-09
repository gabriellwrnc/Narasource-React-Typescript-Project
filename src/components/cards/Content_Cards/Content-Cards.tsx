import React from "react";
import "./Content-Card.css";
import { FiArrowRight } from "react-icons/fi";

export interface ContentCardsProps {}

const ContentCards: React.FC<ContentCardsProps> = (props) => {
  return (
    <div>
      <div className="content-box">
        <div className="box-content">
          <div className="content-box-title">
            <p>UI/UX Designer</p>
          </div>
          <div className="content-box-kategori">
            <p>Teknologi</p>
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
