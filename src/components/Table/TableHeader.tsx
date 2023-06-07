import React from "react";

interface TableHeaderProps {
  headers: string[];
}

const TableHeader: React.FC<TableHeaderProps> = ({ headers }) => {
  return (
    <div className="header">
      {headers.map((header: string, i: number) => {
        return (
          <div key={i} className="row">
            {`${header.charAt(0).toUpperCase()}` + `${header.slice(1)}`}
          </div>
        );
      })}
    </div>
  );
};

export default TableHeader;
