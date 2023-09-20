import { Navigate, Outlet } from "react-router-dom";
// import Navbar from '../Common/Navbar'
import Footer from "./layout/footer";
import Header from "./layout/header";

function PrivatetRoutes() {
  const islogin = localStorage.getItem("islogin");
  if (!islogin) {
    return <Navigate to="/Login"></Navigate>;
  }

  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default PrivatetRoutes;
