import React, { useState } from "react";
import SidebarLogo from "../../images/SidebarLogo.svg";
import DashboardIcon from "../../images/icon-dashboard.svg";
import TasksIcon from "../../images/icon-tasks.svg";
import ProjectsIcon from "../../images/icon-project.svg";
import LogoutIcon from "../../images/icon-logout.svg";
// @todo: hide spans, mx-auto icons, mx-auto container, smaller width for main container
const Sidebar = ({ isSidebarOpen, setIsSidebarOpen }) => {
  return (
    <>
      {/* backdrop  */}
      <div
        className={
          isSidebarOpen
            ? "z-30 fixed top-0 bottom-0 left-0 right-0 bg-black  opacity-30 lg:hidden "
            : "hidden"
        }
        onClick={() => setIsSidebarOpen(false)}
      ></div>
      {/* sidebar  */}
      <aside
        id="default-sidebar"
        className={
          isSidebarOpen
            ? "bg-loginFormBlue fixed top-0 left-0 h-screen w-64 z-40 flex flex-col p-2  lg:translate-x-0 lg:w-24 transition-all duration-500 "
            : "bg-loginFormBlue fixed top-0 left-0 h-screen w-64 z-40 flex flex-col p-2 -translate-x-full lg:translate-x-0 lg:w-24 transition-all duration-500 "
        }
      >
        {/* Logo Container  */}
        <div className="h-1/5">
          <div className="relative bg-white mt-2  rounded-full flex justify-center items-center w-24 h-24 lg:w-12 lg:h-12 mx-auto">
            <img src={SidebarLogo} alt="" className="w-16 h-16 lg:w-6 lg:h-6" />
          </div>
          <h2 className="text-white  text-2xl font-semibold tracking-wide ml-16 lg:hidden">
            tender
          </h2>
        </div>
        {/* icons div  */}
        <div className="h-4/5 py-12 px-4  flex flex-col justify-between lg:py-4">
          <div className="flex flex-col space-y-20 ">
            {/* dashboard  */}
            <div className="flex items-center space-x-2 group lg:mx-auto">
              <img
                src={DashboardIcon}
                alt=""
                className="w-10 opacity-50 group-hover:opacity-100"
              />
              <p className="text-white opacity-50 group-hover:opacity-100 lg:hidden">
                dashboard
              </p>
            </div>
            {/* tasks  */}
            {/* dashboard  */}
            <div className="flex items-center space-x-2 group lg:mx-auto">
              <img
                src={TasksIcon}
                alt=""
                className="w-10 opacity-50 group-hover:opacity-100"
              />
              <p className="text-white opacity-50 group-hover:opacity-100 lg:hidden">
                tasks
              </p>
            </div>
            {/* projects  */}
            <div className="flex items-center space-x-2 group lg:mx-auto">
              <img
                src={ProjectsIcon}
                alt=""
                className="w-10 opacity-50 group-hover:opacity-100"
              />
              <p className="text-white opacity-50 group-hover:opacity-100 lg:hidden">
                projects
              </p>
            </div>
          </div>
          {/* logout  */}
          <div className="flex items-center space-x-2 group">
            <img
              src={LogoutIcon}
              alt=""
              className="w-10 opacity-50 group-hover:opacity-100"
            />
            <p className="text-white opacity-50 group-hover:opacity-100 lg:hidden ">
              logout
            </p>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
