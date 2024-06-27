import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
      <header className="bg-white py-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center"> {/* Wrapper for logo and text */}
            <img src="/LearnovationAcademyLogo.png" alt="Learnnovation Academy Logo" className="h-16 mr-4" />
            <span className="font-bold text-lg">LEARNOVATION ACADEMY</span>
          </div>

          <nav className="flex items-center">
            <ul className="flex space-x-6">
              <li>
                <Link to="/" className="text-blue-500 hover:text-blue-700">Home</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-700 hover:text-gray-900">Contact</Link>
              </li>
              <li>
                <Link to="/login" className="bg-gray-300 hover:bg-gray-400 text-gray-700 font-medium py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                  Sign In
                </Link>
              </li>
              <li>
                <Link to="/signup" className="bg-violet-500 hover:bg-violet-700 text-white font-medium py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                  Sign Up
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
  );
};

export default Header;