// eslint-disable-next-line
import React, { useState } from "react";
import PropTypes from "prop-types";

import { markSectionComplete } from "../../../utils/utils.js";
import GradientPurpleHeading from "../../utility/Heading/GradientPurpleHeading.jsx";
import ButtonCTA from "../../utility/Button/ButtonCTA.jsx";
import ProgressBar from "../../utility/ProgressBar/ProgressBar.jsx";
import ButtonSecondary from "../../utility/Button/ButtonSecondary.jsx";
import ButtonPrimary from "../../utility/Button/ButtonPrimary.jsx";
import completeIcon from '../../../assets/images/icons/courseEnrolled/icon-complete.svg'

const Quiz = ({ completedSections, setCompletedSections }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);
  const [showQuizStart, setShowQuizStart] = useState(true); // to manage initial quiz screen
  const [quizTaken, setQuizTaken] = useState(false); // Track if the quiz has been taken

  const MarkAsComplete = () => {
    markSectionComplete(completedSections, setCompletedSections, "m1_s1_quiz"); // Correctly call the function
  };

  const questions = [
    {
      questionText:
        "What is the primary goal of the empathize stage in design thinking?",
      answerOptions: [
        { answerText: "Defining the problem", isCorrect: false },
        { answerText: "Generating creative ideas", isCorrect: false },
        {
          answerText: "Understanding the users’ needs and experiences",
          isCorrect: true,
        },
        { answerText: "Build prototypes", isCorrect: false },
      ],
    },
    {
      questionText:
        "In which stage of design thinking do you create tangible representations of ideas?",
      answerOptions: [
        { answerText: "Empathize", isCorrect: false },
        { answerText: "Ideate", isCorrect: false },
        { answerText: "Prototype", isCorrect: true },
        { answerText: "Test", isCorrect: false },
      ],
    },
  ];

  const handleAnswerOptionClick = (questionId, answerText) => {
    setSelectedAnswers({
      ...selectedAnswers,
      [questionId]: answerText,
    });
  };

  const nextQuestion = () => {
    const nextQuestionIndex = currentQuestion + 1;
    if (nextQuestionIndex < questions.length) {
      setCurrentQuestion(nextQuestionIndex);
    } else {
      setShowResults(true);
    }
  };

  const previousQuestion = () => {
    const previousQuestionIndex = currentQuestion - 1;
    if (previousQuestionIndex >= 0) {
      setCurrentQuestion(previousQuestionIndex);
    }
  };

  const calculateScore = () => {
    let score = 0;
    questions.forEach((question, index) => {
      if (
        question.answerOptions.length > 0 &&
        selectedAnswers[index] &&
        questions[index].answerOptions.find(
          (option) =>
            option.answerText === selectedAnswers[index] && option.isCorrect
        )
      ) {
        score += 1;
      }
    });
    return score;
  };

  const getProgressPercentage = () => {
    if (currentQuestion === 0 && Object.keys(selectedAnswers).length === 0) {
      return 0;
    }
    return ((currentQuestion + 1) / questions.length) * 100;
  };

  const handleDoneClick = () => {
    setShowResults(false);
    setShowQuizStart(true);
    setCurrentQuestion(0);
    setSelectedAnswers({});
    setQuizTaken(true); // Mark the quiz as taken
  };

  const handleTakeQuizAgain = () => {
    setShowQuizStart(false);
    setShowResults(false);
    setCurrentQuestion(0);
    setSelectedAnswers({});
  };

  return (
    <div className="p-4 flex flex-col items-start gap-10 h-screen text-left">
      <header>
        <GradientPurpleHeading size={"bold"}>
          Design Thinking and Strategy Quiz
        </GradientPurpleHeading>
      </header>
      <div className="flex flex-col w-full gap-4 h-full">
        {showQuizStart ? (
          <div className="flex flex-col ">
            <p className="text-gray-700 mb-4 text-lg">
              After completing the reading, take this quiz to test your
              understanding of the key concepts. The quiz includes
              multiple-choice and short-answer questions to reinforce your
              learning.
            </p>
            <div className="flex justify-left mt-8">
              <div className="flex flex-col items-left">
                {quizTaken ? (
                  <>
                    <button
                      className="bg-purple-50 hover:bg-gradient-to-br focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 rounded-lg py-3 px-4 text-indigo-800 font-bold mt-4 ml-0"
                      onClick={MarkAsComplete}
                    >
                      Mark as Complete
                    </button>

                    <button
                      className="bg-white border border-gray-400 hover:bg-gray-300 text-gray-800 py-3 px-4 rounded focus:outline-none focus:shadow-outline mt-4"
                      onClick={handleTakeQuizAgain}
                    >
                      Take Quiz Again
                    </button>
                  </>
                ) : (
                  <ButtonCTA onClick={() => setShowQuizStart(false)}>
                    Start Quiz
                  </ButtonCTA>
                )}
              </div>
            </div>
          </div>
        ) : !showResults ? (
          <>
            <div className="flex items-center mb-4">
              <div className="bg-gray-200 rounded-full h-2 mb-2 w-full">
                <ProgressBar progressPercentage={getProgressPercentage()} />
              </div>
              {/* Display Percentage After Progress Bar */}
              <p className="text-gray-700 text-right ml-4 mb-2 text-lg">
                {getProgressPercentage()}%
              </p>
            </div>
            {currentQuestion < questions.length && (
              <div className="flex flex-col justify-between   h-full">
                <div>
                  <h2 className="text-lg font-bold mb-4 text-gray-800">
                    Question {currentQuestion + 1}:{" "}
                    {questions[currentQuestion].questionText}
                  </h2>
                  <ul className="list-none pl-0 mb-4">
                    {questions[currentQuestion].answerOptions.map(
                      (answerOption, index) => (
                        <li key={index} className="flex items-center mb-2">
                          <div className="border border-purple-500 rounded-lg px-4 py-2 flex items-center w-full justify-between">
                            <label htmlFor={index}>
                              {answerOption.answerText}
                            </label>
                            <input
                              type="radio"
                              name="answer"
                              id={index}
                              className="mr-2"
                              checked={
                                selectedAnswers[currentQuestion] ===
                                answerOption.answerText
                              }
                              onChange={() =>
                                handleAnswerOptionClick(
                                  currentQuestion,
                                  answerOption.answerText
                                )
                              }
                            />
                          </div>
                        </li>
                      )
                    )}
                  </ul>
                </div>

                {/* Button Group at the Bottom */}
                <div className="flex justify-center gap-4">
                  {currentQuestion > 0 && (
                    <ButtonSecondary
                      size={"2xl"}
                      color={"gray"}
                      onClick={previousQuestion}
                    >
                      Back
                    </ButtonSecondary>
                  )}
                  <ButtonPrimary
                    size={"2xl"}
                    onClick={nextQuestion}
                    disabled={!selectedAnswers[currentQuestion]}
                  >
                    Continue
                  </ButtonPrimary>
                </div>
              </div>
            )}
          </>
        ) : (
          <div>
            <div className="flex justify-center items-center mt-8">
              <img src={completeIcon} alt="" />
            </div>
            <div className=" text-center items-center ">
              <h2 className="text-2xl font-bold mt-4 text-gray-800">
                You completed the quiz!
              </h2>
              <p className="text-gray-700 mt-2">
                Your score: {calculateScore()} out of {questions.length}
              </p>
            </div>
            <div className="flex justify-center mt-8">
              <ButtonCTA onClick={handleDoneClick}>Done</ButtonCTA>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

Quiz.propTypes = {
  completedSections: PropTypes.array.isRequired,
  setCompletedSections: PropTypes.func.isRequired,
};

export default Quiz;
