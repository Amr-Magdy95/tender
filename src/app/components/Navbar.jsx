import UserStatus from "../../images/icon-userAvailable.svg";
import UserProfile from "../../images/userProfile.png";
import Alarm from "../../images/icon-alarm.svg";
import CogWheel from "../../images/icon-cogwheel.svg";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

const Navbar = ({ setIsSidebarOpen }) => {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <nav className="shadow-xl p-4 z-40">
      {/* nav container  */}
      <div className="max-w-6xl mx-auto  flex flex-row justify-between">
        {/* sidebar hamburger and location  */}
        <div className="flex flex-row space-x-3 items-center">
          {/* sidebar hamburger  */}
          <button
            className="sidebar-hamburger "
            onClick={() => setIsSidebarOpen(true)}
          >
            <span className="sidebar-top"></span>
            <span className="sidebar-middle"></span>
            <span className="sidebar-bottom"></span>
          </button>
          <h2 className="text-xl font-bold text-titleTextBlue tracking-wider ">
            dashboard
          </h2>
        </div>
        {/* user, notifications and settings */}
        <div className="hidden flex-row space-x-8 lg:flex">
          {/* user  */}
          <div className="flex flex-row space-x-1 items-center ">
            {/* name, status */}
            <div className="flex flex-col ">
              <h2 className="text-lg font-bold text-titleTextBlue ">
                Ali Saleh
              </h2>
              <p className="flex flex-row items-center space-x-1 self-center -mt-1">
                {" "}
                <img src={UserStatus} alt="" className="w-2" />{" "}
                <span className="text-xs font-thin text-titleTextBlue">
                  Available
                </span>
              </p>
            </div>
            {/* img  */}
            <div className="border-2 border-black rounded-full w-12 h-12 flex items-center justify-center">
              <img src={UserProfile} className="w-9" alt="" />
            </div>
          </div>
          <div className="my-auto h-3/4 w-[1px] bg-black"></div>
          {/* notifications  */}
          <div className="relative flex items-center justify-center">
            <img src={Alarm} alt="" className="w-7" />
            <div className="absolute w-5 h-5 rounded-full text-white top-0 -right-1 bg-red-500 flex items-center justify-center  text-xs">
              9
            </div>
          </div>
          <div className="my-auto h-full w-[1px] bg-black"></div>
          {/* settings  */}
          <img src={CogWheel} alt="" className="w-10" />
        </div>
        {/* @todo:Menu Hamburger  */}
        <button
          className={
            openMenu
              ? "menu-hamburger open-menu self-center  lg:hidden"
              : "menu-hamburger self-center  lg:hidden"
          }
          onClick={() => setOpenMenu(!openMenu)}
        >
          <span className="menu-top"></span>
          <span className="menu-middle"></span>
          <span className="menu-bottom"></span>
        </button>
      </div>
      {/* @todo:  Mobile Navigation  */}
      <div
        className={
          openMenu
            ? "flex flex-col space-y-6 absolute left-10 right-10 top-16 z-100 bg-loginFormBlue rounded-md px-16 py-10 lg:hidden"
            : "  hidden"
        }
      >
        <div className="flex flex-row text-white items-center space-x-2 px-2 py-1 rounded-md bg-loginFormBlue hover:bg-white hover:text-black transition-all duration-300">
          {/* img  */}
          <FontAwesomeIcon icon={faUser} className="text-loginFormBlue w-5" />
          {/* text  */}
          <p>User Profile</p>
        </div>

        <div className="flex flex-row text-white items-center space-x-2 px-2 py-1 rounded-md bg-loginFormBlue hover:bg-white hover:text-black transition-all duration-300">
          {/* img  */}
          <img src={Alarm} alt="" className="w-5" />
          {/* text  */}
          <p>Notifications</p>
        </div>
        <div className="flex flex-row text-white items-center space-x-2 px-2 py-1 rounded-md bg-loginFormBlue hover:bg-white hover:text-black transition-all duration-300">
          {/* img  */}
          <img src={CogWheel} alt="" className="  w-5" />
          {/* text  */}
          <p>Settings</p>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
