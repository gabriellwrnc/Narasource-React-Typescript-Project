import React from "react";
import { render } from "react-dom";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Admin from "./layouts/Admin/Admin";
// const App = () => {
//   return <h1>Halo React!</h1>
// }

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

        <Route path="/auth" element={<Outlet />}>
          <Route path="/auth/login" element={<h1>Auth Login</h1>} />
          <Route path="/auth/register" element={<h1>Auth Register</h1>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
