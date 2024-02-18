import { Outlet, Navigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import { useState } from "react";

const AppLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  return (
    <main>
      <Sidebar
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
      />
      <div className="lg:ml-24">
        <Navbar setIsSidebarOpen={setIsSidebarOpen} />
        <Outlet />
      </div>
    </main>
  );
};

export default AppLayout;
