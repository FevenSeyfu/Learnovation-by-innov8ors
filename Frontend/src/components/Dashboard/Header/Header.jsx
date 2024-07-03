import React from "react";
import { Link } from "react-router-dom";
import profileImg from "../../../assets/images/dashboard-profile-example.png";

const Header = () => {
    return (
        <header className="bg-white py-4 shadow-md dark:bg-gray-900 dark:text-white">
        <div className="container mx-auto flex justify-between items-center">
            <div>
                <div class="relative">
                    <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                        <svg className="w-4 h-4 text-gray-500 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                        </svg>
                    </div>
                    <input type="search" id="default-search" placeholder="Search" class="block w-full p-2 ps-10 text-sm border border-zinc-200 rounded-lg bg-white focus:ring-blue-500 focus:border-blue-500 dark:bg-zinc-900 dark:border-slate-700 dark:placeholder-white dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                </div>
            </div>
            <nav className="flex items-center space-x-4">
                  <ul className="flex space-x-4 text-lg font-medium items-center">
                      <li>
                          <Link to="/streak-tracker" className="flex items-center"> {/* Link for the logo */}
                            <svg class="w-6 h-6 text-gray-800 dark:text-white" width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path stroke="currentColor" d="M3.99621 18H2.99621L3.99621 11H0.496207C-0.0837926 11 -0.0737927 10.68 0.116207 10.34C0.306207 10 0.166207 10.26 0.186207 10.22C1.47621 7.94 3.41621 4.54 5.99621 0H6.99621L5.99621 7H9.49621C9.98621 7 10.0562 7.33 9.96621 7.51L9.89621 7.66C5.95621 14.55 3.99621 18 3.99621 18Z" fill="white"/>
                            </svg>
                          <p id="streak">0</p></Link>
                      </li>
                      <li>
                        <Link to="/inbox" className="flex items-center"> {/* Link for the logo */}
                            <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 13h3.439a.991.991 0 0 1 .908.6 3.978 3.978 0 0 0 7.306 0 .99.99 0 0 1 .908-.6H20M4 13v6a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-6M4 13l2-9h12l2 9"/>
                            </svg>
                        </Link>
                      </li>
                      <li>
                        <Link to="/dashboard" className="flex items-center"> {/* Link for the logo */}
                            <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5.365V3m0 2.365a5.338 5.338 0 0 1 5.133 5.368v1.8c0 2.386 1.867 2.982 1.867 4.175 0 .593 0 1.292-.538 1.292H5.538C5 18 5 17.301 5 16.708c0-1.193 1.867-1.789 1.867-4.175v-1.8A5.338 5.338 0 0 1 12 5.365ZM8.733 18c.094.852.306 1.54.944 2.112a3.48 3.48 0 0 0 4.646 0c.638-.572 1.236-1.26 1.33-2.112h-6.92Z"/>
                            </svg>
                        </Link>
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
