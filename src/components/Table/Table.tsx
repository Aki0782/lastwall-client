import React from "react";

import TableHeader from "./TableHeader";
import TableRows from "./TableRows";

import "./Table.scss";

interface TableProps {
  data: UserList[];
}

const Table: React.FC<TableProps> = ({ data }) => {
  const headers = Object.keys(data[0]);
  const header = headers.slice(1, headers.length - 1);

  return (
    <div className="table">
      <div className="tableHeader">
        <TableHeader headers={header} />
        {data.map((user: UserList) => (
          <TableRows data={user} key={user.id} />
        ))}
      </div>
    </div>
  );
};

export default Table;
