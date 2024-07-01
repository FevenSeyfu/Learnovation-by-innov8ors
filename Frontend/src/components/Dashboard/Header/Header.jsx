import React from "react";
import { Link } from "react-router-dom";
import searchIcon from "../../../assets/images/search_icon.png";

const Header = () => {
    return (
        <header className="bg-white py-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
            <div>
                <div class="relative">
                    <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                        <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                        </svg>
                    </div>
                    <input type="search" id="default-search" placeholder="Search" class="block w-full p-2 ps-10 text-sm border border-zinc-200 rounded-lg bg-white focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                </div>
            </div>
            <nav className="flex items-center space-x-4">
                  <ul className="flex space-x-4 text-lg font-medium items-center">
                      <li>
                          <Link to="/" className="flex items-center"> {/* Link for the logo */}
                          <img src="/LearnovationAcademyLogo.png" alt="Learnnovation Academy Logo" className="h-20" /></Link>
                      </li>
                      <li>
                          <Link to="/contact" className="text-gray-700 hover:text-gray-900">Contact</Link>
                      </li>
                  </ul>

                  <ul className="flex space-x-8 text-lg font-medium items-center">

                  </ul>

                  <div className="flex items-center space-x-4"> {/* Increased spacing with space-x-8 */}
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
