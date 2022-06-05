import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layouts from "../components/layouts/Layouts";
import Favourites from "../pages/Favourites";
import Home from "../pages/Home";

const MyRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route element={<Layouts />}>
          <Route path="/" exact element={<Home />} />
          <Route path="/favourites" exact element={<Favourites />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default MyRoutes;
