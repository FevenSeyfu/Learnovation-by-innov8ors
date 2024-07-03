import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/LandingPage/Layout";
import NotFound from "./Pages/NotFound/NotFound";
import HomePage from "./Pages/LandingPage/HomePage";
import ContactUs from "./Pages/ContactUs/ContactUs";
import Login from "./Pages/Authentication/Login";
import SignUp from "./Pages/Authentication/SignUp";
import Dashboard from "./Pages/Dashboard/Dashboard";
import DashboardLayout from "./components/Layout/DashboardPage/Layout";
import Onboarding from "./Pages/Onboarding/Onboarding";
import { OnboardingFormProvider } from "./Context/OnboardingFormContext";
import { SidebarProvider } from "./Context/SidebarContext";
import CourseDetail from "./Pages/Courses/CourseDetail";
import Events from "./Pages/Events/Events";
import Courses from "./Pages/Courses/Courses";
import Mentors from "./Pages/Mentors/Mentors";
import Streak from "./components/Dashboard/StreakTracker/StreakTracker";

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

        <Route
          path="/onboarding"
          element={
            <OnboardingFormProvider>
              <Onboarding />
            </OnboardingFormProvider>
          }
        />
        <Route path="/streak-tracker" element={<Streak />} />
         <Route path="dashboard" element={<SidebarProvider><DashboardLayout /></SidebarProvider>}>
          <Route index element={<Dashboard />} />
          <Route path="explore/courses" element={<Courses />} />
          <Route path="explore/events" element={<Events />} />
          <Route path="explore/mentors" element={<Mentors />} />
          <Route path="course/:id" element={<CourseDetail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
