import React from "react";
import { arrow_right_black } from "../../../../../assets";
import "./Syarat.css";

const Syarat: React.FC = () => {
  return (
    <div className="syarat-wrapper">
      <div className="syarat-option">
        <span>User</span>
        <img src={arrow_right_black} alt="arrow black" />
      </div>
      <div className="syarat-option">
        <span>Narasumber</span>
        <img src={arrow_right_black} alt="arrow black" />
      </div>
    </div>
  );
};

export default Syarat;
