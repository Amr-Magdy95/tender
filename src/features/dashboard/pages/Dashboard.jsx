import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPowerOff,
  faDollarSign,
  faCircleCheck,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import ProjectsTable from "../components/ProjectsTable";

const Dashboard = () => {
  return (
    <section className="bg-gray-100 py-10 px-6 ">
      {/* dashboard container  */}
      <div className="max-w-6xl mx-auto flex flex-col space-y-4">
        {/* Project, Employees Info  */}
        <div className="flex flex-col space-y-4 lg:flex-row lg:space-y-0 lg:space-x-2">
          {/* Project Overview  */}
          <div className="bg-white rounded-md  py-4 px-6 flex flex-col space-y-4 lg:w-3/5">
            {/* header  */}
            <div className="flex flex-row justify-between  items-center ">
              <h2 className="text-xl font-bold">Project 1. Overview</h2>
              <Link to="/" className="text-blue-900 font-semibold">
                Show more
              </Link>
            </div>
            {/* content  */}
            <div className="flex flex-col-reverse gap-y-4 lg:flex-row lg:gap-y-0 lg:space-x-4">
              {/* stats  */}
              <div className="flex flex-col space-y-2  flex-1">
                {/* item 1  */}
                <div className="flex justify-between  items-center ">
                  {/* icon and title  */}
                  <div className="flex flex-row space-x-2 items-center">
                    <FontAwesomeIcon
                      icon={faPowerOff}
                      className="text-loginFormBlue w-4"
                    />
                    <p className="font-thin text-gray-400 text-lg">
                      Start time
                    </p>
                  </div>

                  {/* date  */}
                  <p className="font-bold ">02-10-2022</p>
                </div>
                {/* item 2  */}
                <div className="flex justify-between  items-center">
                  {/* icon and title  */}
                  <div className="flex flex-row space-x-2 items-center">
                    <FontAwesomeIcon
                      icon={faCircleCheck}
                      className="text-loginFormBlue w-4"
                    />
                    <p className="font-thin text-gray-400 text-lg">
                      Completion date
                    </p>
                  </div>

                  {/* date  */}
                  <p className="font-bold ">02-10-2022</p>
                </div>
                {/* item 3  */}
                <div className="flex justify-between  items-center">
                  {/* icon and title  */}
                  <div className="flex flex-row space-x-2 items-center">
                    <FontAwesomeIcon
                      icon={faDollarSign}
                      className="text-loginFormBlue w-4"
                    />
                    <p className="font-thin text-gray-400 text-lg">
                      Estimated Budget
                    </p>
                  </div>

                  {/* date  */}
                  <p className="font-bold ">02-10-2022</p>
                </div>
              </div>
              {/* completion percentage  */}
              <div className="flex flex-col  pl-2 space-y-2  justify-center">
                <h2 className="text-lg font-bold ">Percent of Completion</h2>
                <p className="text-3xl text-blue-700 ">83%</p>
                <div className="w-full bg-gray-200 rounded-sm h-5 dark:bg-gray-700">
                  <div
                    className="bg-green-400 h-5 rounded-sm"
                    style={{ width: "83%" }}
                  ></div>
                </div>
              </div>
            </div>
          </div>

          {/* Employees Info  */}
          <div className="bg-white rounded-md  py-4 px-6 flex flex-col space-y-4 lg:w-2/5">
            {/* header  */}
            <div className="flex flex-row justify-between  items-center">
              <h2 className="text-xl font-bold">Employees Info</h2>
              <Link to="/" className="text-blue-900 font-semibold">
                Show more
              </Link>
            </div>

            {/* content  */}
            <div className="flex flex-col space-y-6">
              {/* item 1  */}
              <div className="flex flex-row justify-between text-gray-500 border-1 border-black border-t">
                <p>Yasser Ali</p>
                <p>Architect</p>
                <p>Project 1</p>
              </div>
              {/* item 1  */}
              <div className="flex flex-row justify-between text-gray-500 border-1 border-black border-t">
                <p>Yasser Ali</p>
                <p>Architect</p>
                <p>Project 1</p>
              </div>
              {/* item 1  */}
              <div className="flex flex-row justify-between text-gray-500 border-1 border-black border-t">
                <p>Yasser Ali</p>
                <p>Architect</p>
                <p>Project 1</p>
              </div>
            </div>
          </div>
        </div>
        {/* Projects section  */}
        <div className=" bg-white flex flex-col py-8 px-4 rounded-lg ">
          {/* Header  */}
          <div className="flex flex-col lg:flex-row lg:justify-between">
            {/* title  */}
            <h2 className="text-2xl font-bold">Projects</h2>
            {/* all fields  */}
            <div className="flex flex-col space-y-4 lg:flex-row lg:space-x-4 lg:space-y-0">
              {/* filters  */}
              <div className="flex flex-row space-x-4 items-center">
                <div className="flex-1 flex flex-row px-2  border-2 border-gray-300 rounded-lg">
                  <p className=" min-w-14">Sort by:</p>
                  <select name="" id="" className="flex-1 focus:outline-none  ">
                    <option value="">Title</option>
                  </select>
                </div>
                <button className="flex-1 flex items-center  space-x-3 border-2 border-gray-300 px-4 py-0 rounded-lg">
                  <div className="filters">
                    <span className="filters-top"></span>
                    <span className="filters-middle"></span>
                    <span className="filters-bottom"></span>
                  </div>
                  <p className="text-lg text-loginFormBlue">Filters</p>
                </button>
              </div>
              {/* search  */}
              <div className="flex flex-row justify-between items-center border-2 border-gray-300 px-2  rounded-lg">
                <input
                  type="text"
                  placeholder="Search"
                  className="w-full focus:outline-none flex-1 ml-3"
                />
                <FontAwesomeIcon
                  icon={faMagnifyingGlass}
                  className="text-gray-400"
                />
              </div>
            </div>
          </div>
          {/* Content  */}
          <div className="mt-8">
            <ProjectsTable />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
