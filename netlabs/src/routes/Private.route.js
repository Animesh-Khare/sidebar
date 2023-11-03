import { Outlet, Navigate } from "react-router-dom";

import MainLayout from "../layout/MainLayout";

const PrivateRoutes = () => {
  const token = true;

  const isSignedIn = !!token;
  return isSignedIn ? (
    <>
      <MainLayout />
      <Outlet />
    </>
  ) : (
    <Navigate to="/login" replace />
  );
};

export default PrivateRoutes;
