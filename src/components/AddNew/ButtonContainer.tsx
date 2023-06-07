import React from "react";

import Button from "../Button/Button";

interface ButtonContainerProps {
  addHandler: () => Promise<void>;
  cancelHandler: () => void;
}

const ButtonContainer: React.FC<ButtonContainerProps> = ({
  cancelHandler,
  addHandler
}) => {
  return (
    <div className="buttonContainer">
      <Button
        className="cancel button"
        label="Cancel"
        onClick={cancelHandler}
      />
      <Button
        className="button"
        label="Add"
        onClick={() => {
          void addHandler();
        }}
      />
    </div>
  );
};

export default ButtonContainer;
