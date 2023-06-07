import { type AxiosResponse, type AxiosError } from "axios";
import { useEffect, useState } from "react";
import MoonLoader from "react-spinners/MoonLoader";

import API from "./API";
import constructors from "./API/constructors";
import AddNew from "./components/AddNew/AddNew";
import Header from "./components/Header/Header";
import InfoBar from "./components/InfoBar/InfoBar";
import Table from "./components/Table/Table";

import "./App.scss";

const App: React.FC = () => {
  const [userList, setUserList] = useState<UserList[] | null>(null);
  const [addNew, setAddNew] = useState(false);

  const addNewHandler = (): void => {
    setAddNew(true);
  };

  const searchHandler = async (name: string): Promise<void> => {
    try {
      if (name.length !== 0) {
        const request = constructors.searchUser(name);

        const response: AxiosResponse<UserList[]> = await API.performRequest(
          request
        );

        const { data } = response;

        if (data.length > 0) {
          setUserList(data);
        } else {
          alert("No User Found");
        }
      } else {
        await getUsers();
      }
    } catch (error) {
      const err = error as AxiosError;

      console.log(err.message);
    }
  };

  const addHandler = async (payload: Payload): Promise<void> => {
    try {
      const data: payloadData = {
        ...payload,
        username: payload.username,
        name: payload.name,
        id: userList != null ? userList?.length + 1 : 0
      };

      const request = constructors.addNewUser(data);

      const response: AxiosResponse<UserList> = await API.performRequest(
        request
      );

      const { data: res } = response;

      if (res) {
        await getUsers();
        setAddNew(false);
      }
    } catch (error) {
      const err = error as AxiosError;

      alert(err.message);
      console.log(err);
    }
  };

  const cancelHandler = (): void => {
    setAddNew(false);
  };

  const getUsers = async (): Promise<void> => {
    try {
      const request = constructors.getUsersList();

      const response: AxiosResponse<UserList[]> = await API.performRequest(
        request
      );

      const { data } = response;

      setUserList(data);
    } catch (error) {
      const err = error as AxiosError;
      const errs = JSON.stringify(err, null, 2);

      console.log(errs);
      console.log(err.message);
    }
  };

  useEffect(() => {
    void getUsers();
  }, []);

  return (
    <div className="app">
      <Header searchHandler={searchHandler} />
      {addNew ? (
        <AddNew addHandler={addHandler} cancelHandler={cancelHandler} />
      ) : null}
      {userList != null ? (
        <>
          <InfoBar onClick={addNewHandler} total={userList.length} />
          <Table data={userList} />
        </>
      ) : (
        <div className="spinner">
          <MoonLoader />
        </div>
      )}
    </div>
  );
};

export default App;
