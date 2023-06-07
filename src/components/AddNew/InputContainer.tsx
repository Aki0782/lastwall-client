import React from "react";

import Input from "../Input/Input";

interface InputContainerProps {
  id: string;
  label: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
  placeholder: string;
  type?: string;
}

const InputContainer: React.FC<InputContainerProps> = ({
  id,
  label,
  onChange,
  value,
  placeholder,
  type
}) => {
  return (
    <div className="row-1">
      <label htmlFor={id}>{label}</label>
      <Input
        id={id}
        onChange={onChange}
        value={value}
        placeholder={placeholder}
        className="addnew-input"
        type={type}
      />
    </div>
  );
};

export default InputContainer;
