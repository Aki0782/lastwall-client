import React from "react";

import Button from "../Button/Button";

import "./InforBar.scss";

interface InfoBarProps {
  total: number;
  onClick: () => void;
}

const InfoBar: React.FC<InfoBarProps> = ({ total, onClick }) => {
  return (
    <div className="infobar">
      <div className="infobar__total">
        <span>All ({total})</span>
      </div>
      <Button onClick={onClick} label="Add New" />
    </div>
  );
};

export default InfoBar;
