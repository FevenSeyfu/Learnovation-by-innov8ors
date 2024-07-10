import React from "react";
import PropTypes from "prop-types";
import CheckedMark from "../../../assets/images/icons/courseEnrolled/CheckedMark.svg";
import BulletCircle from "../../../assets/images/icons/courseEnrolled/BulletCircle.svg";
import VideoIcon from "../../../assets/images/icons/courseEnrolled/VideoIcon.svg";
import InteractiveIcon from "../../../assets/images/icons/courseEnrolled/InteractiveIcon.svg";
import QuizIcon from "../../../assets/images/icons/courseEnrolled/QuizIcon.svg";
import ReadingIcon from "../../../assets/images/icons/courseEnrolled/ReadingIcon.svg";

const CourseEnrolledSidebar = ({
  completedSections,
  setCompletedSections,
  setActiveSection,
  activeSection,
  courseId,
}) => {
  const sections = [
    {
      title: "Advanced Design Concepts",
      items: [{ id: "m1_s1_video", label: "Video • 1hr", type: "video" }],
    },
    {
      title: "Design Thinking and Strategy",
      items: [
        { id: "m1_s1_reading", label: "Reading • 30 mins", type: "reading" },
        { id: "m1_s1_quiz", label: "Quiz • 1hr", type: "quiz" },
      ],
    },
    {
      title: "Creative Problem Solving",
      items: [
        {
          id: "m1_s2_interactive",
          label: "Interactive Tutorial • 30 mins",
          type: "interactive",
        },
        {
          id: "m1_s2_assignment",
          label: "Assignment • 1hr 30 mins",
          type: "assignment",
        },
      ],
    },
  ];
  const sectionIcons = {
    video: VideoIcon,
    reading: ReadingIcon,
    quiz: QuizIcon,
    interactive: InteractiveIcon,
    assignment: QuizIcon,
  };

  return (
    <div className=" bg-white p-4 rounded-lg shadow-md flex flex-col h-screen min-w-[326px]">
      {sections.map((section) => (
        <div key={section.title}>
          <h2 className="text-lg mt-4 mb-2 text-black">
          {section.title}
          </h2>
          <ul className="list-none pl-0">
          {section.items.map((item) => (
              <li key={item.id}  className="mb-2 flex items-center">
                <div
                  className={`w-6 h-6 rounded-full border border-gray-300 flex items-center justify-center ${
                    completedSections.includes(item.id)
                      ? "bg-green-500"
                      : ""
                  }`}
                  onClick={() =>
                    setCompletedSections([
                      ...completedSections,
                      item.id,
                    ])
                  }
                >
                  {completedSections.includes(item.id) ? (
                    <img
                      src={CheckedMark}
                      alt="Checkmark Icon"
                      className="w-5 h-5"
                    />
                  ) : (
                    <img
                      src={BulletCircle}
                      alt="Circle Icon"
                      className="w-5 h-5"
                    />
                  )}
                </div>
                <div
                  className={`flex items-center ml-3 cursor-pointer ${
                    item.type === activeSection ? "text-blue-500" : "text-gray-700"
                  }`}
                  onClick={() => setActiveSection(item.type)}
                >
                  <img
                    src={sectionIcons[item.type] || BulletCircle}
                    alt={`${
                        item.type.charAt(0).toUpperCase() + item.type.slice(1)
                    } Icon`}
                    className="w-5 h-5 mr-2"
                  />
                  {item.label}
                </div>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

CourseEnrolledSidebar.propTypes = {
  completedSections: PropTypes.array.isRequired,
  setCompletedSections: PropTypes.func.isRequired,
  setActiveSection: PropTypes.func.isRequired,
  courseId: PropTypes.number.isRequired,
};

export default CourseEnrolledSidebar;
