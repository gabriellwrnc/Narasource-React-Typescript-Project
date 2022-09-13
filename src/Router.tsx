import React from "react";
import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
// const App = () => {
//   return <h1>Halo React!</h1>
// }

function Router() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<h1>Home</h1>}/>
      <Route path="/teams" element={<h1>Teams</h1>}/>
      <Route path="/team/:teamId" element={<h1>Teams Detail</h1>}/>

    </Routes>
  </BrowserRouter>
  );
}

export default Router
