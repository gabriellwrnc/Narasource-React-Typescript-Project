import React from "react";
import "./DataNarasumber.css";
import ZoomMtgEmbedded from "@zoomus/websdk/embedded";

const DataNarasumber: React.FC = () => {
  const client = ZoomMtgEmbedded.createClient();
  return (
    <div className="data-narasumber-wrapper">
      <h1>data narasumber outlet from file</h1>
    </div>
  );
};

export default DataNarasumber;
