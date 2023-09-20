import "./App.css";
import Login from "./auth/login/Login";
import Footer from "./layout/footer";
import Header from "./layout/header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./auth/signup/Signup";
import ForgotPassword from "./auth/ForgotPassword/ForgotPassword";
import PrivatetRoutes from "./PrivatreRoute";


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PrivatetRoutes />}>
            <Route index path="" element={<Header />} />
            <Route path="/Footer" element={<Footer />} />
          </Route>
          <Route path="/Login" element={<Login />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/forgotPassword" element={<ForgotPassword />} />
        
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
