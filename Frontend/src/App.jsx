import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/LandingPage/Layout";
import NotFound from "./Pages/NotFound/NotFound";
import HomePage from "./Pages/LandingPage/HomePage";
import ContactUs from "./Pages/ContactUs/ContactUs";
import Login from "./Pages/Authentication/Login";
import SignUp from "./Pages/Authentication/SignUp";
import ResetPassword from "./Pages/Authentication/ResetPassword";
import ResetPasswordTwo from "./Pages/Authentication/ResetPasswordTwo";

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
      </Routes>
    </BrowserRouter>
  );
}

export default App;
