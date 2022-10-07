import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Auth } from "./layouts";
import { Login } from "./screens/Auth";
import Register from "./screens/Auth/Register/Register";

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/auth" element={<Auth />}>
          <Route path="/auth/login" element={<Login />}></Route>
          <Route path="/auth/register" element={<Register />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
