import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate ();
  const location = useLocation();
  
  const scrollToFeatures = () => {
    if (window.location.pathname !== "/") {
      navigate("/", { replace: true });
    }
    setTimeout(() => {
      const featuresSection = document.getElementById("features");
      if (featuresSection) {
        featuresSection.scrollIntoView({ behavior: "smooth" });
      }
    }, 0);
  };
  return (
    <header className="bg-lightOrange py-4 shadow-md px-6  md:mx-[10%] md:w-[80%]">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <img
            src="/LearnovationAcademyLogo.png"
            alt="Learnnovation Academy Logo"
            className="h-20"
          />
        </Link>
        <nav className="flex items-center space-x-4">
          <ul className="flex space-x-4 text-sm md:text-lg font-medium items-center">
            <li>
            {location.pathname === "/contact" ? (
                 <Link to="/" className="text-gray-700 hover:text-gray-900 cursor-pointer">
                 Home
               </Link>
              ) : (
                <button
                  onClick={scrollToFeatures}
                  className="text-gray-700 hover:text-gray-900 cursor-pointer"
                >
                  Features
                </button>
              )}
            </li>
            <li>
              <Link to="/contact" className="text-gray-700 hover:text-gray-900 cursor-pointer">
                Contact
              </Link>
            </li>
          </ul>

          <div className="flex items-center space-x-4 px-1">
            <Link
              to="/signup"
              className="bg-purple hover:opacity-95 text-white font-medium py-2 px-4 rounded focus:outline-none focus:shadow-outline cursor-pointer"
            >
              Sign Up
            </Link>
            <Link
              to="/login"
              className="bg-lightOrange hover:bg-gray-100 text-gray-700 font-medium py-2 px-4 rounded focus:outline-none focus:shadow-outline cursor-pointer"
            >
              Log In
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
