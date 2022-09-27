import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Auth } from "./layouts";
import { Login } from "./screens/Auth";

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/auth" element={<Auth />}>
          <Route path="/auth/login" element={<Login />}></Route>
          <Route path="/auth/register" element={<h1>Register</h1>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
