import React, { useState } from "react";
import { Navigate, Outlet } from "react-router-dom";

import Header from "../header";
import Footer from "../footer";
import Sidebar from "../Sidebar";

const PrivateRoute = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const islogin = localStorage.getItem("islogin");
  if (!islogin) {
    return <Navigate to="/"/>;
  }

  return (
    <div className="dark:bg-boxdark-2 dark:text-bodydark">
       <div className="flex h-screen overflow-hidden">
       <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
       <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
       <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
       <main>
            <div className="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10">
              <Outlet />
            </div>
          </main>
          </div>
       </div>
    </div>
  );
};

export default PrivateRoute;
