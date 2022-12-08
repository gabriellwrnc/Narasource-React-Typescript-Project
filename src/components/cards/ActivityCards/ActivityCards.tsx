import React from "react";
import { icon_berlangsung, icon_gagal, icon_sukses } from "../../../assets";
import { AiFillClockCircle } from "react-icons/ai";
import "./ActivityCards.css";
import { Link } from "react-router-dom";

export interface ActivityCardsProps {
  kondisi: "berlangsung" | "gagal" | "sukses";
  kategori: string;
  jenis: string;
  tanggal: string;
  waktu: string;
  display: boolean;
  onClick?: void;
}

const ActivityCards: React.FC<ActivityCardsProps> = (props) => {
  var { kategori, jenis, tanggal, waktu, kondisi, display, onClick } = props;

  var image;
  var link: any;

  if (kondisi == "berlangsung") {
    image = <img src={icon_berlangsung} />;
    link = "/dashboard-user/activity-page/berlangsung";
  } else if (kondisi == "gagal") {
    image = <img src={icon_gagal} />;
    link = "/dashboard-user/activity-page/gagal";
  } else if (kondisi == "sukses") {
    image = <img src={icon_sukses} />;
    link = "/dashboard-user/activity-page/sukses";
  }

  return display ? (
    <></>
  ) : (
    <Link to={link} className="activity-link">
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
    </Link>
  );
};

export default ActivityCards;
