import React, { useState } from "react";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import {
  delete_action_admin,
  edit_action_admin,
  left_pagination,
  right_pagination,
  search_bar_admin,
} from "../../../assets";
import { Table } from "../../../components";
import { TableColumn } from "../../../components/table/table";
import { getUser } from "../../../services/user";
import { AdminUser, User } from "../../../types/User";
import "./DataUser.css";
import ValidasiHapus from "./ModalValidasiHapus/ValidasiHapus";

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
            <Link to={"/dashboard-admin/data-user/edit-1"}>
              <div className="action-btn-box">
                <img src={edit_action_admin} alt="edit action" />
              </div>
            </Link>
            <div className="action-btn-box" onClick={() => toggleModalHapus()}>
              <img src={delete_action_admin} alt="edit action" />
            </div>
          </div>
        );
      },
    },
  ];
  const [showModalHapus, setShowModalHapus] = useState<boolean>(false);

  const toggleModalHapus = () => {
    setShowModalHapus((prevState) => !prevState);
  };
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
      <div className="footer-admin">
        <div className="data-user-pagination">
          <div className="arrow-left-pagination">
            <img src={left_pagination} alt="arrow left" />
          </div>
          <div className="dropdown-pagination">
            <select name="numbers" id="numbers" className="select-pagination">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
          </div>
          <div className="arrow-right-pagination">
            <img src={right_pagination} alt="arrow right" />
          </div>
        </div>
      </div>
      {showModalHapus ? (
        <ValidasiHapus onClose={() => toggleModalHapus()} />
      ) : (
        <></>
      )}
    </div>
  );
};

export default DataUser;
