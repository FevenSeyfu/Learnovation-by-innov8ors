import React from "react";
import { Link } from "react-router-dom";
import searchIcon from "../../../assets/images/search_icon.png";
import bolt from "../../../assets/images/dashboard-bolt.png";
import inbox from "../../../assets/images/dashboard-inbox.png";
import notification from "../../../assets/images/dashboard-notifications_none.png";
import profileImg from "../../../assets/images/dashboard-profile-example.png";

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
                          <Link to="/streak-tracker" className="flex items-center"> {/* Link for the logo */}
                          <img src={bolt} alt="Bolt" className="" /><p id="streak">0</p></Link>
                      </li>
                      <li>
                        <Link to="/inbox" className="flex items-center"> {/* Link for the logo */}
                        <img src={inbox} alt="Inbox" className="" /></Link>
                      </li>
                      <li>
                        <Link to="/dashboard" className="flex items-center"> {/* Link for the logo */}
                        <img src={notification} alt="Notifications" className="" /></Link>
                      </li>
                  </ul>

                  <ul className="flex space-x-8 text-lg font-medium items-center">

                  </ul>

                  <div className="flex items-center space-x-4"> {/* Increased spacing with space-x-8 */}
                    <Link to="/dashboard" className="flex items-center"> {/* Link for the logo */}
                    <img src={profileImg} alt="Profile Image" className="" /></Link>
                  </div>
              </nav>
          </div>
      </header>
    );
};

export default Header;
