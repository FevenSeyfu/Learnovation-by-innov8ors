// eslint-disable-next-line no-unused-vars
import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
      <header className="bg-white py-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <Link to="/" className="flex items-center"> {/* Link for the logo */}
            <img src="/LearnovationAcademyLogo.png" alt="Learnnovation Academy Logo" className="h-20" />
          </Link>

          <nav className="flex items-center">
            <ul className="flex space-x-6 text-lg font-medium items-center">
              <li>
                <Link to="/contact" className="text-gray-700 hover:text-gray-900">Contact</Link>
              </li>
              <li>
                <Link to="/login" className="text-gray-700 hover:text-gray-900 font-bold">Log In</Link>
              </li>
              <li>
                <Link to="/signup" className="bg-gray-300 hover:bg-gray-400 text-gray-700 font-medium py-2 px-4 rounded focus:outline-none focus:shadow-outline"> {/* Link for Sign Up button */}
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