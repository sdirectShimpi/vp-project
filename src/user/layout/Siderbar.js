import React, { useEffect, useRef, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
// import Logo from '../images/logo/logo.svg';
import SidebarLinkGroup from "../../layout/SidebarLinkGroup";
//import SidebarLinkGroup from "./SidebarLinkGroup";
//import sdmlogo from "../assets/img/logo.svg";
import sdmlogo from "../../assets/img/logo.svg"
// interface SidebarProps {
//   sidebarOpen: boolean;
//   setSidebarOpen: (arg: boolean) => void;
// }

const Sidebar = ({ sidebarOpen, setSidebarOpen }) => {
  const location = useLocation();
  const { pathname } = location;

  const trigger = useRef(null);
  const sidebar = useRef(null);

  const storedSidebarExpanded = localStorage.getItem("sidebar-expanded");
  const [sidebarExpanded, setSidebarExpanded] = useState(
    storedSidebarExpanded === null ? false : storedSidebarExpanded === "true"
  );

  useEffect(() => {
    localStorage.setItem("sidebar-expanded", sidebarExpanded.toString());
    if (sidebarExpanded) {
      document.querySelector("body")?.classList.add("sidebar-expanded");
    } else {
      document.querySelector("body")?.classList.remove("sidebar-expanded");
    }
  }, [sidebarExpanded]);

  return (
    <aside
      ref={sidebar}
      className={`absolute left-0 top-0 z-9999 flex h-screen w-72.5 flex-col overflow-y-hidden bg-white duration-300 ease-linear dark:bg-boxdark lg:static lg:translate-x-0 ${
        sidebarOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <div className="flex items-center justify-between gap-2 px-6 py-5.5 lg:py-6.5">
        <img
          src={sdmlogo}
          style={{ width: "1000px", height: "50px" }}
          alt="lago"
        />

        <button
          ref={trigger}
          onClick={() => setSidebarOpen(!sidebarOpen)}
          aria-controls="sidebar"
          aria-expanded={sidebarOpen}
          className="block lg:hidden"
        >
          <svg
            className="fill-current"
            width="20"
            height="18"
            viewBox="0 0 20 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19 8.175H2.98748L9.36248 1.6875C9.69998 1.35 9.69998 0.825 9.36248 0.4875C9.02498 0.15 8.49998 0.15 8.16248 0.4875L0.399976 8.3625C0.0624756 8.7 0.0624756 9.225 0.399976 9.5625L8.16248 17.4375C8.31248 17.5875 8.53748 17.7 8.76248 17.7C8.98748 17.7 9.17498 17.625 9.36248 17.475C9.69998 17.1375 9.69998 16.6125 9.36248 16.275L3.02498 9.8625H19C19.45 9.8625 19.825 9.4875 19.825 9.0375C19.825 8.55 19.45 8.175 19 8.175Z"
              fill=""
            />
          </svg>
        </button>
      </div>

      <div className="no-scrollbar flex flex-col overflow-y-auto duration-300 ease-linear">
        <nav className="mt-5 py-4 px-4 lg:mt-9 lg:px-6">
          <div>
            <ul className="mb-6 flex flex-col gap-1.5">
              <SidebarLinkGroup
                activeCondition={
                  pathname === "/" || pathname.includes("dashboard")
                }
              >
                {(handleClick, open) => {
                  return (
                    <React.Fragment>
                   






                      
                    </React.Fragment>
                  );
                }}
              </SidebarLinkGroup>

              <li>
                <NavLink
                  to="/adminDashbord/form-layout"
                  className={`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-black duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${
                    pathname.includes("profile") && "bg-graydark dark:bg-meta-4"
                  }`}
                >
                  <svg
                    class="fill-current"
                    width="18"
                    height="19"
                    viewBox="0 0 18 19"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16.8749 7.44902C16.5374 7.44902 16.228 7.73027 16.228 8.0959V13.3834C16.228 14.4803 15.4124 15.3521 14.3999 15.3521H3.5999C2.55928 15.3521 1.77178 14.4803 1.77178 13.3834V8.06777C1.77178 7.73027 1.49053 7.4209 1.1249 7.4209C0.759277 7.4209 0.478027 7.70215 0.478027 8.06777V13.3553C0.478027 15.1271 1.85615 16.5896 3.57178 16.5896H14.3999C16.1155 16.5896 17.4937 15.1553 17.4937 13.3553V8.06777C17.5218 7.73027 17.2124 7.44902 16.8749 7.44902Z"
                      fill=""
                    ></path>
                    <path
                      d="M8.5498 11.6396C8.6623 11.7521 8.83105 11.8365 8.9998 11.8365C9.16855 11.8365 9.30918 11.7803 9.4498 11.6396L12.8811 8.23652C13.1342 7.9834 13.1342 7.58965 12.8811 7.33652C12.6279 7.0834 12.2342 7.0834 11.9811 7.33652L9.64668 9.64277V2.16152C9.64668 1.82402 9.36543 1.51465 8.9998 1.51465C8.6623 1.51465 8.35293 1.7959 8.35293 2.16152V9.69902L6.01855 7.36465C5.76543 7.11152 5.37168 7.11152 5.11855 7.36465C4.86543 7.61777 4.86543 8.01152 5.11855 8.26465L8.5498 11.6396Z"
                      fill=""
                    ></path>
                  </svg>
                  Add User
                </NavLink>
              </li>

             
              



              <li>
                <NavLink
                  to="/adminDashbord/addProduct"
                  className={`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-black duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${
                    pathname.includes("profile") && "bg-graydark dark:bg-meta-4"
                  }`}
                >
                  <svg
                    class="fill-current"
                    width="18"
                    height="19"
                    viewBox="0 0 18 19"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16.8749 7.44902C16.5374 7.44902 16.228 7.73027 16.228 8.0959V13.3834C16.228 14.4803 15.4124 15.3521 14.3999 15.3521H3.5999C2.55928 15.3521 1.77178 14.4803 1.77178 13.3834V8.06777C1.77178 7.73027 1.49053 7.4209 1.1249 7.4209C0.759277 7.4209 0.478027 7.70215 0.478027 8.06777V13.3553C0.478027 15.1271 1.85615 16.5896 3.57178 16.5896H14.3999C16.1155 16.5896 17.4937 15.1553 17.4937 13.3553V8.06777C17.5218 7.73027 17.2124 7.44902 16.8749 7.44902Z"
                      fill=""
                    ></path>
                    <path
                      d="M8.5498 11.6396C8.6623 11.7521 8.83105 11.8365 8.9998 11.8365C9.16855 11.8365 9.30918 11.7803 9.4498 11.6396L12.8811 8.23652C13.1342 7.9834 13.1342 7.58965 12.8811 7.33652C12.6279 7.0834 12.2342 7.0834 11.9811 7.33652L9.64668 9.64277V2.16152C9.64668 1.82402 9.36543 1.51465 8.9998 1.51465C8.6623 1.51465 8.35293 1.7959 8.35293 2.16152V9.69902L6.01855 7.36465C5.76543 7.11152 5.37168 7.11152 5.11855 7.36465C4.86543 7.61777 4.86543 8.01152 5.11855 8.26465L8.5498 11.6396Z"
                      fill=""
                    ></path>
                  </svg>
                Project
                </NavLink>
              </li>


             
            </ul>
          </div>
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;
