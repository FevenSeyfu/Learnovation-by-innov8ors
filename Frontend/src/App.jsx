import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/LandingPage/Layout";
import NotFound from "./components/Pages/NotFound/NotFound";
import HomePage from "./components/Pages/LandingPage/HomePage";
import ContactUs from "./components/Pages/LandingPage/ContactUs";
import Login from "./components/Pages/Authentication/Login";
import SignUp from "./components/Pages/Authentication/SignUp";
import Header from "./components/LandingPage/Header/Header.jsx";
import Footer from "./components/LandingPage/Footer/Footer.jsx";

function App() {
    return (
        <BrowserRouter>
            <div>
                <Header />
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<HomePage />} />
                        <Route path="/contact" element={<ContactUs />} />
                        <Route path="*" element={<NotFound />} />
                    </Route>
                    <Route path="/signup" element={<SignUp />} />
                    <Route path="/login" element={<Login />} />
                </Routes>
                <Footer /> {/* Render the Footer component at the end */}
            </div>
        </BrowserRouter>
    );
}

export default App;