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
                    <a href="#" class="items-center block p-3 sm:flex ">
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
                                    <p className="text-xl font-medium">Course Goal</p>

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
