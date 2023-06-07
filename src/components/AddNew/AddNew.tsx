import { type AxiosError } from "axios";
import React, { useRef, useState } from "react";
import { useClickAway } from "react-use";

import ButtonContainer from "./ButtonContainer";
import InputContainer from "./InputContainer";

import "./AddNew.scss";

interface AddNewProps {
  cancelHandler: () => void;

  addHandler: (payload: Payload) => Promise<void>;
}

const AddNew: React.FC<AddNewProps> = ({ cancelHandler, addHandler }) => {
  const [fullname, setFullName] = useState("");
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const ref = useRef(null);

  useClickAway(ref, cancelHandler);

  const fullNameHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setFullName(e.target.value);
  };

  const userNameHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setUserName(e.target.value);
  };

  const emailHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setEmail(e.target.value);
  };

  const phoneHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setPhone(e.target.value);
  };

  const addButtonHandler = async (): Promise<void> => {
    try {
      const payload = {
        name: fullname,
        username,
        email,
        phone
      };

      const values =
        fullname.length > 0 &&
        username.length > 0 &&
        phone.length > 0 &&
        email.length > 0;

      if (values) {
        await addHandler(payload);
      } else {
        alert("Fill all fields");
      }
    } catch (error) {
      const err = error as AxiosError;

      console.log(err.message);
    }
  };

  return (
    <div className="overlay">
      <div ref={ref} className="addnew">
        <div className="row">
          <InputContainer
            id="fullName"
            label="Give full Name"
            placeholder="Full Name"
            onChange={fullNameHandler}
            value={fullname}
          />
          <InputContainer
            id="userName"
            label="User Name"
            placeholder="User Name"
            onChange={userNameHandler}
            value={username}
          />
        </div>
        <div className="row">
          <InputContainer
            id="email"
            label="Email"
            placeholder="Email"
            onChange={emailHandler}
            value={email}
            type="email"
          />
          <InputContainer
            id="phone"
            label="Phone"
            placeholder="Phone"
            onChange={phoneHandler}
            value={phone}
            type="number"
          />
        </div>
        <ButtonContainer
          cancelHandler={cancelHandler}
          addHandler={addButtonHandler}
        />
      </div>
    </div>
  );
};

export default AddNew;
