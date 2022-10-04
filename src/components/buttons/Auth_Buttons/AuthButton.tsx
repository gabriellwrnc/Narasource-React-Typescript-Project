import React from "react";
import "./AuthButton.css";

export interface AuthButtonProps {
  children: React.ReactNode;
  onSubmit?: React.FormEventHandler<HTMLButtonElement>;
  type?: "primary" | "secondary";
  size?: "sm" | "md";
}

const AuthButton: React.FC<AuthButtonProps> = (props) => {
  const size = props.size || "md";
  const type = props.type || "primary";

  return (
    <div>
      <button className={`btn btn--size-${size} btn--type-${type}`}>
        {props.children}
      </button>
    </div>
  );
};

export default AuthButton;
