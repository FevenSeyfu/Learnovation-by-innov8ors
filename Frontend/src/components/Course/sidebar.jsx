import React, { useState } from 'react';
import { Link } from 'react-router-dom';


const Sidebar = ({ completedSections, setCompletedSections }) => {
    const [activeSection, setActiveSection] = useState(null);

    const handleSectionClick = (section) => {
        setActiveSection(section);
    };

    return (
        <div className="sidebar bg-white p-4 rounded-lg shadow-md flex flex-col h-screen">
            <h2 className="text-lg mt-4 mb-2 text-black">
                Advanced Design Concepts
            </h2>
            <ul className="list-none pl-0">
                <li className="mb-2 flex items-center">
                    <div
                        className={`w-6 h-6 rounded-full border border-gray-300 flex items-center justify-center ${
                            completedSections.includes('m1_s1_video') ? 'bg-green-500' : ''
                        }`}

                    >
                        {completedSections.includes('m1_s1_video') ? (
                            <img src="/CheckedMark.svg" alt="Checkmark Icon" className="w-5 h-5"/>
                        ) : (
                            <img src="/BulletCircle.svg" alt="Circle Icon" className="w-5 h-5"/>
                        )}
                    </div>
                    <Link
                        to="/courses/advanced-design-concepts/video"
                        className={`flex items-center ml-3 ${activeSection === 'video' ? 'text-blue-500' : 'text-gray-700'}`}
                        onClick={() => handleSectionClick('video')}
                    >
                        <img src="/VideoIcon.svg" alt="Video Icon" className="w-5 h-5 mr-2"/>
                        Video • 1hr
                    </Link>
                </li>
            </ul>

            <h2 className="text-lg mb-2 mt-4">Design Thinking and Strategy</h2>
            <ul className="list-none pl-0">
                <li className="mb-2 flex items-center">
                    <div
                        className={`w-6 h-6 rounded-full border border-gray-300 flex items-center justify-center ${
                            completedSections.includes('m1_s1_reading') ? 'bg-green-500' : ''
                        }`}

                    >
                        {completedSections.includes('m1_s1_reading') ? (
                            <img src="/CheckedMark.svg" alt="Checkmark Icon" className="w-5 h-5"/>
                        ) : (
                            <img src="/BulletCircle.svg" alt="Circle Icon" className="w-5 h-5"/>
                        )}
                    </div>

                    <Link
                        to="/courses/design-thinking-and-strategy/reading"
                        className={`flex items-center ml-3 ${activeSection === 'reading' ? 'text-blue-500' : 'text-gray-700'}`}
                        onClick={() => handleSectionClick('reading')}
                    >
                        <img src="/ReadingIcon.svg" alt="Video Icon" className="w-5 h-5 mr-2"/>
                        Reading • 30 mins
                    </Link>
                </li>

                <li className="mb-2 flex items-center">
                    <div
                        className={`w-6 h-6 rounded-full border border-gray-300 flex items-center justify-center ${
                            completedSections.includes('m1_s1_quiz') ? 'bg-green-500' : ''
                        }`}

                    >
                        {completedSections.includes('m1_s1_quiz') ? (
                            <img src="/CheckedMark.svg" alt="Checkmark Icon" className="w-5 h-5"/>
                        ) : (
                            <img src="/BulletCircle.svg" alt="Circle Icon" className="w-5 h-5"/>
                        )}
                    </div>

                    <Link
                        to="/courses/design-thinking-and-strategy/quiz"
                        className={`flex items-center ml-3 ${activeSection === 'quiz' ? 'text-blue-500' : 'text-gray-700'}`}
                        onClick={() => handleSectionClick('quiz')}
                    >

                        <img src="/QuizIcon.svg" alt="Quiz Icon" className="w-5 h-5 mr-2"/>
                        Quiz • 1hr
                    </Link>
                </li>
            </ul>

            <h2 className="text-lg font mb-2 mt-4">Creative Problem Solving</h2>
            <ul className="list-none pl-0">
                <li className="mb-2 flex items-center">
                    <div
                        className={`w-6 h-6 rounded-full border border-gray-300 flex items-center justify-center ${
                            completedSections.includes('video') ? 'bg-green-500' : ''
                        }`}

                    >
                        {completedSections.includes('video') ? (
                            <img src="/CheckedMark.svg" alt="Checkmark Icon" className="w-5 h-5"/>
                        ) : (
                            <img src="/BulletCircle.svg" alt="Circle Icon" className="w-5 h-5"/>
                        )}
                    </div>

                    <Link
                        to="/courses/creative-problem-solving/interactive-tutorial"
                        className={`flex items-center ml-3 ${activeSection === 'interactive-tutorial' ? 'text-blue-500' : 'text-gray-700'}`}

                    >
                        <img src="/InteractiveIcon.svg" alt="Video Icon" className="w-5 h-5 mr-2"/>
                        Interactive Tutorial • 30 mins
                    </Link>
                </li>
                <li className="mb-2 flex items center">
                    <div
                        className={`w-6 h-6 rounded-full border border-gray-300 flex items-center justify-center ${
                            completedSections.includes('video') ? 'bg-green-500' : ''
                        }`}

                    >
                        {completedSections.includes('video') ? (
                            <img src="/CheckedMark.svg" alt="Checkmark Icon" className="w-5 h-5"/>
                        ) : (
                            <img src="/BulletCircle.svg" alt="Circle Icon" className="w-5 h-5"/>
                        )}
                    </div>

                    <Link
                        to="/courses/creative-problem-solving/assignment"
                        className={`flex items-center ml-3 ${activeSection === 'assignment' ? 'text-blue-500' : 'text-gray-700'}`}
                        onClick={() => handleSectionClick('assignment')}
                    >
                        <img src="/QuizIcon.svg" alt="Video Icon" className="w-5 h-5 mr-2"/>
                        Assignment • 1hr 30 mins
                    </Link>
                </li>
            </ul>


            <h2 className="text-lg mb-2 mt-4">Design Thinking and Strategy</h2>
            <ul className="list-none pl-0">
                <li className="mb-2 flex items-center">
                    <div
                        className={`w-6 h-6 rounded-full border border-gray-300 flex items-center justify-center ${
                            completedSections.includes('video') ? 'bg-green-500' : ''
                        }`}

                    >
                        {completedSections.includes('video') ? (
                            <img src="/CheckedMark.svg" alt="Checkmark Icon" className="w-5 h-5"/>
                        ) : (
                            <img src="/BulletCircle.svg" alt="Circle Icon" className="w-5 h-5"/>
                        )}
                    </div>

                    <Link
                        to="/courses/design-thinking-and-strategy/reading"
                        className={`flex items-center ml-3 ${activeSection === 'reading' ? 'text-blue-500' : 'text-gray-700'}`}
                        onClick={() => handleSectionClick('reading')}
                    >
                        <img src="/ReadingIcon.svg" alt="Video Icon" className="w-5 h-5 mr-2"/>
                        Reading • 30 mins
                    </Link>
                </li>

                <li className="mb-2 flex items-center">
                    <div
                        className={`w-6 h-6 rounded-full border border-gray-300 flex items-center justify-center ${
                            completedSections.includes('video') ? 'bg-green-500' : ''
                        }`}

                    >
                        {completedSections.includes('video') ? (
                            <img src="/CheckedMark.svg" alt="Checkmark Icon" className="w-5 h-5"/>
                        ) : (
                            <img src="/BulletCircle.svg" alt="Circle Icon" className="w-5 h-5"/>
                        )}
                    </div>

                    <Link
                        to="/courses/design-thinking-and-strategy/quiz"
                        className={`flex items-center ml-3 ${activeSection === 'quiz' ? 'text-blue-500' : 'text-gray-700'}`}

                    >

                        <img src="/QuizIcon.svg" alt="Quiz Icon" className="w-5 h-5 mr-2"/>
                        Quiz • 30 mins
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;

