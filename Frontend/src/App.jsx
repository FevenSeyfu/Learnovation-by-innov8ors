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
// import ExploreCourses from "./Pages/Courses/ExploreCourses";
// import CourseDetail from "./Pages/Courses/CourseDetail";
// import ExploreEvents from "./Pages/Events/ExploreEvents";
// import MentorsPage from "./Pages/Mentors/MentorsPage";
// import MyLearning from "./Pages/Learning/MyLearning";
// import MyChannel from "./Pages/Channel/MyChannel";
// import ProfilePage from "./Pages/Channel/ProfilePage";


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
          {/* <Route path="explore/courses" element={<ExploreCourses />} />
          <Route path="explore/events" element={<ExploreEvents />} />
          <Route path="explore/courses/:courseId" element={<CourseDetail />} />
          <Route path="mentors" element={<MentorsPage />} />
          <Route path="my-learning" element={<MyLearning />} />
          <Route path="my-channel" element={<MyChannel />} />
          <Route path="my-channel/profile" element={<ProfilePage />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;