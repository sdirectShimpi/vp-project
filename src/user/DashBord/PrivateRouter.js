import React from "react";
import { Navigate, Outlet } from "react-router-dom";

import Header from "../layout/Header";
import Footer from "../layout/Footer";
import Sidebar from "../layout/Siderbar";

const PrivateRouteUser = () => {
  const islogin = localStorage.getItem("islogin");
  if (!islogin) {
    return <Navigate to="/login"/>;
  }

  return (
    <>
       <Sidebar /> 

      <Header />

      <Outlet />
      <Footer />

    </>
  );
};

export default PrivateRouteUser;
