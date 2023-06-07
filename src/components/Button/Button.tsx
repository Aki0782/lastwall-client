import React from "react";

import "./Button.scss";

interface ButtonPropsI {
  label: string;
  onClick: () => void;
  className?: string;
}

const Button: React.FC<ButtonPropsI> = ({ label, onClick, className }) => {
  const classname = className ?? "";

  return (
    <div className={`button ${classname}`} onClick={onClick}>
      {label}
    </div>
  );
};

export default Button;
