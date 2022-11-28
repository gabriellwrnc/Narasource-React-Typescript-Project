import React from "react";
import "./AuthButton.css";

export interface AuthButtonProps {
  children: React.ReactNode;
  onSubmit?: React.FormEventHandler<HTMLButtonElement>;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean | undefined;
  type?: "submit" | "reset" | "button";
  color?: "primary" | "secondary" | "transparent" | "disable";
  size?: "sm" | "md";
}

const AuthButton: React.FC<AuthButtonProps> = (props) => {
  const size = props.size || "md";
  const color = props.color || "primary";

  return (
    <div>
      <button
        type={props.type}
        onClick={props.onClick}
        className={`btn btn--size-${size} btn--type-${color}`}
        disabled={props.disabled}
      >
        {props.children}
      </button>
    </div>
  );
};

export default AuthButton;
