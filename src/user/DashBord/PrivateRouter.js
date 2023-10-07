import React, { useState } from "react";
import { Navigate, Outlet } from "react-router-dom";

 import Header from "../layout/Header";
 import Footer from "../layout/Footer";
 import Sidebar from "../layout/Siderbar";

const PrivateRouteUser = () => {


  // let userInfo = localStorage.getItem('userInfo'); 
  // let user = localStorage.getItem("userInfo");
  // user = JSON.parse(user)
  // userInfo = JSON.parse(userInfo);
  
  // console.log("user role", user)

  // if (userInfo?.!== 2) { 
  //   return <Navigate to="/User-Login" />
  // }


  const [sidebarOpen, setSidebarOpen] = useState(false);
  

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

export default PrivateRouteUser;