import React from "react";
import { render } from "react-dom";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Admin from "./layouts/Admin/Admin";
import Auth from "./layouts/Auth/Auth";
import Login from "./screens/Auth/login/Login";
import Register from "./screens/Auth/register/Register";

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<h1>Home</h1>} />

        <Route path="/admin" element={<Admin />}>
          <Route path="/admin/dashboard" element={<h1> Dashboard</h1>} />
          <Route
            path="/admin/change-password"
            element={<h1>Change Password</h1>}
          />
        </Route>

        <Route path="/auth" element={<Auth />}>
          <Route path="/auth/login" element={<Login />} />
          <Route path="/auth/register" element={<Register />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
