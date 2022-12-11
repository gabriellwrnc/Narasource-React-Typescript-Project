import { useState, lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { DashboardAdmin, DashboardUser, ProfileUser } from "./layouts";
import {
  ActivityBerlangsung,
  ActivityGagal,
  ActivityPage,
  ActivitySukses,
  AktivitasNarasumber,
  AkunSaya,
  ArticlePage,
  DataKategori,
  DataNarasumber,
  DataPendapatan,
  DataUser,
  EditBidang,
  EditCV,
  EditNarasumber,
  EditNarsum,
  EditPorto,
  EditProfile,
  EditUser1,
  EditUser2,
  EditUser3,
  GantiSandi,
  HomePage,
  LandingPage,
  Meetings,
  MencariNarasumberPage1,
  MencariNarasumberPage2,
  MencariNarasumberPage3,
  MencariNarasumberPage4,
  MencariNarasumberPage5,
  MenjadiNarasumber,
  MenungguPembayaran,
  PrivacyPolicy,
  RatingNarasumber,
  ResultPage,
} from "./screens";

const Login = lazy(() => import("./screens/Auth/Login/Login"));
const Register = lazy(() => import("./screens/Auth/Register/Register"));
const Auth = lazy(() => import("./layouts/Auth/Auth"));

const Router: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const preloader = document.getElementById("preloader");
  if (preloader) {
    setTimeout(() => {
      preloader.style.display = "none";
      setLoading(false);
    }, 2000);
  }

  if (loading) return <></>;

  return (
    <BrowserRouter>
      <Suspense fallback={<h1>Loading...</h1>}>
        <Routes>
          <Route index element={<LandingPage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />}></Route>
          <Route path="/auth" element={<Auth />}>
            <Route path="/auth/login" element={<Login />}></Route>
            <Route path="/auth/register" element={<Register />}></Route>
            <Route path="/auth/forgotPassword" element={<Login />}></Route>
          </Route>
          <Route path="/meetings" element={<Meetings />}></Route>

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
              path="/dashboard-user/activity-page/berlangsung"
              element={<ActivityBerlangsung />}
            ></Route>
            <Route
              path="/dashboard-user/activity-page/gagal"
              element={<ActivityGagal />}
            ></Route>
            <Route
              path="/dashboard-user/activity-page/sukses"
              element={<ActivitySukses />}
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
                path="/dashboard-user/profil-user/profile-narasumber/aktivitas"
                element={<AktivitasNarasumber />}
              ></Route>
              <Route
                path="/dashboard-user/profil-user/profile-narasumber/rating"
                element={<RatingNarasumber />}
              ></Route>
              <Route
                path="/dashboard-user/profil-user/profile-narasumber/edit-berkas"
                element={<EditNarasumber />}
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
          <Route path="/dashboard-admin" element={<DashboardAdmin />}>
            <Route
              path="/dashboard-admin/data-user"
              element={<DataUser />}
            ></Route>
            <Route
              path="/dashboard-admin/data-user/edit-1"
              element={<EditUser1 />}
            ></Route>
            <Route
              path="/dashboard-admin/data-user/edit-2"
              element={<EditUser2 />}
            ></Route>
            <Route
              path="/dashboard-admin/data-user/edit-3"
              element={<EditUser3 />}
            ></Route>
            <Route
              path="/dashboard-admin/data-narsum/edit-1"
              element={<EditNarsum />}
            ></Route>
            <Route
              path="/dashboard-admin/data-narsum/edit-bidang"
              element={<EditBidang />}
            ></Route>
            <Route
              path="/dashboard-admin/data-narsum/edit-cv"
              element={<EditCV />}
            ></Route>
            <Route
              path="/dashboard-admin/data-narsum/edit-porto"
              element={<EditPorto />}
            ></Route>
            <Route
              path="/dashboard-admin/data-narasumber"
              element={<DataNarasumber />}
            ></Route>
            <Route
              path="/dashboard-admin/data-pendapatan"
              element={<DataPendapatan />}
            ></Route>
            <Route
              path="/dashboard-admin/data-list-kategori"
              element={<DataKategori />}
            ></Route>
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default Router;
