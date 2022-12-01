import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Auth, DashboardUser, ProfileUser } from "./layouts";
import {
  ActivityPage,
  AkunSaya,
  ArticlePage,
  EditProfile,
  GantiSandi,
  HomePage,
  Login,
  MencariNarasumberPage1,
  MencariNarasumberPage2,
  MencariNarasumberPage3,
  MencariNarasumberPage4,
  MencariNarasumberPage5,
  MenjadiNarasumber,
  MenungguPembayaran,
  Register,
  ResultPage,
} from "./screens";

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
            path="/dashboard-user/home-page/result-page"
            element={<ResultPage />}
          ></Route>
          <Route
            path="/dashboard-user/home-page/article-page"
            element={<ArticlePage />}
          ></Route>
          <Route
            path="/dashboard-user/activity-page"
            element={<ActivityPage />}
          ></Route>
          <Route
            path="/dashboard-user/mencari-narasumber/1"
            element={<MencariNarasumberPage1 />}
          ></Route>
          <Route
            path="/dashboard-user/mencari-narasumber/2"
            element={<MencariNarasumberPage2 />}
          ></Route>
          <Route
            path="/dashboard-user/mencari-narasumber/3"
            element={<MencariNarasumberPage3 />}
          ></Route>
          <Route
            path="/dashboard-user/mencari-narasumber/4"
            element={<MencariNarasumberPage4 />}
          ></Route>
          <Route
            path="/dashboard-user/mencari-narasumber/4/wait"
            element={<MenungguPembayaran />}
          ></Route>
          <Route
            path="/dashboard-user/mencari-narasumber/5"
            element={<MencariNarasumberPage5 />}
          ></Route>
          <Route path="/dashboard-user/profil-user" element={<ProfileUser />}>
            <Route
              path="/dashboard-user/profil-user/akun"
              element={<AkunSaya />}
            ></Route>
            <Route
              path="/dashboard-user/profil-user/edit"
              element={<EditProfile />}
            ></Route>
            <Route
              path="/dashboard-user/profil-user/reset"
              element={<GantiSandi />}
            ></Route>
            <Route
              path="/dashboard-user/profil-user/menjadi-narasumber"
              element={<MenjadiNarasumber />}
            ></Route>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  ) : (
    <></>
  );
};

export default Router;
