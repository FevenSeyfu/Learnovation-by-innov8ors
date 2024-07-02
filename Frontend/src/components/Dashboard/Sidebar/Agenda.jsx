// eslint-disable-next-line no-unused-vars
import React from "react";
import { Link } from "react-router-dom";
import { useSidebar } from "../../../Context/SidebarContext";
import hostImg from "../../../assets/images/host-example.png";
import plansIcon from "../../../assets/images/plans.png";
import sasImg from "../../../assets/images/agenda-img-sas.png";
import calIcon from "../../../assets/images/calendar-icon.png";
import locIcon from "../../../assets/images/location-icon.png";
import catIcon from "../../../assets/images/category.png";

const Agenda = () => {
  const { toggleRightSidebar } = useSidebar();
  const { isRightSidebarExpanded } = useSidebar();
  return (
    <div className="h-screen border">
      
        <button onClick={toggleRightSidebar}>
        {(!isRightSidebarExpanded) && (
            <div className="p-6">
              <img src={plansIcon} alt="Plans Icon" className=""></img>
            </div>
            
          )}
          {isRightSidebarExpanded && (
            <div className="p-5 mb-4">
              <ul>
                <li className="flex items-center space-x-4">
                  <img src={plansIcon} alt="Plans Icon" ></img>
                  <p className="font-medium text-xl">Your Plan</p>
                </li>
              </ul>
            </div>
            
          )}
        </button>
      
      {isRightSidebarExpanded && (
        <div>
        <div class="p-5 mb-4 border border-gray-100 rounded-lg  dark:bg-gray-800 dark:border-gray-700">
            <time class="text-2xl font-medium text-gray-900 dark:text-white">Today</time>
            <ol class="mt-3 divide-y divider-gray-200 dark:divide-gray-700">
                <li>
                    <a href="#" class="items-center block p-3 sm:flex hover:bg-gray-100 dark:hover:bg-gray-700">
                        <img class="w-24 h-24 mb-3 me-3 rounded-lg sm:mb-0" src={sasImg} alt="Analytic Screens"/>
                        <div class="text-gray-600 dark:text-gray-400">
                            <p class="font-semibold text-lg">Strategic Analysis Showcase</p>

                            <div class="text-xs font-normal">
                              <ul>
                                <li className="flex items-center space-x-2">
                                  <img src={calIcon} alt="Calendar Icon"></img>
                                  <time className="">September 10, 2024</time>
                                  <img src={locIcon} alt="Location Icon"></img>
                                  <p className="">Virtual</p>
                                  <img src={catIcon} alt="Category Icon"></img>
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
            <time class="text-2xl font-medium text-gray-900 dark:text-white">This Month</time>
            <ol class="mt-3 divide-y divider-gray-200 dark:divide-gray-700">
                <li>
                    <a href="#" class="items-center block p-3 sm:flex hover:bg-gray-100 dark:hover:bg-gray-700">
                        <img class="w-12 h-12 mb-3 me-3 rounded-full sm:mb-0" src="/docs/images/people/profile-picture-4.jpg" alt="Laura Romeros image"/>
                        <div class="text-gray-600 dark:text-gray-400">
                            <div class="text-base font-normal"><span class="font-medium text-gray-900 dark:text-white">Laura Romeros</span> likes <span class="font-medium text-gray-900 dark:text-white">Bonnie Green's</span> post in <span class="font-medium text-gray-900 dark:text-white"> How to start with Flowbite library</span></div>
                            <div class="text-sm font-normal">"I wanted to share a webinar zeroheight."</div>
                            <span class="inline-flex items-center text-xs font-normal text-gray-500 dark:text-gray-400">
                                <svg class="w-2.5 h-2.5 me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="m2 13.587 3.055-3.055A4.913 4.913 0 0 1 5 10a5.006 5.006 0 0 1 5-5c.178.008.356.026.532.054l1.744-1.744A8.973 8.973 0 0 0 10 3C4.612 3 0 8.336 0 10a6.49 6.49 0 0 0 2 3.587Z"/>
                                    <path d="m12.7 8.714 6.007-6.007a1 1 0 1 0-1.414-1.414L11.286 7.3a2.98 2.98 0 0 0-.588-.21l-.035-.01a2.981 2.981 0 0 0-3.584 3.583c0 .012.008.022.01.033.05.204.12.401.211.59l-6.007 6.007a1 1 0 1 0 1.414 1.414L8.714 12.7c.189.091.386.162.59.211.011 0 .021.007.033.01a2.981 2.981 0 0 0 3.584-3.584c0-.012-.008-.023-.011-.035a3.05 3.05 0 0 0-.21-.588Z"/>
                                    <path d="M17.821 6.593 14.964 9.45a4.952 4.952 0 0 1-5.514 5.514L7.665 16.75c.767.165 1.55.25 2.335.251 6.453 0 10-5.258 10-7 0-1.166-1.637-2.874-2.179-3.407Z"/>
                                </svg>
                                Private
                            </span> 
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
