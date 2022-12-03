import React from "react";
import { arrow_right_black } from "../../../../../assets";
import "./Petunjuk.css";

const Petunjuk: React.FC = () => {
  return (
    <div className="petunjuk-wrapper">
      <div className="petunjuk-option">
        <span>Mencari Narasumber</span>
        <img src={arrow_right_black} alt="arrow black" />
      </div>
      <div className="petunjuk-option">
        <span>Menjadi Narasumber</span>
        <img src={arrow_right_black} alt="arrow black" />
      </div>
    </div>
  );
};

export default Petunjuk;
