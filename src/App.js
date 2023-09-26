import "./App.css";
import Login from "./auth/login/Login";
import Footer from "./layout/footer";
import Header from "./layout/header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./auth/signup/Signup";
import ForgotPassword from "./auth/ForgotPassword/ForgotPassword";

import { RouterProvider } from "react-router-dom";
import {router} from './router'


function App() {
  return (
    <div>

<RouterProvider router={router} />
      
    </div>
  );
}

export default App;
