import { type } from "os";
import React from "react";
import "./Button.css";

export interface ButtonProps {
  children: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  type?: "primary" | "secondary" | "danger" | "warning" | "info" | "success";
  size?: "sm" | "md" | `lg`;
}

const Button: React.FC<ButtonProps> = (props) => {
  const size = props.size || "md";
  const type = props.type || "primary";
  return (
    <button className={`btn btn--size-${size} btn--type-${type}`}>
      {props.children}
    </button>
  );
};

export default Button;
