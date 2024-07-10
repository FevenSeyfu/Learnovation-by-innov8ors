// eslint-disable-next-line
import React from 'react';
import PropTypes from 'prop-types';
import { markSectionComplete } from '../../utils/utils.js';

const Reading = ({ completedSections, setCompletedSections }) => {

    const handleDoneClick = () => {
        markSectionComplete(completedSections, setCompletedSections, 'm1_s1_reading'); // Correctly call the function
    };


    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold mb-4 text-gray-900 bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
                Design Thinking
            </h1>
            <h2 className="text-lg font-bold mb-4 text-gray-800">What is Design Thinking?</h2>
            <p className="text-lg mb-4 text-gray-700">
                Design thinking is a solution-focused approach to solving complex problems. It involves understanding
                the
                user, challenging assumptions, and redefining problems to identify alternative strategies and solutions
                that
                might not be instantly apparent.
            </p>
            <h3 className="text-xl font-bold mb-4 text-gray-800">Key stages include:</h3>
            <ul className="list-disc pl-6 mb-4 text-gray-700">
                <li>
                    <strong>1. Empathize:</strong> Understand the needs, experiences, and motivations of the people
                    you are designing for.
                </li>
                <li>
                    <strong>2. Define:</strong> Clearly articulate the problem you want to solve.
                </li>
                <li>
                    <strong>3. Ideate:</strong> Brainstorm a range of creative ideas.
                </li>
                <li>
                    <strong>4. Prototype:</strong> Build simple, tangible prototypes to explore potential solutions.
                </li>
                <li>
                    <strong>5. Test:</strong> Test the prototypes with real users to gather feedback and refine the
                    solutions.
                </li>
            </ul>
            <p className="text-lg mb-4 text-gray-700">
                In this reading, we will explore these stages in detail and discuss how they can be applied to real-world
                design challenges.
            </p>
            <button
                className="bg-purple-50 hover:bg-gradient-to-br focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 rounded-lg py-3 px-4 text-indigo-800 font-bold mt-4 ml-0"
                onClick={handleDoneClick}
            >
                Mark as Complete
            </button>
        </div>
    );
};
Reading.propTypes = {
    completedSections: PropTypes.array.isRequired,
    setCompletedSections: PropTypes.func.isRequired,
};

export default Reading;
