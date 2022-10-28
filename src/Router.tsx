import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Auth } from "./layouts";
import { ForgotPassword, Login, Register } from "./screens/Auth";

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/auth" element={<Auth />}>
          <Route path="/auth/login" element={<Login />}></Route>
          <Route path="/auth/register" element={<Register />}></Route>
          <Route path="/auth/forgotPassword" element={<Login />}></Route>
        </Route>

        <Route path="/dashboard" element={<h1>Dashboard</h1>}>
          <Route
            path="/dashboard/home-page"
            element={<h1>Home Page</h1>}
          ></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
