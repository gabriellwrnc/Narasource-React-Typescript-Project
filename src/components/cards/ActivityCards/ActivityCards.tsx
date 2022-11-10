import React from "react";
import { icon_berlangsung, icon_gagal, icon_sukses } from "../../../assets";
import { AiFillClockCircle } from "react-icons/ai";
import "./ActivityCards.css";

export interface ActivityCardsProps {
  kondisi: "berlangsung" | "gagal" | "sukses";
  kategori: string;
  jenis: string;
  tanggal: string;
  waktu: string;
}

const ActivityCards: React.FC<ActivityCardsProps> = (props) => {
  const { kategori, jenis, tanggal, waktu, kondisi } = props;
  var image;

  if (kondisi == "berlangsung") {
    image = <img src={icon_berlangsung} />;
  } else if (kondisi == "gagal") {
    image = <img src={icon_gagal} />;
  } else if (kondisi == "sukses") {
    image = <img src={icon_sukses} />;
  }

  return (
    <div>
      <div className="activity-card">
        <div className="activity-card-img">{image}</div>
        <div className="activity-card-desc">
          <div className="card-desc-kategori">
            <p>{kategori}</p>
          </div>
          <div className="card-desc-jenis">
            <p>{jenis}</p>
          </div>
          <div className="card-desc-waktu">
            <AiFillClockCircle className="icon-desc-waktu" />{" "}
            <p>
              {tanggal}, {waktu}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActivityCards;
