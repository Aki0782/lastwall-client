import React from "react";

interface TableRowsProps {
  data: UserList;
}

const TableRows: React.FC<TableRowsProps> = ({ data }) => {
  return (
    <div className="rows">
      <div className="row">{data.id}</div>
      <div className="row">{data.name}</div>
      <div className="row">{data.username}</div>
      <div className="row">{data.email.toLowerCase()}</div>
      <div className="row">{data.phone}</div>
    </div>
  );
};

export default TableRows;
