import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/LandingPage/Layout";
import NotFound from "./components/Pages/NotFound/NotFound";
import HomePage from "./components/Pages/LandingPage/HomePage";
import ContactUs from "./components/Pages/LandingPage/ContactUs";
import Login from "./components/Pages/Authentication/Login";
import SignUp from "./components/Pages/Authentication/SignUp";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* landing page */}
          <Route index element={<HomePage />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="*" element={<NotFound />} />
          {/* Authentication  */}
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
