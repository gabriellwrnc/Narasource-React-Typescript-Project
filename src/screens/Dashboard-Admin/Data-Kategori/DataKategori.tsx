import React, { useState } from "react";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import {
  acc_narasumber,
  delete_action_admin,
  edit_action_admin,
  left_pagination,
  right_pagination,
  search_bar_admin,
} from "../../../assets";
import Table, { TableColumn } from "../../../components/table/table";
import { getUser } from "../../../services/user";
import { AdminUser } from "../../../types/User";
import ValidasiHapus from "../Data-User/ModalValidasiHapus/ValidasiHapus";
import "./DataKategori.css";

const DataKategori: React.FC = () => {
  const dataUser = useQuery("dataUser", getUser);
  const dataUserTable = dataUser.data?.data || [];
  const dataUserColumn: TableColumn<AdminUser>[] = [
    {
      title: "No",
      dataIndex: "id",
    },
    {
      title: "Bidang",
      dataIndex: "username",
      render: (data) => {
        return <span className="status-narasumber">Teknologi Informasi</span>;
      },
    },
    {
      title: "Kategori Baru",
      dataIndex: "email",
      render: (data) => {
        return <span className="status-narasumber">Cyber Security</span>;
      },
    },
    {
      title: "Action",
      dataIndex: "website",
      render: (data) => {
        return (
          <div className="action-btn">
            <div className="action-btn-box bg-white"></div>
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
      <span className="data-user-title">List Kategori</span>
      <div className="data-user-search-bar">
        <span className="data-user-pengaturan">Pengaturan List Kategori</span>
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
      <div className="edit-user-save">
        <Link to={"/dashboard-admin/data-user"} className="profile-link">
          <div className="btn-simpan-edit">Simpan</div>
        </Link>
        <Link to={"/dashboard-admin/data-user"} className="profile-link">
          <div className="btn-batal-edit">Batal</div>
        </Link>
      </div>
      {showModalHapus ? (
        <ValidasiHapus onClose={() => toggleModalHapus()} />
      ) : (
        <></>
      )}
    </div>
  );
};

export default DataKategori;
