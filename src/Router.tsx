import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Admin, Auth } from "./layouts";
import { Home, Login, Register } from "./screens";

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

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
