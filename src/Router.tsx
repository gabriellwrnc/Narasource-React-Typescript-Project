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
      <Route path="/" element={<h1>Test</h1>}>
        <Route index element={<h1>Home</h1>} />
        <Route path="teams" element={<h1>Team</h1>}>
          <Route path=":teamId" element={<h1>Team ID</h1>} />
          <Route path="new" element={<h1>New</h1>} />
          <Route index element={<h1>League</h1>} />
        </Route>
      </Route>
    </Routes>
  </BrowserRouter>
  );
}

export default Router
