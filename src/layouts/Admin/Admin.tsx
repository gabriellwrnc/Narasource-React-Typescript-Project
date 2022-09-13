import React from "react";
import { Link, Outlet } from "react-router-dom";
import "./Admin.css";

const Admin: React.FC = () => {
  return (
    <div className="admin-layout">
      <div className="admin-layout--sidebar">
        <h1>Admin Panel</h1>
        <ul>
          <li>
            <Link to="/admin/dashboard">Dashboard</Link>
          </li>
          <li>
            <Link to="/admin/change-password">Change Password</Link>
          </li>
        </ul>
      </div>
      <div className="admin-layout--content">
        <Outlet />
      </div>
    </div>
  );
};

export default Admin;
