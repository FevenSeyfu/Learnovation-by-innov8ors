// eslint-disable-next-line
import React from 'react';
import PropTypes from 'prop-types';
import { markSectionComplete } from '../../utils/utils.js';

const Video = ({ completedSections, setCompletedSections }) => {


    const MarkAsComplete = () => {
        markSectionComplete(completedSections, setCompletedSections, 'm1_s1_video'); // Correctly call the function
    };

    Video.propTypes = {
        completedSections: PropTypes.array.isRequired,
        setCompletedSections: PropTypes.func.isRequired,
    };

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold mb-4 text-gray-900 bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
                Advanced Design Concepts
            </h1>
            <div className="relative w-full h-96">
                <video

                    className="absolute inset-0 w-full h-full object-cover"
                    controls
                    src="https://www.w3schools.com/html/mov_bbb.mp4"
                />
            </div>

            <button
                className="bg-purple-50 hover:bg-gradient-to-br focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 rounded-lg py-3 px-4 text-indigo-800 font-bold mt-4 ml-0"
                onClick={MarkAsComplete}
            >
                Mark as Complete
            </button>
        </div>
    );
};
Video.propTypes = {
    completedSections: PropTypes.array.isRequired,
    setCompletedSections: PropTypes.func.isRequired,
};

export default Video;