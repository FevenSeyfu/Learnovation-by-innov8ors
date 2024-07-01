// eslint-disable-next-line no-unused-vars
import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header className="bg-white py-4 shadow-md">
            <div className="container mx-auto flex justify-between items-center">
                <div className="flex items-center px-1">
                    <Link to="/">
                        <img src="/LearnovationAcademyLogo.png" alt="Learnnovation Academy Logo" className="h-12 md:h-20" />
                    </Link>
                </div>

                <nav className="flex items-center space-x-4">
                    <ul className="flex space-x-4 text-sm md:text-lg font-medium items-center"> {/* Reduced font size on mobile */}
                        <li>
                            <Link to="/features" className="text-gray-700 hover:text-gray-900">Features</Link>
                        </li>
                        <li>
                            <Link to="/contact" className="text-gray-700 hover:text-gray-900">Contact</Link>
                        </li>
                    </ul>

                    <div className="flex items-center space-x-4 px-1">
                        <Link to="/signup"
                              className="bg-purple hover:opacity-95 text-white font-medium py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                            Sign Up
                        </Link>
                        <Link to="/login"
                              className="bg-white hover:bg-gray-100 text-gray-700 font-medium py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                            Log In
                        </Link>
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default Header;