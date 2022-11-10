import React, { ComponentType } from "react";
import "./CircledButton.css";

export interface CircledButtonProps {
  children?: React.ReactNode;
}

const CircledButton: React.FC<CircledButtonProps> = (props) => {
  const children = props.children;

  return (
    <div>
      <div className="circled-btn">{children}</div>
    </div>
  );
};

export default CircledButton;
