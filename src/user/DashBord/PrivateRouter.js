import React, { useState } from "react";
import { Navigate, Outlet } from "react-router-dom";

 import Header from "../layout/Header";
 import Footer from "../layout/Footer";
 import Sidebar from "../layout/Siderbar";

const PrivateRouteUser = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

   let userInfo = localStorage.getItem('userInfo'); 
   
   console.log("userInfo",userInfo)
  // let user = localStorage.getItem("userInfo");
  // user = JSON.parse(user)
   userInfo = (userInfo);
  
  // console.log("user role", user)

   if (userInfo[0]?.userType === 5) { 
     return <Navigate to="/UserLogin" />
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

export default PrivateRouteUser;