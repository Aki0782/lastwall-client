import React, { useState } from "react";
import { useDebounce } from "react-use";

import Input from "../Input/Input";

import "./Header.scss";

interface HeaderProps {
  searchHandler: (value: string) => Promise<void>;
}

const Header: React.FC<HeaderProps> = ({ searchHandler }) => {
  const [inputValue, setInputValue] = useState("");

  const inpputHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setInputValue(e.target.value);
  };

  useDebounce(
    () => {
      void searchHandler(inputValue);
    },
    500,
    [inputValue]
  );

  return (
    <div className="headerContainer">
      <div className="headerContainer__title">User List</div>
      <div className="searchContainer">
        <Input
          onChange={inpputHandler}
          value={inputValue}
          placeholder="Search by name..."
        />
      </div>
    </div>
  );
};

export default Header;
