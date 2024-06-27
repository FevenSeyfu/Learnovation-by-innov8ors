import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/LandingPage/Layout";
import NotFound from "./components/Pages/NotFound/NotFound";
import HomePage from "./components/Pages/LandingPage/HomePage";
import ContactUs from "./components/Pages/LandingPage/ContactUs";
import Login from "./components/Pages/Authentication/Login";
import SignUp from "./components/Pages/Authentication/SignUp";
import Header from "./Header"; // Import your Header component

function App() {
  return (
      <BrowserRouter>
        <div> {/* Add a div to wrap the header */}
          <Header /> {/* Render the Header component */}
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
          </Routes>
        </div>
      </BrowserRouter>
  );
}

export default App;