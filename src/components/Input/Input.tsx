import React from "react";

import "./Input.scss";

interface InputProps {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  value: string;
  className?: string;
  id?: string;
  type?: string;
}

const Input: React.FC<InputProps> = ({
  placeholder,
  onChange,
  value,
  className,
  id,
  type = "text"
}) => {
  return (
    <input
      id={id}
      className={`search ${className ?? ""}`}
      onChange={onChange}
      placeholder={placeholder}
      value={value}
      type={type}
    />
  );
};

export default Input;
