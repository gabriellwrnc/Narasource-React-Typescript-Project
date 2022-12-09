import React from "react";
import { useQuery } from "react-query";
import {
  delete_action_admin,
  edit_action_admin,
  search_bar_admin,
} from "../../../assets";
import { Table } from "../../../components";
import { TableColumn } from "../../../components/table/table";
import { getUser } from "../../../services/user";
import { AdminUser, User } from "../../../types/User";
import "./DataUser.css";

const DataUser: React.FC = () => {
  const dataUser = useQuery("dataUser", getUser);
  const dataUserTable = dataUser.data?.data || [];
  const dataUserColumn: TableColumn<AdminUser>[] = [
    {
      title: "No",
      dataIndex: "id",
    },
    {
      title: "Name",
      dataIndex: "name",
    },
    {
      title: "Username",
      dataIndex: "username",
    },
    {
      title: "Email",
      dataIndex: "email",
    },
    {
      title: "Action",
      dataIndex: "website",
      render: (data) => {
        return (
          <div className="action-btn">
            <div className="action-btn-box">
              <img src={edit_action_admin} alt="edit action" />
            </div>
            <div className="action-btn-box">
              <img src={delete_action_admin} alt="edit action" />
            </div>
          </div>
        );
      },
    },
  ];
  return (
    <div className="data-user-wrapper">
      <span className="data-user-title">Data User</span>
      <div className="data-user-search-bar">
        <span className="data-user-pengaturan">Pengaturan Data User</span>
        <div className="data-user-search-bar-table">
          <input type="text" id="search-bar" className="search-bar-admin" />
          <label htmlFor="search-bar">
            <img
              src={search_bar_admin}
              alt="Search Bar Admin"
              className="searchbar-icon"
            />
          </label>
        </div>
      </div>
      <div className="data-user-table">
        <Table data={dataUserTable} columns={dataUserColumn} />
      </div>
    </div>
  );
};

export default DataUser;
