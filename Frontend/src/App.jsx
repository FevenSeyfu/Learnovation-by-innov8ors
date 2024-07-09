import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/LandingPage/Layout";
import DashboardLayout from "./components/Layout/DashboardPage/Layout";
import NotFound from "./Pages/NotFound/NotFound";
import HomePage from "./Pages/LandingPage/HomePage";
import ContactUs from "./Pages/ContactUs/ContactUs";
import Login from "./Pages/Authentication/Login";
import SignUp from "./Pages/Authentication/SignUp";
import ResetPassword from "./Pages/Authentication/ResetPassword";
import ResetPasswordTwo from "./Pages/Authentication/ResetPasswordTwo";
import Onboarding from "./Pages/Onboarding/Onboarding";

import { OnboardingFormProvider } from "./Context/OnboardingFormContext";
import { SidebarProvider } from "./Context/SidebarContext";
import { DropdownProvider } from "./Context/DropdownContext";

import Events from "./Pages/Events/Events";
import Courses from "./Pages/Courses/Courses";
import Mentors from "./Pages/Mentors/Mentors";

import CourseDetailPage from "./Pages/Courses/CourseDetailPage";
import DashboardPage from "./Pages/Dashboard/DashboardPage";

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
        <Route path="/resetPassword" element={<ResetPassword />} />
        <Route path="/resetPasswordTwo" element={<ResetPasswordTwo />} />

        <Route
          path="/onboarding"
          element={
            <OnboardingFormProvider>
              <Onboarding />
            </OnboardingFormProvider>
          }
        />

        <Route
          path="dashboard"
          element={
              <SidebarProvider>
                <DashboardLayout />
              </SidebarProvider>
          }
        >
          <Route index element={<DashboardPage />} />
          <Route path="explore/courses" element={<Courses />} />
          <Route path="explore/events" element={<Events />} />
          <Route path="explore/mentors" element={<Mentors />} />
          <Route path="course/:id" element={<CourseDetailPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
