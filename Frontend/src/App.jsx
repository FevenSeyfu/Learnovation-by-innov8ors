import "./App.css";
import React, { useState } from 'react';
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
import { CourseProvider } from "./Context/CourseContext";

import Events from "./Pages/Events/Events";
import Courses from "./Pages/Courses/Courses";
import Mentors from "./Pages/Mentors/Mentors";

import CourseDetailPage from "./Pages/Courses/CourseDetailPage";
import DashboardPage from "./Pages/Dashboard/DashboardPage";
import CourseEnrolled from "./Pages/Courses/CourseEnrolled";


import Video from "./components/Course/Video";
import Quiz from "./components/Course/Quiz";
import Reading from "./components/Course/Reading";
import Assignment from "./components/Course/Assignment";
import CourseEnrolledSidebar from './components/Course/CourseEnrolledSidebar';

function App() {
    const [completedSections, setCompletedSections] = useState([]);

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
                    {/* Course Details and Routes */}
                    <Route
                        path="course/:id"
                        element={
                            <CourseProvider>
                                <CourseDetailPage />
                            </CourseProvider>
                        }
                    >
                        <Route
                            path="advanced-design-concepts/video"
                            element={
                                <Video
                                    completedSections={completedSections}
                                    setCompletedSections={setCompletedSections}
                                />
                            }
                        />
                        <Route
                            path="design-thinking-and-strategy/reading"
                            element={
                                <Reading
                                    completedSections={completedSections}
                                    setCompletedSections={setCompletedSections}
                                />
                            }
                        />
                        <Route
                            path="design-thinking-and-strategy/quiz"
                            element={
                                <Quiz
                                    completedSections={completedSections}
                                    setCompletedSections={setCompletedSections}
                                />
                            }
                        />
                        <Route
                            path="creative-problem-solving/assignment"
                            element={
                                <Assignment
                                    completedSections={completedSections}
                                    setCompletedSections={setCompletedSections}
                                />
                            }
                        />
                    </Route>
                    {/* Course Enrolled Route */}
                    <Route path="course/:id/enrolled" element={<CourseEnrolled completedSections={completedSections} setCompletedSections={setCompletedSections}/>} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;