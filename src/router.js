import React from "react";
import { createBrowserRouter } from "react-router-dom";
import ForgotPassword from "./auth/ForgotPassword/ForgotPassword";
import Login from "./auth/login/Login";
import Calendar from "./layout/Calendar";
import PrivateRoute from "./layout/Dashbord/PrivateRoute";
import Editer from "./layout/Editor";
import FormLayout from "./layout/FormLayout";
import ECommerce from "./layout/Page/ECommerce";
import Inbox from "./layout/Page/Inbox";
import Profile from "./layout/Page/Profile";
import Settings from "./layout/Page/Settings";
import PageNotFound from "./PageNotFound";
import PrivateRouteUser from "./user/DashBord/PrivateRouter";
import Tables from "./layout/Page/Table";
import ToDOList from "./layout/Component/ToDOList";
import UserLogin from "./user/Auth/UserLogin";
import AddProject from "./user/layout/AddProject";


export const userAuth = JSON.parse(localStorage.getItem("userInfo"));



export const router = createBrowserRouter([
  {
    path: "/admin",
    element: <PrivateRoute />,
    exact: true,
    children: [
     

      {
        path: "ecom",
        element: <ECommerce />,
        exact: true,
      },

      {
        path: "profile",
        element: <Profile />,
        exact: true,
      },
      {
        path: "settings",
        element: <Settings />,
        exact: true,
      },

      {
        path: "Calendar",
        element: <Calendar />,
        exact: true,
      },
     


      {
        path :"editer",
        element:<Editer/>,
        exact: true
      },

      {
        path :"inbox",
        element:<Inbox/>,
        exact: true
      },

      {
        path :"table",
        element:<Tables/>,
        exact: true
      },
      {
        path :"todolist",
        element:<ToDOList/>,
        exact: true
      },
     

],
},




{
  path: "/adminDashbord",
  element: <PrivateRouteUser />,
  exact: true,
  children: [
    {
      path: "form-layout",
      element: <FormLayout />,
      exact: true,
    },

    {
      path:"addProduct",
      element:<AddProject/>,
      exact: true

    }

],
},









{
  path: "/UserLogin",
  element: <UserLogin />,
  exact: true,
},

  
  {
    path: "/",
    element: <Login />,
    exact: true,
  },
  {
    path: "/ForgotPassword",
    element: <ForgotPassword />,
    exact: true,
  },

  {
    path: "*",
    element: <PageNotFound />,
    exact: true,
  },
]);
