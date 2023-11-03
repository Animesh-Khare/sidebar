import * as React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Box from "@mui/material/Box";
import Login from "../pages/login/Login";
import Home from "../pages/home/Home";
import NotFound from "../pages/notfound/NotFound";
import PrivateRoutes from "./Private.route";
import Private from "../pages/private/Private";
import Registration from "../pages/registration/Registration";
import Reports from "../pages/reports/Reports";

const Loading = () => <p>Loading ...</p>;

const MainRoutes = () => {
  return (
    <React.Suspense fallback={<Loading />}>
      <BrowserRouter>
        <Box sx={{ display: "flex" }}>
          <Routes>
            <Route element={<PrivateRoutes />}>
              <Route element={<Home />} path="/home" />
              <Route element={<Registration />} path="/registration" />
              <Route element={<Reports />} path="/reports" />
              <Route element={<Private />} path="/private" />
            </Route>
            <Route element={<Login />} path="/login" />
            <Route element={<NotFound />} path="*" />
          </Routes>
        </Box>
      </BrowserRouter>
    </React.Suspense>
  );
};

export default MainRoutes;
