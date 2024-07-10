import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import circleIcon from '../assets/BulletCircle.svg';
import checkmarkIcon from '../assets/CheckedMark.svg';

const CourseEnrolledSidebar = ({ completedSections, setCompletedSections, courseId }) => {
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
                        onClick={() => setCompletedSections([...completedSections, 'm1_s1_video'])}
                    >
                        {completedSections.includes('m1_s1_video') ? (
                            <img src={checkmarkIcon} alt="Checkmark Icon" className="w-5 h-5" />
                        ) : (
                            <img src={circleIcon} alt="Circle Icon" className="w-5 h-5" />
                        )}
                    </div>
                    <Link
                        to={`/course/${courseId}/advanced-design-concepts/video`}
                        className={`flex items-center ml-3 ${activeSection === 'video' ? 'text-blue-500' : 'text-gray-700'}`}
                        onClick={() => handleSectionClick('video')}
                    >
                        <img src="/VideoIcon.svg" alt="Video Icon" className="w-5 h-5 mr-2" />
                        Video • 1hr
                    </Link>
                </li>
                <li className="mb-2 flex items-center">
                    <div
                        className={`w-6 h-6 rounded-full border border-gray-300 flex items-center justify-center ${
                            completedSections.includes('m1_s1_reading') ? 'bg-green-500' : ''
                        }`}
                        onClick={() => setCompletedSections([...completedSections, 'm1_s1_reading'])}
                    >
                        {completedSections.includes('m1_s1_reading') ? (
                            <img src={checkmarkIcon} alt="Checkmark Icon" className="w-5 h-5" />
                        ) : (
                            <img src={circleIcon} alt="Circle Icon" className="w-5 h-5" />
                        )}
                    </div>
                    <Link
                        to={`/course/${courseId}/design-thinking-and-strategy/reading`}
                        className={`flex items-center ml-3 ${activeSection === 'reading' ? 'text-blue-500' : 'text-gray-700'}`}
                        onClick={() => handleSectionClick('reading')}
                    >
                        <img src="/ReadingIcon.svg" alt="Video Icon" className="w-5 h-5 mr-2" />
                        Reading • 30 mins
                    </Link>
                </li>
                <li className="mb-2 flex items-center">
                    <div
                        className={`w-6 h-6 rounded-full border border-gray-300 flex items-center justify-center ${
                            completedSections.includes('m1_s1_quiz') ? 'bg-green-500' : ''
                        }`}
                        onClick={() => setCompletedSections([...completedSections, 'm1_s1_quiz'])}
                    >
                        {completedSections.includes('m1_s1_quiz') ? (
                            <img src={checkmarkIcon} alt="Checkmark Icon" className="w-5 h-5" />
                        ) : (
                            <img src={circleIcon} alt="Circle Icon" className="w-5 h-5" />
                        )}
                    </div>
                    <Link
                        to={`/course/${courseId}/design-thinking-and-strategy/quiz`}
                        className={`flex items-center ml-3 ${activeSection === 'quiz' ? 'text-blue-500' : 'text-gray-700'}`}
                        onClick={() => handleSectionClick('quiz')}
                    >
                        <img src="/QuizIcon.svg" alt="Quiz Icon" className="w-5 h-5 mr-2" />
                        Quiz • 1hr
                    </Link>
                </li>
                <li className="mb-2 flex items-center">
                    <div
                        className={`w-6 h-6 rounded-full border border-gray-300 flex items-center justify-center ${
                            completedSections.includes('m1_s1_interactive-tutorial') ? 'bg-green-500' : ''
                        }`}
                        onClick={() => setCompletedSections([...completedSections, 'm1_s1_interactive-tutorial'])}
                    >
                        {completedSections.includes('m1_s1_interactive-tutorial') ? (
                            <img src={checkmarkIcon} alt="Checkmark Icon" className="w-5 h-5" />
                        ) : (
                            <img src={circleIcon} alt="Circle Icon" className="w-5 h-5" />
                        )}
                    </div>
                    <Link
                        to={`/course/${courseId}/creative-problem-solving/interactive-tutorial`}
                        className={`flex items-center ml-3 ${activeSection === 'interactive-tutorial' ? 'text-blue-500' : 'text-gray-700'}`}
                        onClick={() => handleSectionClick('interactive-tutorial')}
                    >
                        <img src="/InteractiveIcon.svg" alt="Video Icon" className="w-5 h-5 mr-2" />
                        Interactive Tutorial • 30 mins
                    </Link>
                </li>
                <li className="mb-2 flex items-center">
                    <div
                        className={`w-6 h-6 rounded-full border border-gray-300 flex items-center justify-center ${
                            completedSections.includes('m1_s1_assignment') ? 'bg-green-500' : ''
                        }`}
                        onClick={() => setCompletedSections([...completedSections, 'm1_s1_assignment'])}
                    >
                        {completedSections.includes('m1_s1_assignment') ? (
                            <img src={checkmarkIcon} alt="Checkmark Icon" className="w-5 h-5" />
                        ) : (
                            <img src={circleIcon} alt="Circle Icon" className="w-5 h-5" />
                        )}
                    </div>
                    <Link
                        to={`/course/${courseId}/creative-problem-solving/assignment`}
                        className={`flex items-center ml-3 ${activeSection === 'assignment' ? 'text-blue-500' : 'text-gray-700'}`}
                        onClick={() => handleSectionClick('assignment')}
                    >
                        <img src="/QuizIcon.svg" alt="Video Icon" className="w-5 h-5 mr-2" />
                        Assignment • 1hr 30 mins
                    </Link>
                </li>
                <li className="mb-2 flex items-center">
                    <div
                        className={`w-6 h-6 rounded-full border border-gray-300 flex items-center justify-center ${
                            completedSections.includes('m1_s2_reading') ? 'bg-green-500' : ''
                        }`}
                        onClick={() => setCompletedSections([...completedSections, 'm1_s2_reading'])}
                    >
                        {completedSections.includes('m1_s2_reading') ? (
                            <img src={checkmarkIcon} alt="Checkmark Icon" className="w-5 h-5" />
                        ) : (
                            <img src={circleIcon} alt="Circle Icon" className="w-5 h-5" />
                        )}
                    </div>
                    <Link
                        to={`/course/${courseId}/design-thinking-and-strategy/reading`}
                        className={`flex items-center ml-3 ${activeSection === 'reading' ? 'text-blue-500' : 'text-gray-700'}`}
                        onClick={() => handleSectionClick('reading')}
                    >
                        <img src="/ReadingIcon.svg" alt="Video Icon" className="w-5 h-5 mr-2" />
                        Reading • 30 mins
                    </Link>
                </li>
                <li className="mb-2 flex items-center">
                    <div
                        className={`w-6 h-6 rounded-full border border-gray-300 flex items-center justify-center ${
                            completedSections.includes('m1_s2_quiz') ? 'bg-green-500' : ''
                        }`}
                        onClick={() => setCompletedSections([...completedSections, 'm1_s2_quiz'])}
                    >
                        {completedSections.includes('m1_s2_quiz') ? (
                            <img src={checkmarkIcon} alt="Checkmark Icon" className="w-5 h-5" />
                        ) : (
                            <img src={circleIcon} alt="Circle Icon" className="w-5 h-5" />
                        )}
                    </div>
                    <Link
                        to={`/course/${courseId}/design-thinking-and-strategy/quiz`}
                        className={`flex items-center ml-3 ${activeSection === 'quiz' ? 'text-blue-500' : 'text-gray-700'}`}
                        onClick={() => handleSectionClick('quiz')}
                    >
                        <img src="/QuizIcon.svg" alt="Quiz Icon" className="w-5 h-5 mr-2" />
                        Quiz • 30 mins
                    </Link>
                </li>
            </ul>
        </div>
    );
};

CourseEnrolledSidebar.propTypes = {
    completedSections: PropTypes.array.isRequired,
    setCompletedSections: PropTypes.func.isRequired,
    courseId: PropTypes.number.isRequired,
};

export default CourseEnrolledSidebar;