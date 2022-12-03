import React from "react";
import { brand } from "../../../../../assets";
import "./Tentang.css";

const Tentang: React.FC = () => {
  return (
    <div className="tentang-wrapper">
      <img src={brand} alt="logo brand" />
    </div>
  );
};

export default Tentang;
