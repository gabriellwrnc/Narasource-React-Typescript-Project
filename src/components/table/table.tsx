import React from "react";
import "./table.css";

export interface TableColumn<T = any> {
  title: string;
  dataIndex: keyof T;
  render?: (data: T) => void;
}

interface TableProps {
  data: any[];
  columns: TableColumn[];
}

const Table: React.FC<TableProps> = (props) => {
  return (
    <div className="table-component-wrapper">
      <table className="table-component">
        <thead className="table-head">
          <tr className="tr-table-head">
            {props.columns.map((column) => {
              return <td className="td-table-head">{column.title}</td>;
            })}
          </tr>
        </thead>
        <tbody>
          {props.data.map((d) => {
            return (
              <tr className="tr-table-body">
                {props.columns.map((column) => {
                  let renderedContent = d[column.dataIndex];
                  if (column.render) {
                    renderedContent = column.render(d);
                  }
                  return (
                    <td className="td-table-body">
                      <p>{renderedContent}</p>
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
