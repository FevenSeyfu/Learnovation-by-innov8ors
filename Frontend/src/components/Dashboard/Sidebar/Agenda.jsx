// eslint-disable-next-line no-unused-vars
import React from "react";
import { Link } from "react-router-dom";
import { useSidebar } from "../../../Context/SidebarContext";
import hostImg from "../../../assets/images/host-example.png";
import sasImg from "../../../assets/images/agenda-img-sas.png";

const Agenda = () => {
  const { toggleRightSidebar } = useSidebar();
  const { isRightSidebarExpanded } = useSidebar();
  return (
    <div className="h-full border dark:bg-gray-900 dark:text-white dark:border-neutral-800">
        <button onClick={toggleRightSidebar}>
        {(!isRightSidebarExpanded) && (
            <div className="p-6">
              <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 10h16M8 14h8m-4-7V4M7 7V4m10 3V4M5 20h14a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1Z"/>
              </svg>

            </div>
            
          )}
          {isRightSidebarExpanded && (
            <div className="p-5 mb-4">
              <ul>
                <li className="flex items-center space-x-4">
                  <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 10h16M8 14h8m-4-7V4M7 7V4m10 3V4M5 20h14a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1Z"/>
                  </svg>
                  <p className="font-medium text-xl">Your Plan</p>
                </li>
              </ul>
            </div>
            
          )}
        </button>
      
      {isRightSidebarExpanded && (
        <div>
        <div class="p-5 mb-4 border border-gray-100 rounded-lg  dark:bg-gray-800 dark:border-gray-900">
            <time class="text-2xl font-medium text-gray-900 dark:text-white">Today</time>
            <ol class="mt-3 divide-y divider-gray-200 dark:divide-gray-700">
                <li>
                    <a href="#" class="items-center block p-3 sm:flex ">
                        <img class="w-24 h-24 mb-3 me-3 rounded-lg sm:mb-0" src={sasImg} alt="Analytic Screens"/>
                        <div class="text-gray-600 dark:text-gray-400">
                            <p class="font-semibold text-lg dark:text-white">Strategic Analysis Showcase</p>

                            <div class="text-xs font-normal">
                              <ul>
                                <li className="flex items-center space-x-2">
                                  <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 10h16m-8-3V4M7 7V4m10 3V4M5 20h14a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1Zm3-7h.01v.01H8V13Zm4 0h.01v.01H12V13Zm4 0h.01v.01H16V13Zm-8 4h.01v.01H8V17Zm4 0h.01v.01H12V17Zm4 0h.01v.01H16V17Z"/>
                                  </svg>
                                  <time className="">September 10, 2024</time>
                                  <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"/>
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.8 13.938h-.011a7 7 0 1 0-11.464.144h-.016l.14.171c.1.127.2.251.3.371L12 21l5.13-6.248c.194-.209.374-.429.54-.659l.13-.155Z"/>
                                  </svg>
                                  <p className="">Virtual</p>
                                  <svg class="w-6 h-6 text-gray-800 dark:text-white fill-gray-800 dark:fill-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                    <path stroke="currentColor" d="M315.4 15.5C309.7 5.9 299.2 0 288 0s-21.7 5.9-27.4 15.5l-96 160c-5.9 9.9-6.1 22.2-.4 32.2s16.3 16.2 27.8 16.2H384c11.5 0 22.2-6.2 27.8-16.2s5.5-22.3-.4-32.2l-96-160zM288 312V456c0 22.1 17.9 40 40 40H472c22.1 0 40-17.9 40-40V312c0-22.1-17.9-40-40-40H328c-22.1 0-40 17.9-40 40zM128 512a128 128 0 1 0 0-256 128 128 0 1 0 0 256z"/>
                                  </svg>
                                  <p className="">Challenges</p>
                                </li>
                              </ul>
                            </div>

                            <div>
                              <ul>
                                <li className="flex items-center space-x-2">
                                <img src={hostImg} alt="Host Image"></img>
                                  <div>
                                    <p className="text-xs font-normal">Hosted By</p>
                                    <p className="text-sm font-medium">Name</p>
                                  </div>
                                </li>
                              </ul>
                            </div>
                        </div>
                    </a>
                </li>
            </ol>
        </div>
        
        <div class="p-5 border border-gray-100 rounded-lg  dark:bg-gray-800 dark:border-gray-700">
            <p class="text-2xl font-medium text-gray-900 dark:text-white">This Month</p>
            <p class="text-lg font-medium text-gray-900 dark:text-white">May 4th</p>
            <ol class="mt-3 divide-y divider-gray-200 dark:divide-gray-700">
                <li>
                    <a href="#" class="items-center block p-3 sm:flex ">
                        <img class="w-12 h-12 mb-3 me-3 rounded-full sm:mb-0" src="/LearnovationAcademyLogo.png" alt="Learnovation Academy Logo"/>
                        <div class="text-gray-600 dark:text-gray-400">

                            <div class="text-base font-normal ">
                            <ul>
                                <li className="flex items-center space-x-2">
                                  <div className="w-56">
                                    <p className="text-xl font-medium dark:text-white">Course Goal</p>

                                    <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700 font-semibold text-sm">
                                      <div className="bg-gradient-to-r from-violet-500 to-pink-500 h-2.5 rounded-full w-[36%]"> </div>36%
                                    </div>
                                  </div>
                                </li>
                              </ul>
                            </div>
                        </div>
                    </a>
                </li>
            </ol>
        </div>
        
        </div>
        )}
    </div>
  );
};

export default Agenda;
