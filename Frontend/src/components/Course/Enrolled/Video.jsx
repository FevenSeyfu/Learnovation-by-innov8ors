// eslint-disable-next-line
import React from "react";
import PropTypes from "prop-types";
import { markSectionComplete } from "../../../utils/utils";
import GradientPurpleHeading from "../../utility/Heading/GradientPurpleHeading";

const Video = ({ completedSections, setCompletedSections }) => {
  const MarkAsComplete = () => {
    markSectionComplete(completedSections, setCompletedSections, "m1_s1_video");
  };

  Video.propTypes = {
    completedSections: PropTypes.array.isRequired,
    setCompletedSections: PropTypes.func.isRequired,
  };

  return (
    <div className="p-4 flex flex-col items-start gap-6 text-left">
      <div className="px-8">
        <GradientPurpleHeading size={"bold"}>
          Advanced Design Concepts
        </GradientPurpleHeading>
      </div>
      <div className="relative w-full h-[70%]">
        <video
          className="absolute inset-0 w-full h-auto object-cover"
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
