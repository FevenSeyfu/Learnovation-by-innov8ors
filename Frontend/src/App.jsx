import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/LandingPage/Layout";
import DashboardLayout from "./components/Layout/DashboardPage/Layout";
import NotFound from "./Pages/NotFound/NotFound";
import HomePage from "./Pages/LandingPage/HomePage";
import ContactUs from "./Pages/ContactUs/ContactUs";
import Login from "./Pages/Authentication/Login";
import SignUp from "./Pages/Authentication/SignUp";

import Dashboard from "./Pages/Dashboard/Dashboard";
import CourseDetail from "./Pages/Courses/CourseDetail";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* landing page */}
          <Route index element={<HomePage />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="*" element={<NotFound />} />
        </Route>
        {/* Authentication  */}
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />

        {/* portal layout */}
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="explore/courses/:courseId" element={<CourseDetail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
