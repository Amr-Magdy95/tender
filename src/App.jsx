import React from "react";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import LoginPage from "./features/login/pages/LoginPage";
import AppLayout from "./app/pages/AppLayout";
import Dashboard from "./features/dashboard/pages/Dashboard";
import Tasks from "./features/tasks/pages/Tasks";
import Projects from "./features/projects/pages/Projects";
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />

        <Route path="/" element={<AppLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="tasks" element={<Tasks />} />
          <Route path="projects" element={<Projects />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
