import React from "react";
import "./PWDRequisite.css";

interface PWDRequisiteProps {
  capsLetterFlag: string;
  numberFlag: string;
  pwdLengthFlag: string;
  specialCharFlag: string;
}

const PWDResquisite: React.FC<PWDRequisiteProps> = (props) => {
  const { capsLetterFlag, numberFlag, pwdLengthFlag, specialCharFlag } = props;
  return (
    <div className="PWDRes">
      <p className={capsLetterFlag}>Must contain a capital letter</p>
      <p className={numberFlag}>Must contain a number</p>
      <p className={pwdLengthFlag}>Must be 8 char long </p>
      <p className={specialCharFlag}>Must contain a special char </p>
    </div>
  );
};

export default PWDResquisite;
