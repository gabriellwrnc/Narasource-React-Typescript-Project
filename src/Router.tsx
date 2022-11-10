import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Auth, DashboardUser } from "./layouts";
import { ActivityPage, HomePage, Login, Register } from "./screens";

const Router: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const preloader = document.getElementById("preloader");
  if (preloader) {
    setTimeout(() => {
      preloader.style.display = "none";
      setLoading(false);
    }, 2000);
  }

  return loading == false ? (
    <BrowserRouter>
      <Routes>
        <Route path="/auth" element={<Auth />}>
          <Route path="/auth/login" element={<Login />}></Route>
          <Route path="/auth/register" element={<Register />}></Route>
          <Route path="/auth/forgotPassword" element={<Login />}></Route>
        </Route>

        <Route path="/dashboard-user" element={<DashboardUser />}>
          <Route
            path="/dashboard-user/home-page"
            element={<HomePage />}
          ></Route>
          <Route
            path="/dashboard-user/activity-page"
            element={<ActivityPage />}
          ></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  ) : (
    <></>
  );
};

export default Router;
